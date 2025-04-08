import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar2 from "../Components/Navbar2";
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/Stores.css';
import Sidebar from '../Components/sidebar';
import { get, post, API_URL, setAccessToken, clearAccessToken } from '../Components/api';
import Products_Sidebar from "../Components/products_sidebar";
import { Overlay } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { useParams } from 'react-router-dom';
import { YAxis } from "recharts";
import { add_store } from "./stores/Add_store";

export default function Stores(props) {
    const navigate = useNavigate();
    const params = useParams();
    const [mode, setMode] = useState("light");
    const [productData, setProductData] = useState([]);
    const [filteredProductData, setFilteredProductData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("BIRYANI'S");
    const [selectedItems, setSelectedItems] = useState([]);
    const [selectedTransactions, setSelectedTransactions] = useState([]);
    const [transactionQuantities, setTransactionQuantities] = useState([1]);
    //const [qty, setQty] = useState(1);
    const [formValues, setFormValues] = useState({
        qty: 1
    })
    const { qty } = formValues;

    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                const response = await post('/getitems', { mode: 1 });
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchDataFromAPI();
    }, []);
    const totalAmount = selectedTransactions.reduce(
        (total, transaction, index) =>
            total + (parseFloat(transaction.PRICE) * parseFloat(transactionQuantities[index]) || 0),
        0
    );
    const totalQty = selectedTransactions.reduce(
        (total, transaction, index) =>
            total + (parseFloat(transactionQuantities[index]) || 0),
        0
    );
    // Extract unique categories from productData
    const uniqueCategories = [...new Set(productData.map((item) => item.CATNAME))];

    // Update filteredProductData based on the selected category
    useEffect(() => {
        if (selectedCategory === null) {
            // No category selected, show all products
            setFilteredProductData(productData);
        } else {
            // Filter products based on the selected category
            const filteredProducts = productData.filter((item) => item.CATNAME === selectedCategory);
            setFilteredProductData(filteredProducts);
        }
    }, [selectedCategory, productData]);
    const handleaddNewStoreClick = () => {
        // Create a copy of the filteredProductData
        navigate('/add_stores');
    };

    const handleItemClick = (itemid) => {
        // Create a copy of the filteredProductData
        const updatedProductData = [...filteredProductData];
        const itemIndex = updatedProductData.findIndex((item) => item.ITEMID.toString() === itemid.toString());

        if (itemIndex !== -1) {
            // Toggle the isSelected property
            updatedProductData[itemIndex].isSelected = !updatedProductData[itemIndex].isSelected;
        }

        // Update the state
        setFilteredProductData(updatedProductData);
    };
    const _tdate = new Date();
    const save = async () => {
        let sb = '';
        sb += "<root>";
        for (let i = 0; i < selectedTransactions.length; i++) {
            sb += '<row ITEMID="' + selectedTransactions[i].ITEMID +
                '" QTY="' + selectedTransactions[i].QTY +
                '" RATE="' + selectedTransactions[i].PRICE +
                '" AMOUNT="' + selectedTransactions[i].AMOUNT +
                '" CREATEDBY="ADMIN" REMARKS="" ARATE="' + selectedTransactions[i].ARATE +
                '" DISCOUNT="' + selectedTransactions[i].DISCOUNT +
                '" CGST="' + selectedTransactions[i].CGST +
                '" SGST="' + selectedTransactions[i].SGST +
                '" IGST="' + selectedTransactions[i].IGST +
                '" TAXRATE="' + selectedTransactions[i].TAXRATE +
                '" TAXAMOUNT="' + selectedTransactions[i].TAXAMOUNT + '" />';
        }
        sb += "</root>";
        try {
            const response = await post('/placeorder', { CCODE: '700', TABLEID: params.id, TDATE: _tdate, BCODE: 1, SALE_QTY: totalQty.toFixed(2), SALE_AMOUNT: totalAmount.toFixed(2), CREATEDBY: "ADMIN", STRXML: sb });
            setSelectedItems([]);
            setSelectedTransactions([]);
            setTransactionQuantities([]);
            if (response.status === 200) {
                alert('Transaction Saved successfully');
            } else {
                alert('Failed to Save the Transaction');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }

    }
    const removeItem = (index) => {
        const updatedTransactions = selectedTransactions.filter((_, i) => i !== index);
        setSelectedTransactions(updatedTransactions);
    };
    const addToTransactions = () => {
        const newTransactions = filteredProductData
            .filter((item) => item.isSelected)
            .map((item, index) => {
                const quantity = parseFloat(qty || 1);
                const price = parseFloat(item.ARATE || 0);
                const amount = quantity * price;
                return {
                    ITEMID: item.ITEMID,
                    ITEMNAME: item.ITEMNAME,
                    PRICE: item.ARATE,
                    QTY: quantity,
                    AMOUNT: amount,
                    ARATE: item.RATE,
                    DISCOUNT: item.DISCOUNT,
                    CGST: item.CGST,
                    SGST: item.SGST,
                    IGST: item.IGST,
                    TAXRATE: item.TAXRATE,
                    TAMT: item.TAMT,
                    TAXAMOUNT: item.TAMT,
                };
            });
        setTransactionQuantities([...transactionQuantities, ...new Array(newTransactions.length).fill(1)]);
        setSelectedTransactions([...selectedTransactions, ...newTransactions]);
        setFilteredProductData(filteredProductData.map((item) => ({ ...item, isSelected: false })));
    };

    const changeHandler = (e, index) => {
        const { value } = e.target;
        // Use the functional update form to ensure the updatedTransactions is based on the latest state
        setSelectedTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions];
            updatedTransactions[index].QTY = parseFloat(value) || 0;
            return updatedTransactions;
        });
        // Update the transaction quantities state with the new quantity value
        setTransactionQuantities((prevQuantities) => {
            const newQuantities = [...prevQuantities];
            newQuantities[index] = parseFloat(value) || 0;
            return newQuantities;
        });
        setSelectedTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions];
            updatedTransactions[index].AMOUNT = parseFloat(updatedTransactions[index].PRICE * value) || 0;
            return updatedTransactions;
        });
        setSelectedTransactions((prevTransactions) => {
            const updatedTransactions = [...prevTransactions];
            //HERE WE R FACING AN ISSUE WHILE USING SAME TAXAMOUNT = TAXAMOUNT * QTY IS GIVING US 0 BECAUSE THE VALUE IS ASSINGING TO ITSELF
            //SO WE R USING ANOTHER PARAM AND ASSINGING THE INITIAL VALUE TO IT 
            updatedTransactions[index].TAXAMOUNT = parseFloat(updatedTransactions[index].TAMT * value) || 0;;
            return updatedTransactions;
        });
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
        }
    };

    return (
        <>
      <Navbar2 title="VST TECHONOLOGIES" />
            <div className="cls_dash_main">
                <div className="cls_dash_container">
                    <label htmlFor="" className="cls_dash_container_label">Store Management</label>
                    <div className="col">
                        <button className="cls_dash_btn" onClick={ handleaddNewStoreClick}>Add new Store</button>
                        <button className="cls_dash_btn">Sort Stores</button>
                        <button className="cls_dash_btn">Pending Approval</button>
                        <button className="cls_dash_btn">Reset All Filters</button>
                    </div>
                    
                </div>
                <div className="cls_dash_container">
                    <div className="cls_dash_content">
                        <div className="cls_dash_content_left">
                            <label htmlFor="" className="cls_dash_content_label">8</label>
                            <label htmlFor="" className="cls_dash_content_label1">Customer Acquired</label>

                        </div>
                        <div className="cls_dash_content_right">
                            <img src="/images/help 1.png" alt=""  width={"24px"}/>

                        </div>

                    </div>

                    <div className="cls_dash_content">
                        <div className="cls_dash_content_left">
                            <label htmlFor="" className="cls_dash_content_label">8</label>
                            <label htmlFor="" className="cls_dash_content_label1">Customer Acquired</label>

                        </div>
                        <div className="cls_dash_content_right">
                            <img src="/images/help 1.png" alt=""  width={"24px"}/>

                        </div>

                    </div>
                    <div className="cls_dash_content">
                        <div className="cls_dash_content_left">
                            <label htmlFor="" className="cls_dash_content_label">8</label>
                            <label htmlFor="" className="cls_dash_content_label1">Customer Acquired</label>

                        </div>
                        <div className="cls_dash_content_right">
                            <img src="/images/help 1.png" alt=""  width={"24px"}/>

                        </div>

                    </div>

                    <div className="cls_dash_content">
                        <div className="cls_dash_content_left">
                            <label htmlFor="" className="cls_dash_content_label">8</label>
                            <label htmlFor="" className="cls_dash_content_label1">Customer Acquired</label>

                        </div>
                        <div className="cls_dash_content_right">
                            <img src="/images/help 1.png" alt=""  width={"24px"}/>

                        </div>

                    </div>



                </div>

                <div className="cls_dash_container1">
                    <div className="cls_rec_order">
                        <label htmlFor="" className="cls_rec_label">Recent Orders</label>
                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">AARADHYA CHICKEN MART</label>
                                <label className="cls_rec_left_label1">#OD-5928-<span className="cls_rec_left_span">$250</span></label>

                            </div>

                        </div>
                        <div className="cls_rec_right">
                            <button className="cls_rec_btn">completed</button>
                            <button  className="cls_rec_btn_light"><span className="cls_rec_left_span">Completed in:</span> 32 minutes 8 seconds</button>
                        </div>
                        </div>

                    </div>

                    <div className="cls_rec_order1">
                    <label htmlFor="" className="cls_rec_label">New Signups</label>
                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>

                        <div className="cls_rec_order_cont">
                        <div className="cls_rec_left_signup">
                            <img src="./images/chicken.jpg" alt=""  style={{width:"44px",height:"44px"}}/>
                            <div className="cls_rec_left1">
                                <label htmlFor="" className="cls_rec_left_label">SAI</label>
                                <label className="cls_rec_left_label1">3 hours ago</label>

                            </div>

                        </div>
                        <div className="cls_rec_signup_right">
                            <button className="cls_rec_btn1">Customer</button>
                        </div>
                        </div>



                    

                    </div>

                    <div className="cls_rec_order2">
                    <label htmlFor="" className="cls_rec_label">Wallet Transactions</label>
                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>

                    <div className="cls_trans">
                        <label htmlFor="" className="cls_trans_label">Commision for order:<span className="cls_trans_span">$30.00</span></label>
                        <label className="cls_trans_label">OD-5928</label>
                        <label className="cls_trans_label1">2 hours ago</label>

                    </div>


                    </div>

                    <div className="cls_rec_order3">
                    <label htmlFor="" className="cls_order_label">6 Orders Today</label>
                    <button className="cls_order_btn">^ 100 % compared yesterday (as of 3:58PM)</button>


                    </div>

                </div>

                <div className="cls_dash_container2">
                    <div className="cls_review_outline">
                        <label htmlFor="" className="cls_rec_label">Latest Reviews</label>
                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                        <div className="cls_review">
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label">Customer: tirunagari keerthi</label>
                                <label htmlFor="" className="cls_review_label">Order: <span className="cls_review_span">#OD-5690</span></label>
                                <label htmlFor="" className="cls_review_label">Delivery: <span className="cls_review_span">THATIPELLI SRIDHAR REDDY</span></label>

                            </div>
                            <div className="cls_review_right">
                                <button className="cls_review_btn">5*</button>
                                <button className="cls_review_btn">5*</button>

                            </div>

                        </div>

                    </div>

                    <div className="cls_review_outline">
                        <label htmlFor="" className="cls_rec_label">Top Stores</label>
                        <label htmlFor="" className="cls_rec_label1">(This Month)</label>
                        <div className="cls_review">
                        <div className="cls_review_right">
                                <button className="cls_review_btn1">1</button>

                            </div>
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label1">MANASA MUTTON AND CHICKEN CENTER</label>
                                <label htmlFor="" className="cls_review_label2"><span className="cls_review_span1">$2222.00</span>revenue with 3 orders</label>

                            </div>
                            

                        </div>

                        <div className="cls_review">
                        <div className="cls_review_right">
                                <button className="cls_review_btn1">1</button>

                            </div>
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label1">MANASA MUTTON AND CHICKEN CENTER</label>
                                <label htmlFor="" className="cls_review_label2"><span className="cls_review_span1">$2222.00</span>revenue with 3 orders</label>

                            </div>
                            

                        </div>

                        <div className="cls_review">
                        <div className="cls_review_right">
                                <button className="cls_review_btn1">1</button>

                            </div>
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label1">MANASA MUTTON AND CHICKEN CENTER</label>
                                <label htmlFor="" className="cls_review_label2"><span className="cls_review_span1">$2222.00</span>revenue with 3 orders</label>

                            </div>
                            

                        </div>

                        <div className="cls_review">
                        <div className="cls_review_right">
                                <button className="cls_review_btn1">1</button>

                            </div>
                            <div className="cls_review_left">
                                <label htmlFor="" className="cls_review_label1">MANASA MUTTON AND CHICKEN CENTER</label>
                                <label htmlFor="" className="cls_review_label2"><span className="cls_review_span1">$2222.00</span>revenue with 3 orders</label>

                            </div>
                            

                        </div>

                    </div>

                    <div className="cls_review_outline">
                        <label htmlFor="" className="cls_rec_label">Notes</label>

                        <input type="text"  className="cls_review_input" placeholder="Add a note here"/>                    

                    </div>

                </div>

            </div>
    </>
    );
}

const selectedStyles = {
    backgroundColor: '#090464',
    color: '#fff',
    /* Add any other styles you want for selected items */
};

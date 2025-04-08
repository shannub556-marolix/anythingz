import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar2 from "../Components/Navbar2";
import axios from 'axios';
import '../css/Home.css';
import Sidebar from '../Components/sidebar';
import { get, post, API_URL, setAccessToken, clearAccessToken } from '../Components/api';
import Products_Sidebar from "../Components/products_sidebar";
import { Overlay } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { useParams } from 'react-router-dom';
import { YAxis } from "recharts";

export default function Orders(props) {
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
            {/* <Navbar2 title="VST TECHONOLOGIES" mode={mode} toggleMode={toggleMode} /> */}
            <h5>Table No. {params.id}</h5>
            <div className="container-fluid" style={{ gap: "10px", marginLeft: "10px", marginRight: "10px", background: '#f8f9fc' }}>
                <div className="row">
                    <div className="card col-md-2 my-2">
                        {/* Category sidebar */}
                        <div className="card-header text-bg-primary h5">
                            Categories
                        </div>
                        {/* <h5 class="card-title">Categories</h5> */}
                        <div className="container text-center col my-2">
                            {uniqueCategories.map((category) => (
                                <div className="col my-2" key={category}>
                                    <div
                                        className={`p-3 border rounded ${selectedCategory === category ? "selected-item" : ""
                                            }`}
                                        onClick={() => setSelectedCategory(category)}
                                        style={selectedCategory === category ? selectedStyles : {}}
                                    >
                                        {category}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="card col-md-6 my-2">
                        {/* Products */}
                        <div className="card-header text-bg-primary h5">
                            Products
                        </div>
                        <div className="container text-left">
                            <div className="row my-2">
                                {filteredProductData.map((item) => (
                                    <div className="col" key={item.ITEMID}>
                                        <div
                                            className={`p-3 border rounded ${selectedItems.includes(item.ITEMID) ? "selected-item" : ""
                                                }`}
                                            onClick={() => { handleItemClick(item.ITEMID); addToTransactions(); }}
                                            style={selectedItems.includes(item.ITEMID) ? selectedStyles : {}}>
                                            {item.ITEMNAME} Rs.{item.ARATE}/- <br />
                                            <span style={{ textDecoration: 'line-through' }}>
                                                Rs.{item.RATE}/-
                                            </span>  {item.DISCOUNT}% OFF
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 my-2" style={{ background: '#f8f9fc' }}>
                        {/* Transactions */}
                        <div className="card container">
                            <div className="card-header text-bg-primary row">
                                <div className="col">
                                    <h6>Item Name</h6>
                                </div>
                                <div className="col-2">
                                    <h6>Price</h6>
                                </div>
                                <div className="col-2">
                                    <h6>Qty</h6>
                                </div>
                                <div className="col-3">
                                    <h6>Amount</h6>
                                </div>
                            </div>
                            <div className="scrollable-div" style={{ height: "480px", overflow: "auto" }}>
                                {selectedTransactions.map((transaction, index) => (
                                    <div className="row border" style={{ marginLeft: "5px", marginRight: "5px" }} key={index}>
                                        <div className="col">
                                            <div className="p-2">{transaction.ITEMNAME}</div>
                                        </div>
                                        <div className="col-2">
                                            <div className="p my-3">{transaction.PRICE}</div>
                                        </div>
                                        <div className="col-2 my-2">
                                            <input type="text" className="form-control" aria-label="Sizing example input" onChange={(e) => changeHandler(e, index)}
                                                value={transactionQuantities[index] || ""} aria-describedby="inputGroup-sizing-sm" />
                                        </div>
                                        <div className="col-3">
                                            <div className="p-3">{(parseFloat(transaction.PRICE) * parseFloat(transactionQuantities[index])).toFixed(2)}</div>
                                        </div>
                                        <div className="col-1 mx-2 my-3"><BiTrash size={32} onClick={() => removeItem(index)} color="red" /></div>
                                    </div>
                                ))}
                            </div>
                            {/* Table footer */}
                            <div className="card-footer text-bg-secondary row">
                                <div className="col">
                                    <div className="h5">Total</div>
                                </div>
                                <div className="col-2">
                                    <div className="p-3"></div>
                                </div>
                                <div className="col-2">
                                    <div className="p-3"></div>
                                </div>
                                <div className="col-3 text-center">
                                    <div className="h5">{totalAmount.toFixed(2)}</div>
                                </div>
                            </div>
                        </div>
                        <button type="button" onClick={save} className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
            <div className="div">
                <table>
                    <thead className="card-header text-bg-primary">
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Amount</th>
                        <th></th>
                    </thead>
                    <tbody className="scrollable" style={{ height: "480px", overflow: "auto" }}>
                        {selectedTransactions.map((transaction, index) => (
                            <tr className="border">
                                <td>{transaction.ITEMNAME}</td>
                                <td>{transaction.PRICE}</td>
                                <td style={{ width: "40px" }}>
                                    <input type="text" className="form-control" aria-label="Sizing example input" onChange={(e) => changeHandler(e, index)}
                                        value={transactionQuantities[index] || ""} aria-describedby="inputGroup-sizing-sm" />
                                </td>
                                <td>{(parseFloat(transaction.PRICE) * parseFloat(transactionQuantities[index])).toFixed(2)}</td>
                                <td><BiTrash size={32} onClick={() => removeItem(index)} color="red" /></td>
                            </tr>

                        ))}
                    </tbody>
                    <tfoot className="card-footer text-bg-secondary">
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td>{totalAmount.toFixed(2)}</td>
                        <td></td>
                    </tfoot>
                </table>
            </div>
        </>
    );
}

const selectedStyles = {
    backgroundColor: '#090464',
    color: '#fff',
    /* Add any other styles you want for selected items */
};

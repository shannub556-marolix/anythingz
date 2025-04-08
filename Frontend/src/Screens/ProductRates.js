import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Navbar2 from "../Components/Navbar2";
import axios from 'axios';
import '../css/Home.css';
import { Form } from 'react-bootstrap';
import Sidebar from '../Components/sidebar';
import { get, post, put, remove, API_URL, setAccessToken, clearAccessToken } from '../Components/api';
import Products_Sidebar from "../Components/products_sidebar";
import { Overlay } from "react-bootstrap";
import { BiEdit, BiTrash } from "react-icons/bi";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

export default function ProductRates(props) {

    const [mode, setMode] = useState("light");
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const stateValus = useSelector(state => state.userLogin)
    const { loading, data, error, accessToken } = stateValus;
    const [categoryData, setCategoryData] = useState([]);
    const [productsData, setProductsData] = useState([]);
    const [productData, setProductData] = useState([]);
    const dispatch = useDispatch()
    const [formValues, setFormValues] = useState({
        itemid: '',
        itemname: '',
        isactive: false,
        createdby: '',
        rate: 0,
        fdate: '2023-10-01',
        tdate: '2023-10-01',
        sgst: 0,
        cgst: 0,
        igst: 0,
        button: 1
    });
    const { itemid, itemname, isactive, createdby, rate, fdate, tdate, sgst, cgst, igst, button } = formValues;
    const changeHandler = (e) => {
        const newvalue = e.target.type === "checkbox" ? e.target.checked === true ? 1 : 0 : e.target.value
        setFormValues({ ...formValues, [e.target.name]: newvalue })
    }
    const updateRate = async (id, name, isactive, rate, fdate, tdate, sgst, cgst, igst) => {
        setFormValues({ ...formValues, itemid: id, itemname: name, isactive: isactive, rate: rate, fdate: fdate, tdate: tdate, sgst: sgst, cgst: cgst, igst: igst, button: 0 });
    };

    useEffect(() => {
        async function fetchDataFromAPI() {
            try {
                const responseproduct = await get('/getproducts');
                setProductData(responseproduct.data);
                const responseproducts = await get('/getproductrates');
                setProductsData(responseproducts.data);
            } catch (error) {
                alert('Error fetching Products:', error);
            }
        }
        fetchDataFromAPI();
    }, [isButtonDisabled]);
    const removeItem = async (id) => {
        try {
            setButtonDisabled(true);
            const response = await post('/deleteproductrate', { itemid: id });
            if (response.status === 200) {
                alert(response.data.data);
            } else {
                alert('Failed to delete Product');
            }
            setTimeout(() => {
                setButtonDisabled(false);
            }, 2000);
        } catch (error) {
            alert('Error deleting Product:', error.message);
        }
    };
    const saveProductRate = async () => {
        //button 0 is update && button 1 is save
        if (button === 1) {
            try {
                const response = await post('/insertproductrates', { itemid: itemid, rate: rate, createdby: "ADMIN",fdate:fdate,tdate:tdate,sgst:sgst,cgst:cgst,igst:igst });
                if (response.status === 200) {
                    alert('Product Created successfully');
                } else {
                    alert('Failed to Create Product');
                }
            } catch (error) {
                alert('Error Creating Product:', error.message);
            }
        }
        else {
            try {
                const response = await put('/updateproductrates', { itemid: itemid, rate: rate, createdby: "ADMIN",fdate:fdate,tdate:tdate,sgst:sgst,cgst:cgst,igst:igst });
                setFormValues({ itemid: '', itemname: '', rate: '', createdby: '', fdate: '', tdate: '', sgst: '',cgst:'',igst:'', button: 1 })//1 is for setting the button text to save
                if (response.status === 200) {
                    alert('Product Updated successfully');
                } else {
                    alert('Failed to update Product');
                }
            } catch (error) {
                alert('Error Updating Product:', error.message);
            }
        }

    };

    const submitHandler = (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        saveProductRate();
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    }



   
    return (
        <>
            <div className="d-flex fixed-top" style={{ gap: "10px", height: "700px", marginLeft: "10px", marginRight: "10px", background: '#f8f9fc' }}>
                <div className="card col my-2 sticky-top">
                    <div className="card-header text-bg-primary h5">
                        Product Rate Master
                    </div>
                    <Form onSubmit={submitHandler}>
                        <Form.Group controlId="selectProduct" style={{ padding: "5px" }}>
                            <Form.Control
                                as="select"
                                name='itemid'
                                value={itemid}
                                onChange={changeHandler}>
                                <option value="">{itemname==='' ? ("Select Product.."):(itemname)  }</option>
                                {productData.map((item,index) => (
                                    <option key={productData[index].ITEMID} value={productData[index].ITEMID}>
                                        {productData[index].ITEMNAME}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <div className="row">
                            <div className="col">
                                <label className="custom-control-label" htmlFor="fdate">From Date </label>
                                <DatePicker selected={new Date(fdate)} maxDate={new Date('2099-12-31')} onChange={(date) => setFormValues({ ...formValues, fdate: date })} />
                            </div>
                            <div className="col">
                                <label className="custom-control-label" htmlFor="tdate">To Date </label>
                                <DatePicker selected={new Date(tdate)} minDate={new Date(fdate)} maxDate={new Date('2099-12-31')} onChange={(date) => setFormValues({ ...formValues, tdate: date })} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <Form.Group controlId="inputrate" style={{ padding: "5px" }}>
                                    <Form.Control
                                        type="text"
                                        name='rate'
                                        value={rate}
                                        onChange={changeHandler}
                                        placeholder="RATE"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group controlId="inputsgst" style={{ padding: "5px" }}>
                                    <Form.Control
                                        type="text"
                                        name='sgst'
                                        value={sgst}
                                        onChange={changeHandler}
                                        placeholder="SGST"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group controlId="inputcgst" style={{ padding: "5px" }}>
                                    <Form.Control
                                        type="text"
                                        name='cgst'
                                        value={cgst}
                                        onChange={changeHandler}
                                        placeholder="CGST"
                                    />
                                </Form.Group>
                            </div>
                            <div className="col">
                                <Form.Group controlId="inputigst" style={{ padding: "5px" }}>
                                    <Form.Control
                                        type="text"
                                        name='igst'
                                        value={igst}
                                        onChange={changeHandler}
                                        placeholder="IGST"
                                    />
                                </Form.Group>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isButtonDisabled} >
                            {button ? ("Save") : ("Update")}
                        </button>
                    </Form>
                    <div className="card-header text-bg-primary h5">
                    <div className="row">
                                    <div className="col-3">ITEMNAME</div>
                                    <div className="col">RATE</div>
                                    <div className="col">CGST</div>
                                    <div className="col">SGST</div>
                                    <div className="col">IGST</div>
                                    <div className="col">FROMDATE</div>
                                    <div className="col">TODATE</div> 
                                    <div className="col-1"></div>
                                    <div className="col-1"></div>
                                </div>
                    </div>
                    <div className="scrollable-div" style={{ height: "550px", overflow: "auto" }}>
                        {productsData.map((item, index) => (
                            <div className="row border" style={{ marginLeft: "5px", marginRight: "5px" }} key={index}>
                                <div className="row">
                                    <div className="col-3">{item.ITEMNAME}</div>
                                    <div className="col">{item.RATE}</div>
                                    <div className="col">{item.CGST}</div>
                                    <div className="col">{item.SGST}</div>
                                    <div className="col">{item.IGST}</div>
                                    <div className="col">{item.FDATE}</div>
                                    <div className="col">{item.TDATE}</div> 
                                    <div className="col-1"><BiEdit size={32} onClick={() => updateRate(item.ITEMID, item.ITEMNAME, item.ISACTIVE,item.RATE,item.FDATE,item.TDATE,item.SGST,item.CGST,item.IGST)} color="green" /></div>
                                    <div className="col-1"><BiTrash size={32} onClick={() => removeItem(item.ITEMID)} color="red" /></div>
                                </div>
                            </div>
                        ))}
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

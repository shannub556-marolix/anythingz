import React, { useEffect, useState } from "react";
import { Form, FormCheck } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, put } from '../../Components/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { Product_Model } from '../../Models/Product_Model';


export default function AddProducts() {


    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState(Product_Model);
    const [button, setButton] = useState(1);
    const [selectedStore, setSelectedStore] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [storesMap, setStoresMap] = useState(new Map());
    const getDetailsbyId = async (id) => {
        try {
            setLoading(true);
            const response = await post('/products/byid', { "productid": id });
            if (response.data.status === "success") {
                const Details = response.data.Data;
                // const storeid = storesMap.find((z) => z.zonename === Details.ZONE);
                const updatedFormValues = { ...formValues, ...Details };
                // if (zone) {
                //     updatedFormValues.ZONE = zone.zonename;
                // }
                setSelectedStore(updatedFormValues.STOREID);
                setFormValues(updatedFormValues);
                setButton(0);//Change Button Text to "Update"
            } else {
                alert('Failed to Fetch Product Details \n' + response.data);
            }

        } catch (error) {
            alert('Error while fetching Product Details :', error.message);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (state) {
            getStores();
            console.log('ID: ' + state.ID);
            if (state.ID !== '' && state.ID !== null) {
                getDetailsbyId(state.ID);
            };
        }
    }, [state]);
    const changeHandler = (e) => {
        const newvalue = e.target.type === "checkbox" ? (e.target.checked ? 1 : 0) : e.target.value;
        setFormValues((prevFormValues) => {
            const updatedFormValues = { ...prevFormValues, [e.target.name]: newvalue };
            // console.log('Updated formValues:', updatedFormValues);
            return updatedFormValues;
        });
        setSelectedStore(newvalue);
    }
    // const changeHandler = (e) => {
    //     const newvalue = e.target.type === "checkbox" ? (e.target.checked ? 1 : 0) : e.target.value;
    //     setFormValues({ ...formValues, [e.target.name]: newvalue });
    //     console.log('STOREID: ' + formValues.STOREID);
    // }
    const submitHandler = (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        save();
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    }


    const getStores = async () => {
        try {
            setLoading(true);
            const response = await get('/stores');
            if (response.data.status === "success") {
                // console.log('STOREID: '+response.data.Data.STOREID);
                if (response.data.Data && response.data.Data.length > 0) {
                    response.data.Data.forEach((storeData) => {
                        setStoresMap((prevMap) => {
                            const newMap = new Map(prevMap);
                            newMap.set(storeData.STOREID, storeData.STORENAME);
                            return newMap;
                        });
                    });
                }
                // setStoresMap((prevMap) => {
                //     prevMap.set(response.data.Data.STOREID, response.data.Data.STORENAME);
                //     return prevMap;
                //   });
            } else {
                alert('Failed to Fetch Stores \n' + response.data);
            }
        } catch (error) {
            alert('Error while fetching Stores:', error.message);
        } finally {
            setLoading(false);
        }
    }

    const save = async () => {
        //button 0 is update && button 1 is save
        if (button === 1) {
            try {
                const formData = { ...formValues };
                delete formData.PRODUCTID;
                // const request = ;
                const response = await post('/products/add', {
                    products: [formData]
                });
                if (response.data.status === "success") {
                    alert('Product Created successfully ');
                    navigate('/Items');
                } else {
                    alert('Failed to Create Product \n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Creating Product:', error.message);
            }
        }
        else {
            try {
                const response = await post('/products/update', { products: [formValues] });
                if (response.data.status === "success") {
                    alert('Product Updated successfully ');
                    setFormValues({ CATEGORYID: '', button: 1 })//1 is for setting the button text to save
                    navigate('/Items');
                } else {
                    alert('Failed to update Product \n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Updating Product:', error);
            }
        }

    };
    return (
        <>
            <div>
                {loading ? (
                    <Spinner title="Loading..," />
                ) : (
                    
                                    <div className="cls_form_outline">
                                        <div className="cls_form_out_container">
                                        <label htmlFor="" className="cls_form_out_label">{button ? "Add" : "Update"} Product</label>

                                            <Form onSubmit={submitHandler}>
                                                    <div className="cls_form_container">
                                                        <div className="cls_form_div">
                                                            <label className="cls_form_div_label cls_form_div_left">Product Name : </label>
                                                            <div className="cls_form_div_right">
                                                                <Form.Control type="text" name='PRODUCTNAME' className='cls_form_div_input' value={formValues.PRODUCTNAME} onChange={changeHandler} placeholder="Enter Product name" />
                                                            </div>
                                                        </div>
                                                        <div className="cls_form_div">
                                                            <label className="cls_form_div_label cls_form_div_left">Description : </label>
                                                            <div className="cls_form_div_right">
                                                                <Form.Control type="text" name='PRODUCT_DESCRIPTION' className='cls_form_div_input' value={formValues.PRODUCT_DESCRIPTION} onChange={changeHandler} placeholder="Enter Description" />
                                                            </div>
                                                        </div>
                                                        <div className="cls_form_div">
                                                            <label className="cls_form_div_label cls_form_div_left">PRODUCT TYPE : </label>
                                                            <div className="cls_form_div_right">
                                                                <Form.Control type="text" name='PRODUCT_TYPE' className='cls_form_div_input' value={formValues.PRODUCT_TYPE} onChange={changeHandler} placeholder="Enter PRODUCT TYPE " />
                                                            </div>
                                                        </div>
                                                        <div className="cls_form_div">
                                                            <label className="cls_form_div_label cls_form_div_left">THUMBNAIL URL : </label>
                                                            <div className="cls_form_div_right">
                                                                <Form.Control type="text" name='THUMBNAIL_URL' className='cls_form_div_input' value={formValues.THUMBNAIL_URL} onChange={changeHandler} placeholder="Enter THUMBNAIL URL " />
                                                            </div>
                                                        </div>
                                                        <div className="cls_form_div">
                                                            <label className="cls_form_div_label cls_form_div_left">IMAGE URL : </label>
                                                            <div className="cls_form_div_right">
                                                                <Form.Control type="text" name='IMAGE_URL' className='cls_form_div_input' value={formValues.IMAGE_URL} onChange={changeHandler} placeholder="Enter IMAGE URL " />
                                                            </div>
                                                        </div>
                                                        <div className="cls_form_div">
                                                            <label className="cls_form_div_label cls_form_div_left">PRODUCT STARTTIME : </label>
                                                            <div className="cls_form_div_right">
                                                                <Form.Control type="text" name='PRODUCT_STARTTIME' className='cls_form_div_input' value={formValues.PRODUCT_STARTTIME} onChange={changeHandler} placeholder="SELECT PRODUCT STARTTIME " />
                                                            </div>
                                                        </div>
                                                        <div className="cls_form_div">
                                                            <label className="cls_form_div_label cls_form_div_left">PRODUCT ENDTIME : </label>
                                                            <div className="cls_form_div_right">
                                                                <Form.Control type="text" name='PRODUCT_ENDTIME' className='cls_form_div_input' value={formValues.PRODUCT_ENDTIME} onChange={changeHandler} placeholder="SELECT PRODUCT ENDTIME " />
                                                            </div>
                                                        </div>
                                                        {/* <div className="cls_form_div">
                                                            <div className="cls_form_div_right">
                                                                <label className="cls_form_div_label cls_form_div_left" htmlFor="PRODUCT_STARTTIME">From Date : </label>
                                                                <DatePicker selected={new Date(formValues.PRODUCT_STARTTIME)} maxDate={new Date('2099-12-31')} onChange={(date) => setFormValues({ ...formValues, PRODUCT_STARTTIME: date })} />
                                                            </div>
                                                            <div className="cls_form_div_right">
                                                                <label className="cls_form_div_label cls_form_div_left" htmlFor="PRODUCT_ENDTIME">To Date : </label>
                                                                <DatePicker selected={new Date(formValues.PRODUCT_ENDTIME)} minDate={new Date(formValues.PRODUCT_ENDTIME)} maxDate={new Date('2099-12-31')} onChange={(date) => setFormValues({ ...formValues, PRODUCT_ENDTIME: date })} />
                                                            </div>
                                                        </div> */}
                                                        <div className="cls_form_div">
                                                            <label className="cls_form_div_label cls_form_div_left">TAG : </label>
                                                            <div className="cls_form_div_right">
                                                                <Form.Control type="text" name='TAG' className='cls_form_div_input' value={formValues.TAG} onChange={changeHandler} placeholder="SELECT TAG " />
                                                            </div>
                                                        </div>
                                                        <div className="cls_form_div">
                                                            <label className="cls_form_div_label cls_form_div_left">Store  :</label>
                                                            <div className="cls_form_div_right">
                                                                <Form.Control
                                                                    as="select"
                                                                    name="STOREID"
                                                                    className="cls_form_div_input"
                                                                    value={selectedStore}
                                                                    onChange={changeHandler}
                                                                >
                                                                    <option value="">Select Store</option>
                                                                    {Array.from(storesMap.entries()).map(([STOREID, STORENAME]) => (
                                                                        <option key={STOREID} value={STOREID}>
                                                                            {STORENAME}
                                                                        </option>
                                                                    ))}
                                                                </Form.Control>
                                                            </div>
                                                        </div>
<div className="cls_form_btn">
<button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                                                    {button ? ("Save") : ("Update")}
                                                </button>
</div>

                                                    </div>
                                                
                                            </Form>
                                        </div>
                                    </div>
                      
                )}
            </div>
        </>
    );
}



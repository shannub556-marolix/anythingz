import React, { useEffect, useState } from "react";
import { Form, FormCheck } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, put } from '../../Components/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { ProductPricingModel } from '../../Models/ProductPricingModel';


export default function AddProductPricing() {

    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState(ProductPricingModel);
    const [button, setButton] = useState(1);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedProduct, setSelectedProduct] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [storesMap, setStoresMap] = useState(new Map());
    const [productsMap, setProductsMap] = useState(new Map());
    const getDetailsbyId = async (id,storeid) => {
        try {
            setLoading(true);
            const response = await post('/productprice/byid', { "productid": id,"storeid":storeid });
            if (response.data.status === "success") {
                const Details = response.data.Data;
                // const storeid = storesMap.find((z) => z.zonename === Details.ZONE);
                const updatedFormValues = { ...formValues, ...Details };
                // if (zone) {
                //     updatedFormValues.ZONE = zone.zonename;
                // }
                setSelectedProduct(updatedFormValues.PRODUCTID);
                setSelectedStore(updatedFormValues.STOREID);
                setFormValues(updatedFormValues);
                setButton(0);//Change Button Text to "Update"
            } else {
                alert('Failed to Fetch Product Price Details \n' + response.data);
            }

        } catch (error) {
            alert('Error while fetching Product Price Details :', error.message);
        }
        finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (state) {
            getStores();
            getProducts();
            console.log('ID: ' + state.ID +', STOREID: '+state.STOREID);
            if (state.ID !== '' && state.ID !== null) {
                getDetailsbyId(state.ID,state.STOREID);
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
        setSelectedProduct(newvalue);
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
    const getProducts = async () => {
        try {
            setLoading(true);
            const response = await get('/products');
            if (response.data.status === "success") {
                // console.log('STOREID: '+response.data.Data.STOREID);
                if (response.data.Data && response.data.Data.length > 0) {
                    response.data.Data.forEach((ProductData) => {
                        setProductsMap((prevMap) => {
                            const newMap = new Map(prevMap);
                            newMap.set(ProductData.PRODUCTID, ProductData.PRODUCTNAME);
                            return newMap;
                        });
                    });
                }
                // setStoresMap((prevMap) => {
                //     prevMap.set(response.data.Data.STOREID, response.data.Data.STORENAME);
                //     return prevMap;
                //   });
            } else {
                alert('Failed to Fetch Products Price \n' + response.data);
            }
        } catch (error) {
            alert('Error while fetching Products Price :', error.message);
        } finally {
            setLoading(false);
        }
    }

    const save = async () => {
        //button 0 is update && button 1 is save
        if (button === 1) {
            try {
                const formData = { ...formValues };
                // delete formData.PRODUCTID;
                delete formData.CRDATE;
                // const request = ;
                const response = await post('/productprice/add', {
                    productprices: [formData]
                });
                if (response.data.status === "success") {
                    alert('Product Price Saved successfully ');
                    navigate('/Items');
                } else {
                    alert('Failed to Save Product Price \n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Saving Product Price:', error.message);
            }
        }
        else {
            try {
                const response = await post('/productprice/update', { productprices: [formValues] });
                if (response.data.status === "success") {
                    alert('Product Price Updated successfully ');
                    setFormValues({ CATEGORYID: '', button: 1 })//1 is for setting the button text to save
                    navigate('/Items');
                } else {
                    alert('Failed to update Product Price\n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Updating Product Price:', error);
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
                                        <label htmlFor="" className="cls_form_out_label">{button ? "Add" : "Update"} Product Pricing</label>

                                            <Form onSubmit={submitHandler}>
                                                    <div className="cls_form_container">
                                                        <div className="cls_form_div1">
                                                            <div className="cls_form_map_div2 cls_map_inner">
                                                                <label className="cls_form_div_label" htmlFor="">Start Date : <span class="text-danger">*</span></label>
                                                                <DatePicker
                                                                    selected={new Date(formValues.STARTDATE)}
                                                                    minDate={new Date()}
                                                                    maxDate={new Date(formValues.ENDDATE)}
                                                                    onChange={(date) => {
                                                                        if (date > new Date(formValues.ENDDATE)) {
                                                                            alert('Start Date should not be greater than End Date');
                                                                        } else {
                                                                            setFormValues({ ...formValues, STARTDATE: date });
                                                                        }
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="cls_form_map_div2 cls_map_inner">
                                                                <label className="cls_form_div_label" htmlFor="">End Date : <span class="text-danger">*</span></label>
                                                                <DatePicker
                                                                    selected={new Date(formValues.ENDDATE)}
                                                                    minDate={new Date(formValues.STARTDATE)}
                                                                    maxDate={new Date('2099-12-31')}
                                                                    onChange={(date) => {
                                                                        if (date < new Date(formValues.STARTDATE)) {
                                                                            alert('End date should be Lesser than Start Date');
                                                                        } else {
                                                                            setFormValues({ ...formValues, ENDDATE: date });
                                                                        }
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">Select Store  :<span class="text-danger">*</span></label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Select
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
                                                            </Form.Select>
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">Name : <span class="text-danger">*</span></label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='SGST' className='cls_form_div_input' value={formValues.SGST} onChange={changeHandler} placeholder="Enter SGST " />
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">Select Product : <span class="text-danger">*</span></label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Select
                                                                as="select"
                                                                name="PRODUCTID"
                                                                className="cls_form_div_input"
                                                                value={selectedProduct}
                                                                onChange={changeHandler}
                                                            >
                                                                <option value="">Select Product</option>
                                                                {Array.from(productsMap.entries()).map(([PRODUCTID, PRODUCTNAME]) => (
                                                                    <option key={PRODUCTID} value={PRODUCTID}>
                                                                        {PRODUCTNAME}
                                                                    </option>
                                                                ))}
                                                            </Form.Select>
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">DESCRIPTION : <span class="text-danger">*</span></label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='SGST' className='cls_form_div_input' value={formValues.SGST} onChange={changeHandler} placeholder="Enter SGST " />
                                                        </div>
                                                    </div>

                                                    <div className="cls_flex cls_flex_column cls_paddingTop_22px">
                                                                <label htmlFor="" className="cls_form_out_label">Variants</label>
                                                                <div className="cls_varaints_outline">
                                                                    <div className="cls_varaints_container">
                                                                        <div className="cls_flex cls_flex_gap_6px">
                                                                            <div className="">
                                                                            <Form.Control type="text" name='SGST' className='cls_form_div_input' value={formValues.SGST} onChange={changeHandler} placeholder="Enter SGST " />
                                                                            </div>
                                                                            <button className="cls_btn_cancel">X</button>
                                                                        </div>
                                                                    </div>
                                                                    <button className="cls_btn_light">Add Variants</button>
                                                                </div>
                                                    </div>

                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">PRICE : <span class="text-danger">*</span></label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='PRICE' className='cls_form_div_input' value={formValues.PRICE} onChange={changeHandler} placeholder="Enter PRICE" />
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">SGST % : <span class="text-danger">*</span></label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='SGST' className='cls_form_div_input' value={formValues.SGST} onChange={changeHandler} placeholder="Enter SGST " />
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">CGST % : <span class="text-danger">*</span></label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='CGST' className='cls_form_div_input' value={formValues.CGST} onChange={changeHandler} placeholder="Enter CGST " />
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">IGST % : <span class="text-danger">*</span></label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='IGST' className='cls_form_div_input' value={formValues.IGST} onChange={changeHandler} placeholder="Enter IGST " />
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">OTHER TAX % : </label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='OTHER_TAX' className='cls_form_div_input' value={formValues.OTHER_TAX} onChange={changeHandler} placeholder="Enter OTHER TAX " />
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">OTHERS : </label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='OTHERS' className='cls_form_div_input' value={formValues.OTHERS} onChange={changeHandler} placeholder="Enter Others " />
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="cls_form_btn1">
                                        <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                                            {button ? ("Save") : ("Update")}
                                        </button>
                                        </div>
                                    </Form>
                                </div>
                                    </div>
                    
                )
}
            </div >
        </>
    );
}

//STARTDATE = START DATE SHOULD NOT BE GREATER THAN END DATE
//ENDDATE = END DATE SHOULD NOT BE LESSER THAN START DATE

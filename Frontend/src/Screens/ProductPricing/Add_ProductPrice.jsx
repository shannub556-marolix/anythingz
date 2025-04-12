import React, { useEffect, useState } from "react";
import { Form, FormCheck } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, put } from '../../Components/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { AddonModel } from "../../Models/AddonModel";
import { ProductPricingModel } from '../../Models/ProductPricingModel';


export default function AddProductPricing() {

    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState(ProductPricingModel);
    const [button, setButton] = useState(1);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedType, setselectedType] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [storesMap, setStoresMap] = useState(new Map());
    const [productsMap, setProductsMap] = useState(new Map());
    const [Addons, setAddons] = useState(AddonModel);
    const [variants, setVariants] = useState([{ addonname: '' }]);

    const changeHandler1 = (e, index) => {
        const { name, value } = e.target;
        const updatedVariants = [...variants];
        updatedVariants[index][name] = value;
        setVariants(updatedVariants);
    };

    const addVariant = () => {
        setVariants([...variants, { addonname: '' }]);
    };

    const removeVariant = (indexToRemove) => {
        const filtered = variants.filter((_, index) => index !== indexToRemove);
        setVariants(filtered);
    };

    // const getDetailsbyId = async (id,storeid) => {
    //     try {
    //         setLoading(true);
    //         const response = await post('/attribute/byid', { "productid": id,"storeid":storeid });
    //         if (response.data.status === "success") {
    //             const Details = response.data.Data;
    //             // const storeid = storesMap.find((z) => z.zonename === Details.ZONE);
    //             const updatedFormValues = { ...formValues, ...Details };
    //             // if (zone) {
    //             //     updatedFormValues.ZONE = zone.zonename;
    //             // }
    //             setselectedType(updatedFormValues.PRODUCTID);
    //             setSelectedStore(updatedFormValues.STOREID);
    //             setFormValues(updatedFormValues);
    //             setButton(0);//Change Button Text to "Update"
    //         } else {
    //             alert('Failed to Fetch Product Price Details \n' + response.data);
    //         }

    //     } catch (error) {
    //         alert('Error while fetching Product Price Details :', error.message);
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // };

    const getDetailsbyId = async (id) => {
        try {
            setLoading(true);
            const response = await post('/attribute/byid', { "attributeid": id });
    
            if (response.data.status === "success") {
                const details = response.data.Data;

                const updatedFormValues = {
                    ...formValues,
                    Name: details.attributename || '',
                    STOREID: details.storeid || '',
                    PRODUCTID: details.type || ''
                };
    
                setSelectedStore(updatedFormValues.STOREID);
                setselectedType(updatedFormValues.PRODUCTID);
                setFormValues(updatedFormValues);
                setButton(0); // Change button text to "Update"
            } else {
                alert('Failed to Fetch Product Attribute Details \n' + JSON.stringify(response.data));
            }
        } catch (error) {
            alert('Error while fetching Product Attribute Details: ' + error.message);
        } finally {
            setLoading(false);
        }
    };
    

    // useEffect(() => {
    //     if (state) {
    //         getStores();
    //         console.log('ID: ' + state.ID +', STOREID: '+state.STOREID);
    //         if (state.ID !== '' && state.ID !== null) {
    //             getDetailsbyId(state.ID,state.STOREID);
    //         };
    //     }
    // }, [state]);

    useEffect(() => {
        if (state) {
            getStores();
            console.log('ID: ' + state.ID);
            if (state.ID !== '' && state.ID !== null) {
                getDetailsbyId(state.ID); // Only ID is needed
            };
        }
    }, [state]);

    const changeHandler = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? (checked ? 1 : 0) : value;
    
        setFormValues((prevFormValues) => ({
            ...prevFormValues,
            [name]: newValue
        }));
    
        // Update selectedStore or selectedType if relevant
        if (name === "STOREID") {
            setSelectedStore(newValue);
        } else if (name === "PRODUCTID") {
            setselectedType(newValue);
        }
    };
    

    // const changeHandler = (e) => {
    //     const newvalue = e.target.type === "checkbox" ? (e.target.checked ? 1 : 0) : e.target.value;
    //     setFormValues((prevFormValues) => {
    //         const updatedFormValues = { ...prevFormValues, [e.target.name]: newvalue };
    //         // console.log('Updated formValues:', updatedFormValues);
    //         return updatedFormValues;
    //     });
    //     setSelectedStore(newvalue);
    //     setselectedType(newvalue);
    // }
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


    // const save = async () => {
    //     //button 0 is update && button 1 is save
    //     if (button === 1) {
    //         try {
    //             const formData = { ...formValues };
    //             // delete formData.PRODUCTID;
    //             delete formData.CRDATE;
    //             // const request = ;
    //             const response = await post('/attribute/add', {
    //                 productprices: [formData]
    //             });
    //             if (response.data.status === "success") {
    //                 alert('Product Price Saved successfully ');
    //                 navigate('/Items');
    //             } else {
    //                 alert('Failed to Save Product Price \n' + JSON.stringify(response.data));
    //             }
    //         } catch (error) {
    //             alert('Error Saving Product Price:', error.message);
    //         }
    //     }
    //     else {
    //         try {
    //             const response = await post('/attribute/update', { productprices: [formValues] });
    //             if (response.data.status === "success") {
    //                 alert('Product Price Updated successfully ');
    //                 setFormValues({ CATEGORYID: '', button: 1 })//1 is for setting the button text to save
    //                 navigate('/Items');
    //             } else {
    //                 alert('Failed to update Product Price\n' + JSON.stringify(response.data));
    //             }
    //         } catch (error) {
    //             alert('Error Updating Product Price:', error);
    //         }
    //     }

    // };
    // const save = async () => {
    //     setLoading(true);
    //     try {
    //         const formData = {
    //             attributename: formValues.Name,
    //             storeid: formValues.STOREID,
    //             type: formValues.PRODUCTID
    //         };
    
    //         const response = await post('/attribute/add', {
    //             Attributes: [formData]
    //         });
    
    //         if (response.data.status === "success") {
    //             console.log('Attributes Saved Successfully');
    //             navigate('/Itemattributes');
    //         } else {
    //             alert('Failed to Save Attributes \n' + JSON.stringify(response.data));
    //         }
    //     } catch (error) {
    //         alert('Error Saving Attributes: ' + error.message);
    //     } finally{
    //         setLoading(false);
    //     }
    // };
    
    const save = async () => {
        setLoading(true);
        try {

            console.log('variants'+variants);
            if (button === 1) {
                // Save (Add) logic
                const formData = {
                    attributename: formValues.Name,
                    storeid: formValues.STOREID,
                    type: formValues.PRODUCTID,
                    Addons:variants
                };
    
                const response = await post('/attribute2/add', {
                    Attributes: [formData]
                });
    
                if (response.data.status === "success") {
                    alert('Attribute Saved Successfully');
                    navigate('/Itemattributes');
                } else {
                    alert('Failed to Save Attribute\n' + JSON.stringify(response.data));
                }
            } else {
                // Update logic
                const formData = {
                    attributeid: state?.ID, // Use the ID passed in location state
                    attributename: formValues.Name,
                    storeid: formValues.STOREID,
                    type: formValues.PRODUCTID,
                    Addons:variants
                };
    
                const response = await post('/attribute2/update', {
                    Attributes: [formData]
                });
    
                if (response.data.status === "success") {
                    alert('Attribute Updated Successfully');
                    navigate('/Itemattributes');
                } else {
                    alert('Failed to Update Attribute\n' + JSON.stringify(response.data));
                }
            }
        } catch (error) {
            alert('Error Saving/Updating Attribute: ' + error.message);
        } finally {
            setLoading(false);
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
                                                    
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left"> <span class="text-danger">*</span> Choose Store:</label>
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
                                                        <label className="cls_form_div_label cls_form_div_left"> <span class="text-danger">*</span> Name : </label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='Name' className='cls_form_div_input' value={formValues.Name || ''} onChange={changeHandler} placeholder="Enter SGST " />
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left"> <span class="text-danger">*</span> Type : </label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Select
                                                                as="select"
                                                                name="PRODUCTID"
                                                                className="cls_form_div_input"
                                                                value={selectedType}
                                                                onChange={changeHandler}
                                                            >
                                                                <option value="Select Product">Select Product</option>
                                                                <option value="SINGLE">SINGLE</option>
                                                                <option value="MULTIPLE">MULTIPLE</option>

                                                                {/* {Array.from(productsMap.entries()).map(([PRODUCTID, PRODUCTNAME]) => (
                                                                    <option key={PRODUCTID} value={PRODUCTID}>
                                                                        {PRODUCTNAME}
                                                                    </option>
                                                                ))} */}
                                                            </Form.Select>
                                                        </div>
                                                    </div>
                                                    <div className="cls_form_div">
                                                        <label className="cls_form_div_label cls_form_div_left">DESCRIPTION : <span class="text-danger">*</span></label>
                                                        <div className="cls_form_div_right">
                                                            <Form.Control type="text" name='DESCRIPTION' className='cls_form_div_input' value={formValues.DESCRIPTION || ''} onChange={changeHandler} placeholder="Enter SGST " />
                                                        </div>
                                                    </div>

                                                  

<div className="cls_flex cls_flex_column cls_paddingTop_22px">
            <label htmlFor="" className="cls_form_out_label">Variants</label>
            <div className="cls_varaints_outline">
                <div className="cls_varaints_container">
                    {variants.map((variant, index) => (
                        <div key={index} className="cls_varaints_container_con">
                            <div style={{ width: "44%" }}>
                                <Form.Control
                                    type="text"
                                    name="addonname"
                                    className="cls_form_div_input"
                                    value={variant.addonname}
                                    onChange={(e) => changeHandler1(e, index)}
                                    placeholder="Addon Name"
                                />
                            </div>
                            <button
                                type="button"
                                className="cls_btn_cancel"
                                onClick={() => removeVariant(index)}
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>
                <button type="button" className="cls_btn_light" onClick={addVariant}>
                    Add Variants
                </button>
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

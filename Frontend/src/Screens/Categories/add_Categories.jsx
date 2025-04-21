import React, { useEffect, useState } from "react";
import { Form, FormCheck } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, put } from '../../Components/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import { Category_Model } from '../../Models/CategoryModel';
import { postImage } from "../../Components/api";


export default function AddCategory() {


    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState(Category_Model);
    const [button, setButton] = useState(1);
    const [selectedStore, setSelectedStore] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [storesMap, setStoresMap] = useState(new Map());
    const [selectedFile, setselectedFile] = useState({});
    const [imageUrl, setImageUrl] = useState(formValues.IMAGE_URL || null);
    const getDetailsbyId = async (id) => {
        try {
            setLoading(true);
            const response = await post('/categories/byid', { "categoryid": id });
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
                alert('Failed to Fetch Category Details \n' + response.data);
            }

        } catch (error) {
            alert('Error while fetching Category Details :', error.message);
        }
        finally {
            setLoading(false);
        }
    };
    const handleFileSelect = (e) => {
        setselectedFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            alert('Please select an image first');
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append('image', selectedFile);

            const response = await postImage('/uploadImage', formData, true);

            if (response.data && response.data.image_path) {
                setImageUrl(response.data.image_path);
                setFormValues(prev => ({
                    ...prev,
                    CATEGORY_IMAGE_URL: response.data.image_path
                }
                ));
                alert('Image uploaded successfully!');
            } else {
                alert('Failed to upload image.');
            }
        } catch (error) {
            alert('Error uploading image: ' + error.message);
        } finally {
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
                delete formData.CATEGORYID;
                // const request = ;
                const response = await post('/categories/add', {
                    categories: [formData]
                });
                if (response.data.status === "success") {
                    alert('Category Created successfully ');
                    navigate('/Menucategories');
                } else {
                    alert('Failed to Create Category \n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Creating Category:', error.message);
            }
        }
        else {
            try {
                const response = await post('/categories/update', { categories: [formValues] });
                if (response.data.status === "success") {
                    alert('Category Updated successfully ');
                    setFormValues({ CATEGORYID: '', button: 1 })//1 is for setting the button text to save
                    navigate('/Menucategories');
                } else {
                    alert('Failed to update Category \n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Updating Category:', error);
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
                            <label htmlFor="" className="cls_form_out_label">{button ? "Add" : "Update"} Category</label>

                            <Form onSubmit={submitHandler}>
                                <div className="cls_form_container">
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Category Name : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='CATEGORYNAME' className='cls_form_div_input' value={formValues.CATEGORYNAME} onChange={changeHandler} placeholder="Enter Category name" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Description : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='CATEGORY_DESCRIPTION' className='cls_form_div_input' value={formValues.CATEGORY_DESCRIPTION} onChange={changeHandler} placeholder="Enter Description" />
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
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Image : </label>
                                        <div className="cls_form_div_right">
                                            <div className="cls_flex cls_flex_gap_6px">
                                                <input
                                                    type="file"
                                                    id="fileInput"
                                                    style={{ display: 'none' }}
                                                    onChange={handleFileSelect}
                                                    accept="image/*"
                                                />
                                                <button
                                                    type="button" // Important: prevent form submission
                                                    className="cls_btn_light"
                                                    onClick={() => document.getElementById('fileInput').click()}
                                                >
                                                    Select Image
                                                </button>
                                                <button
                                                    type="button" // Important: prevent form submission
                                                    className="cls_btn_light"
                                                    onClick={handleUpload}
                                                    disabled={!selectedFile}
                                                >
                                                    Upload Image
                                                </button>
                                            </div>
                                            {imageUrl && (
                                                <img
                                                    src={imageUrl}
                                                    alt="Uploaded"
                                                    style={{
                                                        width: 100,
                                                        height: 100,
                                                        marginTop: '10px',
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                            )}
                                        </div>
                                    </div>
                                    {/* <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Image URL : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='CATEGORY_IMAGE_URL' className='cls_form_div_input' value={formValues.CATEGORY_IMAGE_URL} onChange={changeHandler} placeholder="Enter Category Image URL " />
                                        </div>
                                    </div> */}
                                    
                                </div>


                                <div className="cls_form_btn1">
                                    <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                                        {button ? ("Save") : ("Update")}
                                    </button>
                                </div>

                            </Form>
                        </div>
                    </div>

                )}
            </div>
        </>
    );
}



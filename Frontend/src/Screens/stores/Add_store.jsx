import React, { useEffect, useState } from "react";
import { Form, FormCheck } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, put } from '../../Components/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import '../../css/Home.css';
import { postImage } from "../../Components/api";


export default function Add_store() {

    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [maplocation, setMaplocation] = useState({ lat: 51.505, lng: -0.09 });
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState(store_Model);
    const [button, setButton] = useState(1);

    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [zones, setZones] = useState([]);
    const [storecategories, setStorecategories] = useState([]);
    const [selectedFile, setselectedFile] = useState({});
    const [imageUrl, setImageUrl] = useState(formValues.IMAGE_URL || null);


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setMaplocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => {
                    console.error("Error fetching location: ", error);
                }
            );
        }
    }, []);

    const handleFileSelect = async (e) => {
        setselectedFile(e.target.files[0]);
        if (selectedFile) {
            await handleUpload();
        }
    };
    const chooseFromGallery = () => {
        alert('we are working on these features..,');
        return;
    }
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
                    IMAGE_URL: response.data.image_path,
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
    const getStoreDetailsbyId = async (id) => {
        try {
            setLoading(true);
            const response = await post('/stores/byid', { "STOREID": id });
            if (response.data.status === "success") {
                const storeDetails = response.data.Data;
                const zone = zones.find((z) => z.zonename === storeDetails.ZONE);
                const updatedFormValues = { ...formValues, ...storeDetails };
                if (zone) {
                    updatedFormValues.ZONE = zone.zonename;
                }
                setFormValues(updatedFormValues);
                setButton(0);//Change Button Text to "Update"
            } else {
                alert('Failed to Fetch Store Details \n' + response.data);
            }

        } catch (error) {
            alert('Error while fetching Store Details :', error.message);
        }
        finally {
            setLoading(false);
        }
    };
    // STOREID = state.STOREID;
    useEffect(() => {
        if (state) {
            getZones();
            if (state.STOREID !== '' && state.STOREID !== null) {
                getStoreDetailsbyId(state.STOREID);
            };
            getStoreCategories();
        }
    }, [state]);

    const changeHandler = (e) => {
        const newvalue = e.target.type === "checkbox" ? e.target.checked === true ? 1 : 0 : e.target.name === "ZONE" ? zones.find((zone) => zone.zonename === e.target.value)?.zoneid : e.target.value;
        setFormValues({ ...formValues, [e.target.name]: newvalue });
    }
    const submitHandler = (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        saveStore();
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    }


    const getZones = async () => {
        try {
            setLoading(true);
            const response = await get('/zones');
            if (response.data.status === "success") {
                setZones(response.data.Data);
            } else {
                alert('Failed to Fetch Zones \n' + response.data);
            }
        } catch (error) {
            alert('Error while fetching Zones:', error.message);
        } finally {
            setLoading(false);
        }
    }
    const getStoreCategories = async () => {
        try {
            setLoading(true);
            const response = await get('/storecategories');
            if (response.data.status === "success") {
                setStorecategories(response.data.Data);
            } else {
                alert('Failed to Fetch Storecategories \n' + response.data);
            }
        } catch (error) {
            alert('Error while fetching Storecategories:', error.message);
        } finally {
            setLoading(false);
        }
    }

    const saveStore = async () => {
        //button 0 is update && button 1 is save
        if (button === 1) {
            try {
                const formData = { ...formValues };
                delete formData.STOREID;
                // const request = ;
                const response = await post('/stores/add', {
                    stores: [formData]
                });
                if (response.data.status === "success") {
                    alert('Store Created successfully ');
                    navigate('/Stores');
                } else {
                    alert('Failed to Create Store \n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Creating Store:', error.message);
            }
        }
        else {
            try {
                const response = await post('/stores/update', { stores: [formValues] });
                if (response.data.status === "success") {
                    alert('Store Updated successfully ');
                    setFormValues({ STOREID: '', button: 1 })//1 is for setting the button text to save
                    navigate('/Stores');
                } else {
                    alert('Failed to update store \n' + JSON.stringify(response.data));
                }
            } catch (error) {
                alert('Error Updating store:', error);
            }
        }

    };
    return (
        <>
            <div>
                {loading ? (
                    <Spinner title="Loading..," />
                ) : (

                    <>
                    <div className="cls_form_outline">

                    {!button && (
                                                  <div className="cls_menu_left">
                                                  <label htmlFor="" className="cls_menu_left_label">Editing  London waffle co</label>
                                                  <div className="cls_menu_container">
                                                      <a href="#" className="cls_menu_container_cont" >
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >General</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Meta Data</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Operation Area & Zone</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Delivery</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Extras</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Actions</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Payment Gateways</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Comissions</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Payout Details</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Scheduling</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Sort Menus and items</label>
                          
                                                      </a>
                                                      <a href="#" className="cls_menu_container_cont">
                                                          <img src="https://prudvi.anythngz.com/apis/public/images/67fbbe706b734.png" alt="" width={"16px"}/>
                                                          <label htmlFor="" >Rating & Reviews</label>
                          
                                                      </a>
                          
                                                  </div>
                                                  </div>  
                        )}

                        <div className="cls_form_out_container">
                            <label htmlFor="" className="cls_form_out_label">{button ? "Add" : "Update"} Store</label>
                            <Form onSubmit={submitHandler}>
                                <div class="cls_form_container">
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Name : <span className="cls_danger_label">*</span> </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORENAME' className='cls_form_div_input' value={formValues.STORENAME} onChange={changeHandler} placeholder="Enter Store name" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Description : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='DESCRIPTION' className='cls_form_div_input' value={formValues.DESCRIPTION} onChange={changeHandler} placeholder="Enter Description" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Image : </label>
                                        <div className="cls_form_div_right">
                                            <div className="cls_flex cls_flex_gap_6px">
                                                <button
                                                    type="button" // Important: prevent form submission
                                                    className="cls_btn_light"
                                                    onClick={chooseFromGallery}
                                                    disabled={!selectedFile}
                                                >
                                                    Choose From Gallery
                                                </button>
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
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Default Rating : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='DEFAULT_RATING' className='cls_form_div_input' value={formValues.DEFAULT_RATING} onChange={changeHandler} placeholder="Enter Default Rating" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Approx Delivery Time : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='APPROX_DELIVERYTIME' className='cls_form_div_input' value={formValues.APPROX_DELIVERYTIME} onChange={changeHandler} placeholder="Enter Approx Delivery Time" />
                                        </div>
                                    </div>
                                    <div className="cls_break_line"></div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Category  :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name="STORECATEGORYID"
                                                className="cls_form_div_input"
                                                value={formValues.STORECATEGORYID}
                                                onChange={changeHandler}
                                            >
                                                <option value="">Select Store Category</option>
                                                {storecategories.map((scat) => (
                                                    <option key={scat.STORECATEGORYID} value={scat.STORECATEGORYID}>
                                                        {scat.STORECATEGORYNAME}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store URL: </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORE_URL' className='cls_form_div_input' value={formValues.STORE_URL} onChange={changeHandler} placeholder="Enter Store URL" />
                                        </div>
                                    </div>
                                    <div className="cls_break_line"></div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Full Address : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='FULL_ADDRESS' className='cls_form_div_input' value={formValues.FULL_ADDRESS} onChange={changeHandler} placeholder="Enter Full Address" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Pincode : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='PINCODE' className='cls_form_div_input' value={formValues.PINCODE} onChange={changeHandler} placeholder="Enter Pincode" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Landmark : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='LANDMARK' className='cls_form_div_input' value={formValues.LANDMARK} onChange={changeHandler} placeholder="Enter Landmark" />
                                        </div>
                                    </div>
                                    <div className="cls_form_map_outline">
                                        <label className="cls_form_div_label ">Locate on Map : </label>
                                        <div className="cls_form_map_div">
                                            <LoadScript googleMapsApiKey="AIzaSyAPIyfsaN6qqfiiyvZkY-BtKL1fzgCFVpg">
                                                <GoogleMap mapContainerStyle={containerStyle} center={maplocation} zoom={15}>
                                                    <Marker position={maplocation} />
                                                </GoogleMap>
                                            </LoadScript>
                                        </div>

                                        <div className="cls_form_div1">
                                            <div className="cls_form_map_div2">
                                                <label className="cls_form_div_label ">Latitude of the Store  : </label>
                                                <div className="">
                                                    <Form.Control type="text" name='STORE_LATITUDE' className='cls_form_div_input' value={formValues.STORE_LATITUDE} onChange={changeHandler} placeholder="Enter Latitude of the Store " />
                                                </div>
                                            </div>
                                            <div className="cls_form_map_div2">
                                                <label className="cls_form_div_label ">Longitude of the Store  : </label>
                                                <div className="">
                                                    <Form.Control type="text" name='STORE_LONGITUDE' className='cls_form_div_input' value={formValues.STORE_LONGITUDE} onChange={changeHandler} placeholder="Enter Longitude of the Store " />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="cls_break_line"></div>

                                    </div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Certificate/License Code  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='CERTIFICATE' className='cls_form_div_input' value={formValues.CERTIFICATE} onChange={changeHandler} placeholder="Enter Certificate/License Code " />
                                        </div>
                                    </div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Charge  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORE_CHARGE' className='cls_form_div_input' value={formValues.STORE_CHARGE} onChange={changeHandler} placeholder="Enter Store Charge (Packing/Extra) " />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Charge Tax  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORE_CHARGE_TAX' className='cls_form_div_input' value={formValues.STORE_CHARGE_TAX} onChange={changeHandler} placeholder="Enter Store Charge Tax" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Delivery Charge Type  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name='DELIVERY_CHARGE_TYPE'
                                                className='cls_form_div_input'
                                                value={formValues.DELIVERY_CHARGE_TYPE}
                                                onChange={changeHandler}
                                            >
                                                <option value="">Select Delivery Charge Type</option>
                                                <option value="Type 1">Type 1</option>
                                                <option value="Type 2">Type 2</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Delivery Type  :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name='DELIVERY_TYPE'
                                                className='cls_form_div_input'
                                                value={formValues.DELIVERY_TYPE}
                                                onChange={changeHandler}
                                            >
                                                <option value="">Select Delivery Type</option>
                                                <option value="Type 1">Type 1</option>
                                                <option value="Type 2">Type 2</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Delivery Charge  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='DELIVERY_CHARGE' className='cls_form_div_input' value={formValues.DELIVERY_CHARGE} onChange={changeHandler} placeholder="Enter Delivery Charge" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Minimum Order Price  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='MIN_ORDER_PRICE' className='cls_form_div_input' value={formValues.MIN_ORDER_PRICE} onChange={changeHandler} placeholder="Enter Minimum Order Price" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Store Tax Percentage  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='STORE_TAX_PERCENTAGE' className='cls_form_div_input' value={formValues.STORE_TAX_PERCENTAGE} onChange={changeHandler} placeholder="Enter Store Tax Percentage" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Commission Type :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name='COMMISSION_TYPE'
                                                className='cls_form_div_input'
                                                value={formValues.COMMISSION_TYPE}
                                                onChange={changeHandler}
                                            >
                                                <option value="">Select Commission Type</option>
                                                <option value="Type 1">Type 1</option>
                                                <option value="Type 2">Type 2</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Commission Rate  : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='COMMISSION_RATE' className='cls_form_div_input' value={formValues.COMMISSION_RATE} onChange={changeHandler} placeholder="Enter Commission Rate" />
                                        </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Zone  :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                as="select"
                                                name="ZONE"
                                                className="cls_form_div_input"
                                                value={zones.find((zone) => zone.zoneid === formValues.ZONE)?.zonename || ""}
                                                onChange={changeHandler}
                                            >
                                                <option value="">Select ZONE</option>
                                                {zones.map((zone) => (
                                                    <option key={zone.zoneid} value={zone.zonename}>
                                                        {zone.zonename}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </div>
                                    </div>
                                    <div className="cls_break_line"></div>
                                    <div className="cls_form_btn1">
                                        <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                                            {button ? ("Save") : ("Update")}
                                        </button>
                                    </div>
                                </div>

                            </Form>
                        </div>
                    </div>
                    </>
                )}
            </div>
        </>
    );
}

const containerStyle = {
    width: "100%",
    height: "400px"
};
/* Fields that are requeired in this form
 
1. Edit Text  - Store Name 
2. Eidt Text  - Description
3. Buttons  - Select Image
4. Eidt Text  - Default Rating
5. Eidt Text  - Approx Delivery Time
6. Eidt Text  - Full Address
7. Eidt Text  - Pincode
8. Eidt Text  - Landmark
9. Map (Google Map View based on Latitude & Longitude)
10.Eidt Text  - Latitude of the Store 
11.Eidt Text  - Longitude of the Store
12.Eidt Text  - Certificate/License Code
13.Eidt Text  - Store Charge (Packing/Extra)
14.Eidt Text  - Store Charge Tax Percentage
15.Drop Down  - Delivery Type 
16.Operational Areas (Multiple Selections)
17.Drop Down  - Delivery Charge Type
18.Eidt Text  - Delivery Charge:
19.Toggle Button  - Is Pure Veg?
20.Eidt Text  - Min Order Price
21.Eidt Text  - Store Tax Percentage
22.Drop Down  - Commission Type *
23.Eidt Text  - Commission Rate % *
24.Drop Down  - Zone
 
*/

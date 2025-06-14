import React, { useEffect, useRef, useState } from "react";
import { Form, FormCheck } from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import { get, post, put } from '../../Components/api';
import { useLocation } from 'react-router-dom';
import Spinner from '../../Components/Spinner';
import { useNavigate } from 'react-router-dom';
import DatePicker from "react-datepicker";
import { Product_Model } from '../../Models/Product_Model';
import { postImage } from "../../Components/api";

export default function AddProducts() {


    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [loading, setLoading] = useState(false);
    const [mode, setMode] = useState(true)
    const [formValues, setFormValues] = useState(Product_Model);
    const [button, setButton] = useState(1);
    const [selectedStore, setSelectedStore] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItemCategory, setSelectedItemCategory] = useState('');
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [storesMap, setStoresMap] = useState(new Map());
    const [ItemsCategoryMap, setItemsCategoryMap] = useState(new Map());
    const [attributes, setAttributes] = useState([]);
    const [selectedAddons, setSelectedAddons] = useState([]);
    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const [addonPrices, setAddonPrices] = useState({});
    const containerRef = useRef(null);
    const [selectedFile, setselectedFile] = useState({});
    const [imageUrl, setImageUrl] = useState(formValues.IMAGE_URL || null);

    const [toggles, setToggles] = useState({
        recommended: false,
        popular: false,
        isNew: false,
    });

    const handleToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }));
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsPopupVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // const handleFileSelect = async (e) => {
    //     const file = e.target.files[0];
    //     if (!file) {
    //         alert('Please select an image to upload.');
    //         return;
    //     }

    //     try {
    //         setLoading(true);
    //         const formData = new FormData();
    //         formData.append('image', file);

    //         const response = await postImage('/uploadImage', formData, true);

    //         if (response.data && response.data.image_path) {
    //             setImageUrl(response.data.image_path);
    //             setFormValues(prev => ({
    //                 ...prev,
    //                 IMAGE_URL: response.data.image_path,
    //                 THUMBNAIL_URL: response.data.image_path
    //             }));
    //         } else {
    //             alert('Failed to upload image.');
    //         }
    //     } catch (error) {
    //         alert('Error uploading image: ' + error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const handleFileSelect = (e) => {
        setselectedFile(e.target.files[0]);
        if (selectedFile) {
            handleUpload();
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
                    THUMBNAIL_URL: response.data.image_path
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


    const getAttributes = async (ID) => {
        try {
            console.log("storeidforlog:" + ID);
            setLoading(true);
            const response = await post('/attribute2/bystoreid', { "storeid": ID });
            if (response.data.status === "success") {
                setAttributes(response.data.Data);

            } else {
                alert('Failed to Fetch Attributes \n' + response.data);
            }
        } catch (error) {
            alert('Error while fetching Attributes:', error.message);
        } finally {
            setLoading(false);
        }
    }

    const visibleAttributes = attributes.filter(attribute =>
        selectedAddons.some(addon =>
            attribute.addons.some(a => a.addonid === addon.addonid)
        )
    );

    // const getDetailsbyId = async (id) => {
    //     try {
    //         setLoading(true);
    //         const response = await post('/products/byid', { "productid": id });
    //         if (response.data.status === "success") {
    //             const Details = response.data.Data;
    //             // const storeid = storesMap.find((z) => z.zonename === Details.ZONE);
    //             const updatedFormValues = { ...formValues, ...Details };
    //             // if (zone) {
    //             //     updatedFormValues.ZONE = zone.zonename;
    //             // }
    //             setSelectedStore(updatedFormValues.STOREID);
    //             setFormValues(updatedFormValues);
    //             setButton(0);//Change Button Text to "Update"
    //         } else {
    //             alert('Failed to Fetch Product Details \n' + response.data);
    //         }

    //     } catch (error) {
    //         alert('Error while fetching Product Details :', error.message);
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // };

    // const getDetailsbyId = async (id) => {
    //     try {
    //         setLoading(true);
    //         const response = await post('/products/byid', { "productid": id });
    //         if (response.data.status === "success") {
    //             const Details = response.data.Data[0];
    //             console.log("Details"+Details.STOREID)
    //             const updatedFormValues = { ...formValues, ...Details };
    //             setImageUrl(Details.IMAGE_URL);

    //             // Update toggle states based on fetched data
    //             setToggles({
    //                 recommended: Details.IS_RECOMMENDED === 1,
    //                 popular: Details.IS_POPULAR === 1,
    //                 isNew: Details.IS_NEW === 1
    //             });

    //             setSelectedStore(updatedFormValues.STOREID);
    //             console.log("updatedFormValues : "+updatedFormValues.STOREID);
    //             setFormValues(updatedFormValues);
    //             getAttributes(updatedFormValues.STOREID)
    //             setButton(0);
    //         } else {
    //             alert('Failed to Fetch Product Details \n' + response.data);
    //         }
    //     } catch (error) {
    //         alert('Error while fetching Product Details :', error.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const getDetailsbyId = async (id) => {
        try {
            setLoading(true);
            const response = await post('/products/byid', { "productid": id });
            if (response.data.status === "success") {
                const Details = response.data.Data[0];

                // Update toggle states
                setToggles({
                    recommended: Details.IS_RECOMMENDED === 1,
                    popular: Details.IS_POPULAR === 1,
                    isNew: Details.IS_NEW === 1
                });

                // Set main product data
                const updatedFormValues = { ...formValues, ...Details };
                setSelectedStore(updatedFormValues.STOREID);
                setFormValues(updatedFormValues);
                setImageUrl(Details.IMAGE_URL);

                // Handle addons and prices
                if (Details.attributes && Array.isArray(Details.attributes)) {
                    const allAddons = Details.attributes.flatMap(attr =>
                        attr.addons.map(addon => ({
                            addonid: addon.addonid,
                            addonname: addon.addonname,
                            price: addon.price
                        }))
                    );

                    // Set selected addons
                    setSelectedAddons(allAddons.map(a => ({
                        addonid: a.addonid,
                        addonname: a.addonname
                    })));

                    // Set addon prices
                    const initialPrices = {};
                    allAddons.forEach(a => {
                        initialPrices[a.addonid] = a.price.toString();
                    });
                    setAddonPrices(initialPrices);
                }

                setButton(0); // Set to update mode
                getAttributes(updatedFormValues.STOREID); // Load available attributes
                await getItemCategories(updatedFormValues.STOREID);
            }
        } catch (error) {
            alert('Error fetching product details: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    // useEffect(() => {
    //     if (state) {
    //         getStores().then(() => {
    //             getItemCategories(state.ID);
    //         });
    //         console.log('ID: ' + state.ID);
    //         if (state.ID !== '' && state.ID !== null) {
    //             getDetailsbyId(state.ID);
    //             setMode(false)
    //             // getAttributes(selectedStore);

    //         };
    //     }
    // }, [state]);
    useEffect(() => {
        const fetchAllData = async () => {
            if (!state || !state.ID) return;

            try {
                console.log('ID:', state.ID);
                await getStores();
                await getDetailsbyId(state.ID);

                setMode(false);
            } catch (err) {
                console.error("Error loading data:", err);
            }
        };

        fetchAllData();
    }, [state]);

    const changeHandler = (e) => {
        const newvalue = e.target.type === "checkbox" ? (e.target.checked ? 1 : 0) : e.target.value;
        setFormValues((prevFormValues) => {
            const updatedFormValues = { ...prevFormValues, [e.target.name]: newvalue };
            return updatedFormValues;
        });

        if (e.target.name === 'STOREID') {
            setSelectedStore(newvalue);
            if (newvalue) {
                getAttributes(newvalue);
            }
        }
        // if (e.target.name === 'CATEGORY') {
        //     setSelectedItemCategory(newvalue);
        // }
    }


    const submitHandler = (e) => {
        setButtonDisabled(true);
        e.preventDefault();
        save();
        setTimeout(() => {
            setButtonDisabled(false);
        }, 2000);
    }

    const handlePriceChange = (addonId, value) => {
        setAddonPrices(prev => ({
            ...prev,
            [addonId]: value
        }));
    };


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

            } else {
                alert('Failed to Fetch Stores \n' + response.data);
            }
        } catch (error) {
            alert('Error while fetching Stores:', error.message);
        } finally {
            setLoading(false);
        }
    }
    const getItemCategories = async (ID) => {
        try {
            setLoading(true);
            const response = await post('/categories/bystoreid', { storeid: ID });
            if (response.data.status === "success") {
                console.log(response.data.Data);
                // console.log('STOREID: '+response.data.Data.STOREID);
                if (response.data.Data && response.data.Data.length > 0) {
                    response.data.Data.forEach((itemCategory) => {
                        setItemsCategoryMap((prevMap) => {
                            const newMap = new Map(prevMap);
                            newMap.set(itemCategory.CATEGORYID, itemCategory.CATEGORYNAME);
                            return newMap;
                        });
                    });
                }

            } else {
                alert('Failed to Fetch Item Categories \n' + response.data);
            }
        } catch (error) {
            alert('Error while fetching Item Categories:', error.message);
        } finally {
            setLoading(false);
        }
    }




    const save = async () => {
        // Validate required fields
        if (formValues.PRODUCTNAME.toString.length > 0 && formValues.PRICE.toString.length > 0 && selectedStore.toString.length > 0) {
            alert('Please fill all required fields (Product Name, Price, and Store)');
            setLoading(false);
            return;
        }

        // Prepare addons payload
        // const addonsPayload = selectedAddons.map(addon => ({
        //     ADDONID: addon.addonid,
        //     PRICE: addonPrices[addon.addonid] || "0" // Default to 0 if price not set
        // }));

        const addonsPayload = selectedAddons.map(addon => ({
            ADDONID: addon.addonid,
            PRICE: parseFloat(addonPrices[addon.addonid]) || 0
        }));

        const payload = {
            PRODUCTNAME: formValues.PRODUCTNAME,
            PRODUCT_DESCRIPTION: formValues.PRODUCT_DESCRIPTION || "",
            PRODUCT_TYPE: formValues.PRODUCT_TYPE || 1,
            THUMBNAIL_URL: formValues.THUMBNAIL_URL || imageUrl || "",
            IMAGE_URL: formValues.IMAGE_URL || imageUrl || "",
            PRODUCT_STARTTIME: formValues.PRODUCT_STARTTIME || "",
            PRODUCT_ENDTIME: formValues.PRODUCT_ENDTIME || "",
            TAG: formValues.TAG || "1",
            STOREID: selectedStore,
            PRODUCT_ATTRIBUTE_ID: 0,
            CATEGORY: formValues.CATEGORY,
            PRICE: parseFloat(formValues.PRICE || 0),
            DISCOUNTED_PRICE: parseFloat(formValues.DISCOUNTED_PRICE || 0),
            IS_RECOMMENDED: toggles.recommended ? 1 : 0,
            IS_POPULAR: toggles.popular ? 1 : 0,
            IS_NEW: toggles.isNew ? 1 : 0,
            VEG_NONVEG: formValues.VEG_NONVEG || "",
            TAX_RATE: parseFloat(formValues.TAX_RATE || 0),
            COMMISSION_RATE: parseFloat(formValues.COMMISSION_RATE || 0),
            IS_ACTIVE: 1,
            ADDONS: addonsPayload // Include the addons array in the payload
        };
        if (!mode && formValues.PRODUCTID) {
            payload.productid = formValues.PRODUCTID;
        }

        setLoading(true);

        try {
            const endpoint = mode ? '/products/add2' : '/products/update2';
            const response = await post(endpoint, {
                products: [payload]
            });

            if (response.data.status === "success") {
                alert(`Product ${mode ? "Created" : "Updated"} successfully`);
                navigate('/Items');
            } else {
                alert(`Failed to ${mode ? "Create" : "Update"} Product\n${response.data.message || JSON.stringify(response.data)}`);
            }
        } catch (error) {
            alert(`Error ${mode ? "Creating" : "Updating"} Product: ${error.response?.data?.message || error.message}`);
        } finally {
            setLoading(false);
        }
    };

    // const save = async () => {
    //     // Validate required fields
    //     if (!formValues.PRODUCTNAME || !formValues.PRICE || !selectedStore) {
    //         alert('Please fill all required fields (Product Name, Price, and Store)');
    //         setLoading(false);
    //         return;
    //     }

    //     const payload = {
    //         PRODUCTNAME: formValues.PRODUCTNAME,
    //         PRODUCT_DESCRIPTION: formValues.PRODUCT_DESCRIPTION || "",
    //         PRODUCT_TYPE: formValues.PRODUCT_TYPE || 1,
    //         THUMBNAIL_URL: formValues.THUMBNAIL_URL || imageUrl || "",
    //         IMAGE_URL: formValues.IMAGE_URL || imageUrl || "",
    //         PRODUCT_STARTTIME: formValues.PRODUCT_STARTTIME || "",
    //         PRODUCT_ENDTIME: formValues.PRODUCT_ENDTIME || "",
    //         TAG: formValues.TAG || "1",
    //         STOREID: selectedStore,
    //         PRODUCT_ATTRIBUTE_ID: 0,
    //         CATEGORY: 0,
    //         PRICE: parseFloat(formValues.PRICE || 0),
    //         DISCOUNTED_PRICE: parseFloat(formValues.DISCOUNTED_PRICE || 0),
    //         IS_RECOMMENDED: toggles.recommended ? 1 : 0,
    //         IS_POPULAR: toggles.popular ? 1 : 0,
    //         IS_NEW: toggles.isNew ? 1 : 0,
    //         VEG_NONVEG: formValues.VEG_NONVEG || "",
    //         TAX_RATE: parseFloat(formValues.TAX_RATE || 0),
    //         COMMISSION_RATE: parseFloat(formValues.COMMISSION_RATE || 0),
    //         IS_ACTIVE: 1,


    //     };

    //     if (!mode && formValues.PRODUCTID) {
    //         payload.productid = formValues.PRODUCTID;
    //     }

    //     setLoading(true);

    //     try {
    //         const endpoint = mode ? '/products/add' : '/products/update';
    //         const response = await post(endpoint, {
    //             products: [payload]
    //         });

    //         if (response.data.status === "success") {
    //             alert(`Product ${mode ? "Created" : "Updated"} successfully`);
    //             navigate('/Items');
    //         } else {
    //             alert(`Failed to ${mode ? "Create" : "Update"} Product\n${response.data.message || JSON.stringify(response.data)}`);
    //         }
    //     } catch (error) {
    //         alert(`Error ${mode ? "Creating" : "Updating"} Product: ${error.response?.data?.message || error.message}`);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

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
                                        <label className="cls_form_div_label cls_form_div_left">Store :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Select
                                                as="select"
                                                name="STOREID"
                                                className="cls_form_div_input"
                                                value={selectedStore}
                                                onChange={changeHandler}
                                                disabled={true}
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
                                        <label className="cls_form_div_label cls_form_div_left">Item's Category :</label>
                                        <div className="cls_form_div_right">
                                            <Form.Select
                                                as="select"
                                                name="CATEGORY"
                                                className="cls_form_div_input"
                                                value={formValues.CATEGORY}
                                                onChange={changeHandler}
                                            >
                                                <option value="">Select Item Category</option>
                                                {Array.from(ItemsCategoryMap.entries()).map(([CATEGORYID, CATEGORYNAME]) => (
                                                    <option key={CATEGORYID} value={CATEGORYID}>
                                                        {CATEGORYNAME}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </div>
                                    {/* <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Image : </label>
                                        <div className="cls_form_div_right">
                                            <div className="cls_flex cls_flex_gap_6px">
                                                <button className="cls_btn_light">Choose From Gallery </button>
                                                <button className="cls_btn_light">Upload Image </button>

                                            </div>

                                        </div>
                                    </div> */}
                                    {/* <div className="cls_form_div">
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
</div> */}

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
                                        <label className="cls_form_div_label cls_form_div_left">Item Name : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control
                                                type="text"
                                                name='PRODUCTNAME'
                                                className='cls_form_div_input'
                                                value={formValues.PRODUCTNAME}
                                                onChange={changeHandler}
                                                placeholder="Enter Product name"
                                                required
                                            />                                                         </div>
                                    </div>
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Item Description : </label>
                                        <div className="cls_form_div_right">
                                            <Form.Control type="text" name='PRODUCT_DESCRIPTION' className='cls_form_div_input' value={formValues.PRODUCT_DESCRIPTION} onChange={changeHandler} placeholder="Enter Description" />
                                        </div>
                                    </div>
                                    {/* <div className="cls_form_div">
                                            <label className="cls_form_div_label cls_form_div_left">PRODUCT TYPE : </label>
                                            <div className="cls_form_div_right">
                                                <Form.Control type="text" name='PRODUCT_TYPE' className='cls_form_div_input' value={formValues.PRODUCT_TYPE} onChange={changeHandler} placeholder="Enter PRODUCT TYPE " />
                                            </div>
                                        </div> */}
                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">PRICE: </label>
                                        <div className="cls_form_div_right">
                                            <div className="cls_flex cls_flex_gap_6px">
                                                <div className="">
                                                    <Form.Control
                                                        type="number"
                                                        name='PRICE'
                                                        className='cls_form_div_input'
                                                        value={formValues.PRICE}
                                                        onChange={changeHandler}
                                                        placeholder="Enter Price"
                                                        required
                                                        min="0"
                                                        step="0.01"
                                                    />                                                </div>
                                                <button className="cls_btn_light">Add Discounted Price </button>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="cls_flex cls_flex_gap_6px " style={{ borderTop: "1px solid #ddd", paddingTop: "22px" }}>
                                        <button className="cls_btn_light">Set Custom Item Tax</button>

                                    </div>
                                    <div className="cls_flex cls_flex_gap_6px " style={{ borderTop: "1px solid #ddd", paddingTop: "22px" }}>
                                        <button className="cls_btn_light">Set Custom Item Commision</button>
                                    </div>
                                    <div className="cls_form_div" style={{ borderTop: "1px solid #ddd", paddingTop: "22px" }}>
                                        <label className="cls_form_div_label cls_form_div_left">Is Recommended?</label>
                                        <div className="cls_form_div_right">
                                            <label className="switch">
                                                <input type="checkbox" checked={toggles.recommended} onChange={() => handleToggle("recommended")} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Is Popular?</label>
                                        <div className="cls_form_div_right">
                                            <label className="switch">
                                                <input type="checkbox" checked={toggles.popular} onChange={() => handleToggle("popular")} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Is New?</label>
                                        <div className="cls_form_div_right">
                                            <label className="switch">
                                                <input type="checkbox" checked={toggles.isNew} onChange={() => handleToggle("isNew")} />
                                                <span className="slider round"></span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="cls_form_div">
                                        <label className="cls_form_div_label cls_form_div_left">Veg/Non-Veg: </label>
                                        <div className="cls_form_div_right">
                                        <Form.Select
                                                as="select"
                                                name='VEG_NONVEG'
                                                className='cls_form_div_input'
                                                value={formValues.VEG_NONVEG}
                                                onChange={changeHandler}
                                                required
                                            >
                                                <option value="">Select Veg / Non-Veg</option>
                                                <option value="Veg">Veg</option>
                                                <option value="Non - Veg">Non - Veg</option>
                                                <option value="Not Applicable">Not Applicable</option>
                                                </Form.Select>
                                        </div>
                                    </div>

                                    <div className="cls_form_btn1">
                                        <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                                            {button ? ("Save") : ("Update")}
                                        </button>
                                    </div>

                                </div>

                            </Form>
                        </div>


                        {mode ? (
                            true
                        ) : (


                            <div className="cls_add_items_right">
                                <div className="cls_form_out_wrapper" ref={containerRef}>

                                    <div className="cls_form_out_wrapper" ref={containerRef}>
                                        <div
                                            className="cls_block"
                                            onClick={() => setIsPopupVisible((prev) => !prev)}
                                        >
                                            <div className="cls_form_out_container1">
                                                <label htmlFor="" className="cls_form_out_label">
                                                    Variants and Addons
                                                </label>

                                                <div className="cls_form_div_input_div cls_flex cls_flex_gap_6px cls_flex_wrap">
                                                    {selectedAddons.map((addon, index) => (
                                                        <div key={index} className="cls_variants_con_btn">
                                                            <label htmlFor="">{addon.addonname}</label>
                                                            <label
                                                                htmlFor=""
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSelectedAddons(prev => prev.filter(a => a.addonid !== addon.addonid));
                                                                }}
                                                            >x</label>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {isPopupVisible && (
                                            <div className="cls_variants_poup">
                                                {attributes.map((attribute) => (
                                                    <div key={attribute.attributeid} className="cls_variants_container">
                                                        <label className="cls_variants_container_label">
                                                            {attribute.attributename}
                                                        </label>
                                                        <div className="cls_variants_btn_container">
                                                            {attribute.addons.map((addon) => (
                                                                <button
                                                                    key={addon.addonid}
                                                                    className={`cls_variants_btn ${selectedAddons.some(a => a.addonid === addon.addonid) ? 'selected' : ''
                                                                        }`}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        setSelectedAddons(prev => {
                                                                            // Check if addon is already selected
                                                                            const isSelected = prev.some(a => a.addonid === addon.addonid);
                                                                            if (isSelected) {
                                                                                return prev.filter(a => a.addonid !== addon.addonid);
                                                                            } else {
                                                                                return [...prev, addon];
                                                                            }
                                                                        });
                                                                    }}
                                                                >
                                                                    {addon.addonname}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>

                                </div>





                                {visibleAttributes.length > 0 && (
                                    <div className="cls_form_out_container1">
                                        {visibleAttributes.map(attribute => {
                                            const attributeAddons = selectedAddons.filter(addon =>
                                                attribute.addons.some(a => a.addonid === addon.addonid)
                                            );

                                            return (
                                                <div key={attribute.attributeid} className="cls_flex cls_flex_gap_6px cls_flex_column">
                                                    <label className="cls_form_out_label">{attribute.attributename}</label>

                                                    {attributeAddons.map(addon => (
                                                        <div key={addon.addonid} className="cls_flex cls_flex_justify_spacebet cls_flex_align_center cls_flex_gap_6px">
                                                            <label className="cls_add_item_label">Price for {addon.addonname}</label>
                                                            <input
                                                                type="text"
                                                                value={addonPrices[addon.addonid] || ''}
                                                                onChange={(e) => handlePriceChange(addon.addonid, e.target.value)}
                                                                className="cls_form_div_input cls_width26"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}


                            </div>



                        )}
                    </div>

                )}
            </div>
        </>
    );
}



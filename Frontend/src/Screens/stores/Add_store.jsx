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
import Add_store_cont from "./Add_store_cont";
import General_Tab from "./General_Tab";
import Metadata_Tab from "./Metadata_Tab";
import Operations_Tab from "./Operations_Tab";
import Extras_Tab from "./Extras_Tab";
import Delivery_Tab from "./Delivery_Tab";
import Actions_Tab from "./Actions_Tab";
import Payment_Gateways_Tab from "./Payment_Gateways_Tab";
import Commissions_Tab from "./Commissions_Tab";
import Payout_Details_Tab from "./Payout_Details_Tab";
import Scheduling_Tab from "./Scheduling_Tab";
import Sort_Menus_Items_Tab from "./Sort_Menus_Items_Tab";
import Rating_Reviews_Tab from "./Rating_Reviews_Tab";



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
    const [activeTab, setActiveTab] = useState('general');


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


{!button && (
  <div className="cls_form_outline">
    {/* Left Menu */}
    <div className="cls_menu_left">
    <label htmlFor="" className="cls_menu_left_label">Editing  London waffle co</label>
      <div className="cls_menu_container">
        {[
  { id: 'general', label: 'General' },
  { id: 'metadata', label: 'Meta Data' },
  { id: 'operations', label: 'Operation Area & Zone' },
  { id: 'delivery', label: 'Delivery' },
  { id: 'extras', label: 'Extras' },
  { id: 'actions', label: 'Actions' },
  { id: 'payment_gateways', label: 'Payment Gateways' },
  { id: 'commissions', label: 'Commissions' },
  { id: 'payout_details', label: 'Payout Details' },
  { id: 'scheduling', label: 'Scheduling' },
  { id: 'sort_menus_items', label: 'Sort Menus and items' },
  { id: 'rating_reviews', label: 'Rating & Reviews' }
].map((tab) => (
          <a
            key={tab.id}
            href="#"
            className={`cls_menu_container_cont ${activeTab === tab.id ? 'active_tab' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveTab(tab.id);
            }}
          >
            <img src="icon.png" alt="" width={"16px"} />
            <label>{tab.label}</label>
          </a>
        ))}
      </div>
    </div>

    {/* Content Area */}
    <div className="cls_form_out_container">
    {activeTab === 'general' && <General_Tab />}
{activeTab === 'metadata' && <Metadata_Tab />}
{activeTab === 'operations' && <Operations_Tab />}
{activeTab === 'delivery' && <Delivery_Tab />}
{activeTab === 'extras' && <Extras_Tab />}
{activeTab === 'actions' && <Actions_Tab />}
{activeTab === 'payment_gateways' && <Payment_Gateways_Tab />}
{activeTab === 'commissions' && <Commissions_Tab />}
{activeTab === 'payout_details' && <Payout_Details_Tab />}
{activeTab === 'scheduling' && <Scheduling_Tab />}
{activeTab === 'sort_menus_items' && <Sort_Menus_Items_Tab />}
{activeTab === 'rating_reviews' && <Rating_Reviews_Tab />}

    </div>
  </div>
)}

{/*  Add_Item COntent */}
{button && (
  <div className="cls_form_outline">
      <Add_store_cont 
     formValues={formValues}
     handleChange={changeHandler}  
     handleSubmit={submitHandler}
     button={button}
     isButtonDisabled={isButtonDisabled}
     zones={zones}
     storecategories={storecategories}
     imageUrl={imageUrl}
     handleFileSelect={handleFileSelect}
     chooseFromGallery={chooseFromGallery}
     maplocation={maplocation}
     containerStyle={containerStyle}
     selectedFile={selectedFile} 
 />
  </div>
)}


                       

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

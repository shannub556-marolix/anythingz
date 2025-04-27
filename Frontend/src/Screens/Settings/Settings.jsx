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
import General from "./General";
import Design from "./Design";
import CustomerApplication from "./CustomerApplication";
import Delivery_Application from "./Delivery_application";
import Store_dashboard from "./Store_dashboard";
import Andriodapp_settings from "./Andriodapp_settings";
import SEO from "./SEO";
import Social_login from "./Social_login";
import Google_maps from "./Google_maps";
import Payment_Gateways from "./Payment_Gateways";
import Sms_Settings from "./SMS_settings";
import Email_Settings from "./Email_Settings";
import Google_analytics from "./Google_analytics";
import Facebok from "./Facebook_pixel";
import Transalations from "./Transalations";
import Custom from "./Custom";
import Custom_Domain from "./Custom_Domain";
import Premium_plugins from "./Premium_plugins";
import Pickup_drop from "./Pickup_drop";
import Danger_Zone from "./Danger_Zone";
import Facebook from "./Facebook_pixel";



export default function Settings() {

    const navigate = useNavigate();
    const location = useLocation();
    const { state } = location;
    const [loading, setLoading] = useState(false);

    const [formValues, setFormValues] = useState(store_Model);
    const [button, setButton] = useState(1);

    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [activeTab, setActiveTab] = useState('general');



    return (
        <>
            <div>
                {loading ? (
                    <Spinner title="Loading..," />
                ) : (

                    <>


{button && (
  <div className="cls_form_outline">
    {/* Left Menu */}
    <div className="cls_menu_left">
    <label htmlFor="" className="cls_menu_left_label">Settings</label>
      <div className="cls_menu_container">
        {[
{ id: 'general', label: 'General' },
{ id: 'design', label: 'Design' },
{ id: 'customer_application', label: 'Customer Application' },
{ id: 'delivery_application', label: 'Delivery Application' },
{ id: 'store_dashboard', label: 'Store Dashboard' },
{ id: 'android_apps_settings', label: 'Android Apps Settings' },
{ id: 'seo', label: 'SEO' },
{ id: 'social_login', label: 'Social Login' },
{ id: 'google_maps', label: 'Google Maps' },
{ id: 'payment_gateways', label: 'Payment Gateways' },
{ id: 'sms_settings', label: 'SMS Settings' },
{ id: 'email_settings', label: 'Email Settings' },
{ id: 'google_analytics', label: 'Google Analytics' },
{ id: 'facebook_pixel', label: 'Facebook Pixel' },
{ id: 'translations', label: 'Translations' },
{ id: 'custom_css', label: 'Custom CSS' },
{ id: 'custom_domain', label: 'Custom Domain' },
{ id: 'premium_plugins', label: 'Premium Plugins' },
{ id: 'pickup_drop', label: 'Pickup & Drop' },
{ id: 'danger_zone', label: 'Danger Zone' }

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
    <div className="cls_block cls_width60">
    {activeTab === 'general' && <General/>}
{activeTab === 'design' && <Design />}
{activeTab === 'customer_application' && <CustomerApplication/>}
{activeTab === 'delivery_application' && <Delivery_Application />}
{activeTab === 'store_dashboard' && <Store_dashboard/>}
{activeTab === 'android_apps_settings' && <Andriodapp_settings />}
{activeTab === 'seo' && <SEO />}
{activeTab === 'social_login' && <Social_login/>}
{activeTab === 'google_maps' && <Google_maps />}
{activeTab === 'payment_gateways' && <Payment_Gateways />}
{activeTab === 'sms_settings' && <Sms_Settings />}
{activeTab === 'email_settings' && <Email_Settings/>}
{activeTab === 'google_analytics' && <Google_analytics />}
{activeTab === 'facebook_pixel' && <Facebook />}
{activeTab === 'translations' && <Transalations />}
{activeTab === 'custom_css' && <Custom/>}
{activeTab === 'custom_domain' && <Custom_Domain />}
{activeTab === 'premium_plugins' && <Premium_plugins />}
{activeTab === 'pickup_drop' && <Pickup_drop />}
{activeTab === 'danger_zone' && <Danger_Zone />}


    </div>
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

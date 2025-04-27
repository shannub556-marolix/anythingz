import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Danger_Zone = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label">Reset Website </label>

                            <Form >
                                <div className="cls_form_container">
                                <div className="cls_flex cls_flex_column cls_flex_rowgap_4px">
                                    <div className="cls_block">
                                    <label htmlFor="" className="cls_form_div_label">What will be removed?</label>
                                    <ul>
                                        <li>All the users (including Store Owners and Delivery Guys) except for the Super Admin</li>
                                        <li>Operational Areas</li>
                                        <li>All Stores</li>
                                        <li>All Menu, Items, Addons etc.</li>
                                        <li>All Orders</li>
                                        <li>Store Categories &amp; Category Sliders</li>
                                        <li>Promo Sliders and all its Slides</li>
                                        <li>All the wallet and wallet transaction logs</li>
                                        <li>All the Store Payouts and Store Payout Logs</li>
                                        <li>All the Delivery Collections and Delivery Collection Logs</li>
                                        <li>All the users addresses, Delivery Guy GPS Locations</li>
                                        <li>Internal data that links to the orders</li>
                                        </ul>

                                    </div>

                                    <div className="cls_block">
                                    <label htmlFor="" className="cls_form_div_label">What will not be removed?</label>
                                    <ul>
                                        <li>Website Settings</li>
                                        <li>Translations data</li>
                                        <li>Popular Geo Locations </li>
                                    </ul>

                                    </div>

                                    <div className="cls_block">
                                        <button className="cls_btn_blue">Reset Website</button>
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

                     

                    </div>
      </>
    )
  }

  export default Danger_Zone;
import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const CustomerApplication = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Customer App Settings </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Enable COD on Selfpickup</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Cash Change on COD</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Sort Delivery stores by Distance</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show PWA Installation Prompt</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Tax/VAT Number on My Accounts Page                                </label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Addon Prices on Cart</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show "Try on Phone" on Desktop View                                </label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Enable Delivery Tip Amount</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Tip Amount </label><div class="cls_form_div_right"><div class="cls_form_div_input_div cls_flex cls_flex_gap_6px cls_flex_wrap"><div class="cls_variants_con_btn"><label for="">10</label><label for="">x</label></div><div class="cls_variants_con_btn"><label for="">20</label><label for="">x</label></div></div></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Enable Delivery Tip Percentage</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Tip Percentage </label><div class="cls_form_div_right"><div class="cls_form_div_input_div cls_flex cls_flex_gap_6px cls_flex_wrap"><div class="cls_variants_con_btn"><label for="">10</label><label for="">x</label></div><div class="cls_variants_con_btn"><label for="">20</label><label for="">x</label></div></div></div></div>

                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Total Item Quantity on Footer Cart</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Auto Full Address on Location Selection Page</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Search Bar on Homepage</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Footer Navigation Type</label><div class="cls_form_div_right"><select as="select" name="CATEGORY" class="cls_form_div_input form-select"><option value="">Select Item Category</option></select></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Custom iOS Add To Homescreen Popup</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Coupon Description on Coupon Success</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left cls_mar_top_5px">Use Google Distance Matrix API </label><div class="cls_form_div_right1"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label><label for="" class="cls_form_div_label1">IMPORTANT: Kindly refer to this documentation before enabling this option.
                                You will get a loading screen on the Cart page if this documentation is not followed correctly</label></div></div>

                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Randomize Stores</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Inactive Items </label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Flat/Apartment Mandatory in Address</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Delivery Pin</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Veg/Non-Veg Badge</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Beautify Date/Time</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Round up Dynamic Delivery Charge</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Recommended Item Slider                                </label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Expand All Items Menu</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">GDPR Checkbox</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Self Pickup</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Sort Self Pickup stores by Distance</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Country Codes on Phone field  </label><div class="cls_form_div_right"><div class="cls_form_div_input_div cls_flex cls_flex_gap_6px cls_flex_wrap"><div class="cls_variants_con_btn"><label for="">+91</label><label for="">x</label></div><div class="cls_variants_con_btn"><label for="">20</label><label for="">x</label></div></div></div></div>
                                
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Hide Item Price when Zero</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Product Discount Percentage</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>


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

  export default CustomerApplication;
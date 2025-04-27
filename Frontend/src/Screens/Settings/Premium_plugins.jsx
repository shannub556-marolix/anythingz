import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Premium_plugins = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Premium Plugins Settings </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Call And Order Plugin</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div className="cls_break_line"></div>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left cls_mar_top_5px">Allow Store Owner to login to Registered Customers     : </label><div class="cls_form_div_right1"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label><label for="" class="cls_form_div_label1">Be very careful if you need to enable this function.</label> <label for="" class="cls_form_div_label1">By default, only the Admin and the staff with the permission of Login as Customer are allowed to access Registered Customer data to Login. If this option is enabled the selected Store Owners will also be able to view and access the registered customer login</label> </div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Order Schedule Plugin</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div className="cls_break_line"></div>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left cls_mar_top_5px">Minutes before order processed    : </label><div class="cls_form_div_right1"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /><label for="" class="cls_form_div_label1">Set the minutes before which the scheduled order will be processed automaticall</label> <label for="" class="cls_form_div_label">Example</label> 
                                <label className="cls_form_div_label1">If the Order was scheduled for 1:00pm - 1:30pm, and if you set the value of the above field to 30 minutes,</label>
                               <label htmlFor="" className="cls_form_div_label">Then:</label>
                                <ul>
                                    <li>if the scheduled order is already Confirmed by the store, then at 12:30pm, the order will be Marked as Preparing and will be forwarded to all the Delivery Guys assigned to that particular store.</li>
                                    <li>if the scheduled order is NOT confirmed by the store, then at 12:30pm, the order will be Marked as New Order and will shown to the Store Onwer to Accept the order.</li>
                                    <li>if the scheduled order is NOT confirmed by the store, then at 12:30pm, and if the Store has Auto Accept Order settings Enabled, the order will be Marked as Preparing and will be forwared to all the Delivery Guys assigned to that particular store.</li>
                                </ul>
                                
                                </div></div>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left cls_mar_top_5px">Custom number of days                                : </label><div class="cls_form_div_right1"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label><label for="" class="cls_form_div_label1">If disabled, 7 days future dates is taken by default   </label>  </div></div>

                               
                               
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

  export default Premium_plugins;
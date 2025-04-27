import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Delivery_Application = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Delivery Application Settings </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Enable Delivery Guy's Earnings</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>

                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Delivery Guy's Earning From</label><div class="cls_form_div_right"><select as="select" name="CATEGORY" class="cls_form_div_input form-select"><option value="">Select Item Category</option></select></div></div>

                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Customer Address</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Order Addons</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Item Price, Total & Comments                                </label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Delivery Guy's COD Collection</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div className="cls_form_div"> <label htmlFor="" className="cls_form_div_label1">Important Note: You will need to logout of the delivery application and login again to get the updated congigs/settings.</label> </div>


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

  export default Delivery_Application;
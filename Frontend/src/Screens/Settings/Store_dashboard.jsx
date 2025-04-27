import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Store_dashboard = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Store Dashboard Settings </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Hide Customer Details on Order</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left cls_mar_top_5px">New Order Fetch Rate </label><div class="cls_form_div_right1"><select as="select" name="CATEGORY" class="cls_form_div_input form-select"><option value="">Select Item Category</option></select><label for="" class="cls_form_div_label1">The lesser the value, the more load on the server. Recommended is 15 Seconds</label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Notification Tone</label><div class="cls_form_div_right"><select as="select" name="CATEGORY" class="cls_form_div_input form-select"><option value="">Select Item Category</option></select></div></div>

                               
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

  export default Store_dashboard;
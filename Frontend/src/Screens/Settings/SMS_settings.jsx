import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Sms_Settings = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> SMS Settings </label>

                            <Form >
                                <div className="cls_form_container">

                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Default SMS Gateway :</label><div class="cls_form_div_right"><select as="select" name="" class="cls_form_div_input form-select"><option value="">Default - Version 1</option></select></div></div>

                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> Msg91 Settings </label>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">MSG91 Auth Key : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">MSG91 Sender Id                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">DLT Template ID for OTP message: (only for India) : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">DLT Template ID for Store New Order message: (only for India)                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">DLT Template ID for Delivery Guy New Order message: (only for India) : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <label htmlFor="" className="cls_form_div_label1">MSG91 requires DLT registation of Sender ID and all the Messages for sending SMS to India. Contact MSG91 for more info. Or visit: https://help.msg91.com/article/348-dlt-registration</label>

                                <div className="cls_break_line"></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Login/Registration Type :</label><div class="cls_form_div_right"><select as="select" name="" class="cls_form_div_input form-select"><option value="">Default - Version 1</option></select></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">OTP Verification on Registration (for Email/Password Login)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">OTP Message                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div className="cls_break_line"></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">SMS Notification for Store Owners</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store Owners new order message                       : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Include Order Value in the SMS</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div className="cls_break_line"></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">SMS Notification for Delivery Guys</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Delivery Guys new order message : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>

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
    )
  }

  export default Sms_Settings;
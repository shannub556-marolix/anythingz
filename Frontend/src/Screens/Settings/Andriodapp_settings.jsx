import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Andriodapp_settings = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Android Apps Settings </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Customer App : </label><div class="cls_form_div_right"><label className="cls_active_tag">Active</label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Delivery Partner App : </label><div class="cls_form_div_right"><label className="cls_active_tag">Active</label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store Partner App : </label><div class="cls_form_div_right"><label className="cls_active_tag">Active</label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Socket Push Service : </label><div class="cls_form_div_right"><label className="cls_active_tag">Active</label></div></div>

                                <div className="cls_break_line"></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase RealTime Database URL                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Google Services JSON File : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div className="cls_break_line"></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Web Config API Key : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Web Config Auth Domain : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Web Config Database URL                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Web Config Project ID                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Web Config Storage Bucket                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Web Config Messaging Sender ID : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Web Config App ID : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Google Service Account File : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div className="cls_break_line"></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Push Notification Service : </label><div class="cls_form_div_right"><label className="cls_active_tag">Active</label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Order Push Notifications : </label><div class="cls_form_div_right"><label className="cls_active_tag">Active</label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Sender ID : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Web Push Certificate : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Firebase Server Key : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
 


                                    <div className="cls_form_btn1">
                                    <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                                        {button ? ("Save") : ("Update")} Settings
                                    </button>
                                </div>

                                </div>
                               
                            </Form>
                        </div>

                     

                    </div>
      </>
    )
  }

  export default Andriodapp_settings;
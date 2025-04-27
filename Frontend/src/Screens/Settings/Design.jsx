import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Design = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Design Settings </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Logo : </label><div class="cls_form_div_right"><img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/site-data/logo.png?v=6f4cac66-5304-4b7c-9554-efacb5f9cf1b" alt=""  style={{width:"135px"}} className="cls_btm_6px" /> <input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /><label className="cls_form_div_label1">Image dimension 320x108 - (PNG image only)</label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Favicon : </label><div class="cls_form_div_right"><img src="https://foodomaa.sgp1.cdn.digitaloceanspaces.com/anythingz/site-data/favicon-96x96.png?v=177cf902-4c44-45c7-8722-641186cd5e6b" alt=""  style={{width:"70px"}}  className="cls_btm_6px" /> <input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /><label className="cls_form_div_label1">Image dimension 512x512 (PNG image only)                                </label></div></div>
                               
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Brand Color : </label><div class="cls_form_div_right"><input name="" placeholder="" type="color" class="cls_form_div_input_color form-control" value="orange" /></div></div>

                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store App Primary Color : </label><div class="cls_form_div_right"><input name="" placeholder="" type="color" class="cls_form_div_input_color form-control" value="orange" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Cart Background Color : </label><div class="cls_form_div_right"><input name="" placeholder="" type="color" class="cls_form_div_input_color form-control" value="orange" /></div></div>

                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Cart Text Color : </label><div class="cls_form_div_right"><input name="" placeholder="" type="color" class="cls_form_div_input_color form-control" value="orange" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">New Item Badge Color : </label><div class="cls_form_div_right"><input name="" placeholder="" type="color" class="cls_form_div_input_color form-control" value="orange" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Popular Item Badge Color : </label><div class="cls_form_div_right"><input name="" placeholder="" type="color" class="cls_form_div_input_color form-control" value="orange" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Recommended Item Badge Color : </label><div class="cls_form_div_right"><input name="" placeholder="" type="color" class="cls_form_div_input_color form-control" value="orange" /></div></div>


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

  export default Design;
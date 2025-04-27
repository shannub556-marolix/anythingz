import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Google_analytics = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Google Analytics Settings </label>

                            <Form >
                                <div className="cls_form_container">

                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Enable Google Analytics (GA4)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Measurement ID : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>


                               
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

  export default Google_analytics;
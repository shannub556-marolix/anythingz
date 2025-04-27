import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Custom = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Customer App, Delivery App, Store App Custom CSS </label>

                            <Form >
                                <div className="cls_form_container">
                                <label htmlFor="" className="cls_form_div_label1">Below code will affect the styling for the Customer Application & the Delivery Application</label>
                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> Admin Custom CSS </label>
                                <label htmlFor="" className="cls_form_div_label1">Upgrade your plan to access this feature</label>
                                <div className="cls_form_div">
                                    <button className="cls_btn_blue">Upgrade Plan</button>
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

  export default Custom;
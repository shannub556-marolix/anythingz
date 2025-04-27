import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const General = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Website's General Settings  </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store Name : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Currency Symbol : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Currency Symbol Alignment : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Wallet Name : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Minimum Payout for Store in ₹ : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left">Max Time for Accept Order : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /><label className="cls_form_div_label1">Maximum time in minutes after which admin gets notification in the orders page that the store owner has not accepted the order. </label></div></div>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left">Max Time for Accept Delivery : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /><label className="cls_form_div_label1">Maximum time in minutes after which admin gets notification in the orders page that the Delivery guy has not accepted the order. </label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Waiting time for payment : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
            <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Hide Payment Failed Orders</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Order ID Prefix : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Order ID Suffix                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
            <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Allow Payment Gateway Selection for Store Owners</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Daily Revenue Target : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                 
                                 
                                    
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

  export default General;
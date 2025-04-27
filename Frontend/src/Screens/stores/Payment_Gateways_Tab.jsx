import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';



const Payment_Gateways_Tab = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formValues, setFormValues] = useState(store_Model);
  const button = 1;
  const isButtonDisabled = true;


    return (
      <>
      <div className="cls_block">
        <div className="cls_store_out_container">
          <label htmlFor="" className="cls_form_out_label">  Payment Gateways</label>

          <Form >
            <div className="cls_form_container">
           
            <div className="cls_form_div2"><label className="cls_form_div_label cls_form_div_left cls_mar_top_5px">Disable COD when order total is greater than </label><div className="cls_form_div_right1"><input name="" placeholder="" type="text" className="cls_form_div_input form-control" value="" /><label htmlFor="" className="cls_form_div_label1">Leave empty if not required.</label></div></div>
         
            <div className="cls_break_line"></div>

            <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">Select Payment Gateways </label><div className="cls_form_div_right">
            <div class="cls_form_div_input_div cls_flex cls_flex_gap_6px cls_flex_wrap"><div class="cls_variants_con_btn"><label for="">COD</label><label for="">x</label></div><div class="cls_variants_con_btn"><label for="">Razorpay</label><label for="">x</label></div></div>
              </div></div>

              <div className="cls_form_btn1">
                <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                  {button ? ("Save") : ("Update")}
                </button>
              </div>

            </div>

          </Form>
        </div>

        <div className="cls_form_out_container_rep">
          <label htmlFor="" className="cls_form_out_label">Store Commission Settings</label>

          <Form >
            <div className="cls_form_container">
              <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">Commission Scheme : </label><div className="cls_form_div_right"><select name="" className="cls_form_div_input form-select"><option value="">Default - Version 1</option></select></div> <div className="cls_form_div_left"><button className="cls_btn_light">Update Comission Scheme</button></div> </div>

              <div className="cls_flex cls_flex_gap_6px " style={{ borderTop: "1px solid rgb(221, 221, 221)", paddingTop: "22px" }}>
                <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">Commission Rate in Percentage : </label><div className="cls_form_div_right"><input name="" placeholder="" type="text" className="cls_form_div_input form-control" value="" /></div> <div className="cls_form_div_left"><button className="cls_btn_light">Update Comission Rate</button></div> </div>

              </div>

            </div>

          </Form>
        </div>


        <div className="cls_form_out_container_rep">
          <label htmlFor="" className="cls_form_out_label">Payout Account Details                            </label>

          <Form >
            <div className="cls_form_container">
              <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">Bank Name: </label><div className="cls_form_div_right"><input name="" placeholder="" type="text" className="cls_form_div_input form-control" value="" /></div></div>
              <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">Bank Code/IFSC: </label><div className="cls_form_div_right"><input name="" placeholder="" type="text" className="cls_form_div_input form-control" value="" /></div></div>
              <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">Recipient Name: </label><div className="cls_form_div_right"><input name="" placeholder="" type="text" className="cls_form_div_input form-control" value="" /></div></div>
              <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">Account Number: </label><div className="cls_form_div_right"><input name="" placeholder="" type="text" className="cls_form_div_input form-control" value="" /></div></div>
              <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">Paypal ID: </label><div className="cls_form_div_right"><input name="" placeholder="" type="text" className="cls_form_div_input form-control" value="" /></div></div>
              <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">UPI ID: </label><div className="cls_form_div_right"><input name="" placeholder="" type="text" className="cls_form_div_input form-control" value="" /></div></div>

              <div className="cls_form_btn1">
                <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                  {button ? ("Save") : ("Update")}
                </button>
              </div>

            </div>

          </Form>
        </div>

        <div className="cls_form_out_container_rep">
          <label htmlFor="" className="cls_form_out_label">Store Scheduling Times                            </label>

          <Form >
            <div className="cls_form_container">

              <div className="cls_timings_outline">

                <div className="cls_timings_container">
                  <label htmlFor="" className="cls_timings_header">Monday</label>

                  <div className="cls_timings_content">
                    <div className="cls_timings_div">
                      <label htmlFor="" className="cls_form_div_label"> Opening Time</label>
                      <input type="time" className="cls_form_div_input form-control" />
                    </div>
                    <div className="cls_timings_div">
                      <label htmlFor="" className="cls_form_div_label">Closing  Time</label>
                      <input type="time" className="cls_form_div_input form-control" />
                    </div>
                    <button className="cls_btn_blue">X</button>
                  </div>
                  <button className="cls_btn_light">Add Slot</button>


                </div>

                <div className="cls_timings_container">
                  <label htmlFor="" className="cls_timings_header">Monday</label>

                  <div className="cls_timings_content">
                    <div className="cls_timings_div">
                      <label htmlFor="" className="cls_form_div_label"> Opening Time</label>
                      <input type="time" className="cls_form_div_input form-control" />
                    </div>
                    <div className="cls_timings_div">
                      <label htmlFor="" className="cls_form_div_label">Closing  Time</label>
                      <input type="time" className="cls_form_div_input form-control" />
                    </div>
                    <button className="cls_btn_blue">X</button>
                  </div>

                  <div className="cls_timings_content">
                    <div className="cls_timings_div">
                      <label htmlFor="" className="cls_form_div_label"> Opening Time</label>
                      <input type="time" className="cls_form_div_input form-control" />
                    </div>
                    <div className="cls_timings_div">
                      <label htmlFor="" className="cls_form_div_label">Closing  Time</label>
                      <input type="time" className="cls_form_div_input form-control" />
                    </div>
                    <button className="cls_btn_blue">X</button>
                  </div>
                  <button className="cls_btn_light">Add Slot</button>


                </div>

                <div className="cls_timings_container">
                  <label htmlFor="" className="cls_timings_header">Monday</label>

                  <div className="cls_timings_content">
                    <div className="cls_timings_div">
                      <label htmlFor="" className="cls_form_div_label"> Opening Time</label>
                      <input type="time" className="cls_form_div_input form-control" />
                    </div>
                    <div className="cls_timings_div">
                      <label htmlFor="" className="cls_form_div_label">Closing  Time</label>
                      <input type="time" className="cls_form_div_input form-control" />
                    </div>
                    <button className="cls_btn_blue">X</button>
                  </div>
                  <button className="cls_btn_light">Add Slot</button>


                </div>
              </div>

              <div className="cls_form_btn1">
                <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                  {button ? ("Save Scheduling Data") : ("Update Scheduling Data")}
                </button>
              </div>

            </div>

          </Form>
        </div>

      </div>
      </>
    )
  }

  export default Payment_Gateways_Tab;
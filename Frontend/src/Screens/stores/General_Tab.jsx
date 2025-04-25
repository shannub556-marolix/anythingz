import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const General_Tab = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> General Settings </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store Name : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Description : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                    <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Image : </label><div class="cls_form_div_right"><div class="cls_flex cls_flex_gap_6px"><button type="button" class="cls_btn_light">Choose From Gallery</button><input type="file" id="fileInput" accept="image/*" style={{display:"none"}} /><button type="button" class="cls_btn_light">Upload Image</button></div></div></div>
                                    <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store Manager Phone Number : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                    
                                    <div class="cls_flex cls_flex_gap_6px "  style={{borderTop:"1px solid rgb(221, 221, 221)",paddingTop:"22px"}}>
                                    <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Layout type :</label><div class="cls_form_div_right"><select as="select" name="" class="cls_form_div_input form-select"><option value="">Default - Version 1</option></select></div></div>
                                    </div>

                                    <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store Categories : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                    <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store URL : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>

                                    <div class="cls_flex cls_flex_gap_6px " style={{borderTop:"1px solid rgb(221, 221, 221)",paddingTop:"22px"}}>
                                    <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store Tax Percentage : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                    </div>

                                    <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store Charge (Packing/Extra) : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                    <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Store Charge Tax Percentage : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                    <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Min Order Price  : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>

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
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Commission Scheme : </label><div class="cls_form_div_left"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div> <div className="cls_form_div_left"><button className="cls_btn_light">Update Comission Scheme</button></div> </div>

                                    <div class="cls_flex cls_flex_gap_6px " style={{borderTop:"1px solid rgb(221, 221, 221)",paddingTop:"22px"}}>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Commission Rate in Percentage : </label><div class="cls_form_div_left"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div> <div className="cls_form_div_left"><button className="cls_btn_light">Update Comission Rate</button></div> </div>
                                   
                                    </div>

                                </div>
                               
                            </Form>
                        </div>

                        
                        <div className="cls_form_out_container_rep">
                            <label htmlFor="" className="cls_form_out_label">Payout Account Details                            </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Bank Name: </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Bank Code/IFSC: </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Recipient Name: </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Account Number: </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paypal ID: </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">UPI ID: </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                     
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

  export default General_Tab;
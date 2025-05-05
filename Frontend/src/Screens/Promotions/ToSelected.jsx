import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const ToSelected = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_notification_cont_right">
                            <label htmlFor="" className="cls_form_out_label"> Send push notification & alert to selected users </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div">
                                    <label class="cls_form_div_label cls_form_div_left">Image :</label>
                                    <div class="cls_form_div_right">
                                        <div class="cls_flex cls_flex_gap_6px">
                                        <button type="button" class="cls_btn_light">Choose From Gallery</button>
                                        <input type="file" id="fileInput" accept="image/*" style={{display:"none"}} />
                                        <button type="button" class="cls_btn_light">Upload Image</button>
                                        </div>
                                        {/* <img 
                                        src="https://prudvi.anythngz.com/apis/public/images/67fd6524c054b.png" 
                                        alt="Uploaded" 
                                        style={{width:"100px",height:"100px",marginTop:"10px",objectFit:"cover"}} 
                                        /> */}
                                    </div>
                                </div>
                                
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Select Users: </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Notification Title: </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>

                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Message : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">URL :                                </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                               

                               
                                    <div className="cls_form_btn1">
                                    <button type="submit" className="cls_btn_blue" disabled={isButtonDisabled} >
                                        Send Notification
                                    </button>
                                </div>

                                </div>
                               
                            </Form>
                        </div>

                     

                    </div>
      </>
    )
  }

  export default ToSelected;
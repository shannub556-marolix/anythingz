import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Pickup_drop = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Pickup_drop Settings </label>

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

                     

                    </div>
      </>
    )
  }

  export default Pickup_drop;
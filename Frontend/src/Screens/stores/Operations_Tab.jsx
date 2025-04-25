import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Operations_Tab = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const [formValues, setFormValues] = useState(store_Model);
  const button = 1;
  const isButtonDisabled = true;


  return (
    <>
      <div className="cls_block">
        <div className="cls_store_out_container">
          <label htmlFor="" className="cls_form_out_label">  Operation Area Settings          </label>

          <Form >
            <div className="cls_form_container">
              <div className="cls_form_div"><label className="cls_form_div_label cls_form_div_left">Zone : </label><div className="cls_form_div_right"><select name="" className="cls_form_div_input form-select"><option value="">Default - Version 1</option></select></div></div>
             
              <div class="cls_break_line"></div>

              <div className="cls_form_map_outline">
  <label className="cls_form_div_label">Store Location</label>

  <div className="cls_form_map_div">
    <div></div>
    <div>Loading...</div>
  </div>

  <div className="cls_form_div1">
    <div className="cls_form_map_div2">
      <label className="cls_form_div_label">Latitude of the Store:</label>
      <div>
        <input
          name="STORE_LATITUDE"
          type="text"
          placeholder="Enter Latitude of the Store"
          className="cls_form_div_input form-control"
          value={formValues.STORE_LATITUDE}
          onChange={(e) =>
            setFormValues({ ...formValues, STORE_LATITUDE: e.target.value })
          }
        />
      </div>
    </div>

    <div className="cls_form_map_div2">
      <label className="cls_form_div_label">Longitude of the Store:</label>
      <div>
        <input
          name="STORE_LONGITUDE"
          type="text"
          placeholder="Enter Longitude of the Store"
          className="cls_form_div_input form-control"
          value={formValues.STORE_LONGITUDE}
          onChange={(e) =>
            setFormValues({ ...formValues, STORE_LONGITUDE: e.target.value })
          }
        />
      </div>
    </div>
  </div>

</div>


<label htmlFor="" className="cls_form_out_label">Delivery Areas</label>

<div className="cls_break_line"></div>





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

  export default Operations_Tab;
import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';



const Scheduling_Tab = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);


    return (
      <>
        <label className="cls_form_out_label">Scheduling Information</label>
        <Form >
          <div className="cls_form_container">
            {/* Store Name Field */}
            <div className="cls_form_div">
              <label className="cls_form_div_label cls_form_div_left">Store Name :</label>
              <Form.Control 
                name="STORENAME"
                value="Sujatha"
                // onChange={changeHandler}
              />
            </div>
            
            {/* Other general fields */}
          </div>
        </Form>
      </>
    )
  }

  export default Scheduling_Tab;
import "../../src/css/Mobile_view.css"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { userAction } from '../Actions/userAction';
import '../css/Loginpage.css';
import Spinner from '../Components/Spinner';
import MV_loginpage from "./MV_loginpage";

export default function HomePage() {
      const stateValus = useSelector(state => state.userLogin)
      const { loading, data, error, accessToken } = stateValus;
      const dispatch = useDispatch()
      const navigate = useNavigate();
      const [isButtonDisabled, setButtonDisabled] = useState(false);
      const [formValues, setFormValues] = useState({
        email: '',
        password: ''
      })
      const { email, password } = formValues;
        const changeHandler = (e) => {
          setFormValues({ ...formValues, [e.target.name]: e.target.value })
        }
      
        const submitHandler = (e) => {
          console.log("loading" + loading);
          setButtonDisabled(true);
          e.preventDefault();
          dispatch(userAction(formValues))
          setTimeout(() => {
            setButtonDisabled(false);
          }, 2000);
          console.log("loading" + loading);
        }
        // useEffect(() => {
        //   if (accessToken && accessToken !== '') {
        //     navigate('/home');
        //   }
        // }, [accessToken, navigate])
    return(
        <div>
            <div className="cls_mb_view_outline">
                <div className="cls_mb_view_container">
    <div className="cls_mb_view_left">
                    <h2>Order from restaurants near you</h2>
                </div>
                <div className="cls_mb_view_right">
                    <div className="cls_mobile_layout">
                        <div className="cls_notch">
                            <div className="cls_notch_div"></div>
                        </div>
                       <MV_loginpage/>

                    </div>
                </div>
                </div>
            
            </div>

        </div>
    )
}
import "../../src/css/Mobile_view.css"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { userAction } from '../Actions/userAction';
import '../css/Loginpage.css';
import Spinner from '../Components/Spinner';
import MV_Dahsboard from "./MV_Dashboard";

export default function MV_loginpage() {
    const stateValus = useSelector(state => state.userLogin)
    const [showNextpage, setShowNextpage] = useState(false);
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

    const handleNextpage = () => {
        setShowNextpage(true);
    };
    return (<div className="cls_width100">

        {showNextpage ? (<MV_Dahsboard />) : (
            <div className="cls_mobile_content">

                <div className="col-lg-6 cls_width100">
                    <div className="p-5">
                        <div className="text-center">
                            <img
                                src={require("../images/logo.png")}
                                className="img-fluid"
                                alt="display"
                            />
                            {/* <img
                                                          src={require("../images/logo.png")}
                                                          className="img-fluid"
                                                          alt="display"
                                                          hidden
                                                        /> */}
                            <h1 className="h1 text-gray-900 mb-4">Welcome Back!</h1>
                        </div>
                        <Form onSubmit={submitHandler}>
                            <Form.Group controlId="inputusername">
                                <Form.Control
                                    type="text"
                                    name='email'
                                    className='form-control-user'
                                    value={email}
                                    onChange={changeHandler}
                                    placeholder="Enter EMail"
                                />
                            </Form.Group>
                            <Form.Group controlId="inputpassword">
                                <Form.Control
                                    type="password"
                                    name='password'
                                    className='form-control-user'
                                    value={password}
                                    onChange={changeHandler}
                                    placeholder="Enter Password"
                                />
                            </Form.Group>
                            <div className="form-group">
                                <div className="custom-control custom-checkbox small">
                                    <input type="checkbox" className="custom-control-input" id="customCheck" />
                                    <label className="custom-control-label" htmlFor="customCheck">Remember
                                        Me</label>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary btn-user btn-block" onClick={handleNextpage} disabled={isButtonDisabled} >
                                {loading ? ("Loading") : ("Sign In")}
                            </button>
                        </Form>
                        <hr />
                        <div className="text-center">
                            <a className="small text-muted" href="/ForgotPassword">Forgot password?</a>
                        </div>
                        <div className="text-center">
                            <p className="mb-3 text-center" style={{ color: "#393f81" }} />
                            Don't have an account?{" "}
                            <a href="/Register" style={{ color: "#393f81" }}>
                                Register here
                            </a>
                        </div>
                        <hr />
                        <div className="text-center">
                            <a href="/" className="small text-muted me-1">
                                Terms of use.
                            </a>
                            <a href="/" className="small text-muted">
                                Privacy policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>



    )
}
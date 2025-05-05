import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { userAction } from '../Actions/userAction';
import '../css/Loginpage.css';
import Spinner from '../Components/Spinner';


const Register = ({ history }) => {
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

  return (
    <>
      <div>
        {loading ? (
          <Spinner title="Loading..," />
        ) : (
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                  <div className="card-body p-0">
                    <div className="row">
                      <div className="col-lg-6 d-none d-lg-block bg-login-image" ></div>
                      {/* <div className="col-lg-6 d-none d-lg-block" hidden></div> */}
                      <div className="col-lg-6">
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
                            <h1 className=" text-gray-900" style={{fontSize:"12px",marginTop:"12px"}}>Register for Store Owner</h1>
                          </div>
                          <Form >
                          <Form.Group controlId="inputname">
                              <Form.Control
                                type="text"
                                name='Name'
                                className='form-control-user'
                               
                                 
                                placeholder="Full Name"
                              />
                            </Form.Group>
                            <Form.Group controlId="inputusername">
                              <Form.Control
                                type="text"
                                name='email'
                                className='form-control-user'
                                value={email}
                                 
                                placeholder="Enter EMail"
                              />
                            </Form.Group>
                            
                            <Form.Group controlId="inputmobile">
                              <Form.Control
                                type="number"
                                name='Mobile'
                                className='form-control-user'
                                
                                 
                                placeholder="Phone Number"
                              />
                            </Form.Group>

                            <Form.Group controlId="inputpassword">
                              <Form.Control
                                type="password"
                                name='password'
                                className='form-control-user'
                                value={password}
                                 
                                placeholder="Enter Password"
                              />
                            </Form.Group>
                            
                            <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isButtonDisabled} >
                              {loading ? ("Loading") : ("Register")}
                            </button>
                          </Form>
                        
                          <div className="text-center">
                            <p className="mb-3 text-center" style={{ color: "#393f81" }} />
                            Already have a account?{" "}
                            <a href="/" style={{ color: "#393f81" }}>
                              Login here
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
  {/* {loading ? (<div>
          <h1>Loading...</h1>
          <div> 
            <div className="spinner-border text-primary" role="status">
              </div>
              </div>
              </div>) : error ? <h1>Something went Wrong</h1> : <h1>Login Success...</h1>}  */}
  {
    /* <Form onSubmit={submitHandler}>
<div className="container mt-5">
<div className="row">
<div className="col-md-8">
  <img
    src={require("../images/logo512.png")}
    className="img-fluid"
    alt="display"
  />
</div>
<div className="col-md-4">
  <div className="card">
    <div className="card-body">
      <div className="text-center">
        <img
          src={require("../Components/icon.png")}
          className="img-fluid"
          alt="display"
        />
      </div>
      <h1 className="fw-normal my-3 text-center">Welcome Back</h1>
      <h5 className="fw-normal my-2 text-center">
        Sign In to continue...
      </h5>
      <Form.Group controlId="inputusername">
        <Form.Control
          type="text"
          name='user'
          className='user'
          value={user}
           
          placeholder="Enter Username"
        />
      </Form.Group>
      <Form.Group controlId="inputpassword">
        <Form.Control
          type="password"
          name='pwd'
          className='pwd'
          value={pwd}
           
          placeholder="Enter Password"
        />
      </Form.Group>
      <button
        type="submit"
        className="button"
        disabled={isButtonDisabled}
      >
        {loading? (
          "Loading"
        ) : (
          "Sign In"
        )}
      </button>
      <a className="small text-muted" href="/">
        Forgot password?
      </a>
      <p className="mb-3 text-center" style={{ color: "#393f81" }}>
        Don't have an account?{" "}
        <a href="#!" style={{ color: "#393f81" }}>
          Register here
        </a>
      </p>
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
</div>
</div>
</Form> */
  }
}

export default Register;
import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Navbar2 from "../../Components/Navbar2";
import axios from 'axios';
import './addStore.css';
import { Overlay } from "react-bootstrap";
import { BiTrash } from "react-icons/bi";
import { useParams } from 'react-router-dom';
import { YAxis } from "recharts";

export default function addStores(props) {
    const submitHandler = (e) => {
        
      }
    return (
        <>
      <Navbar2 title="VST TECHONOLOGIES" />
            <div className="page-content container pt-0">
                <div className="content-wrapper">
                    <label htmlFor="" className="content my-5">Store Management</label>
                    <div className="d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="card">
                                <div className="card-body">
                                <Form onSubmit={submitHandler}>
                        {/* <Form.Group controlId="inputusername">
                          <Form.Control
                            type="text"
                            name='Store Name'
                            className='form-control-user'
                            value={USERNAME}
                            onChange={changeHandler}
                            placeholder="Enter Username"
                          />
                        </Form.Group>
                        <Form.Group controlId="inputpassword">
                          <Form.Control
                            type="password"
                            name='Description'
                            className='form-control-user'
                            value={PASSWORD}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                          />
                        </Form.Group> */}
                        {/* <div className="form-group">
                          <div className="custom-control custom-checkbox small">
                            <input type="checkbox" className="custom-control-input" id="customCheck" />
                            <label className="custom-control-label" htmlFor="customCheck">Remember
                              Me</label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-primary btn-user btn-block" disabled={isButtonDisabled} >
                          {loading ? ("Loading") : ("Sign In")}
                        </button> */}
                      </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
    </>
    );
}


/* Fields that are requeired in this form

1. Edit Text  - Store Name 
2. Eidt Text  - Description
3. Buttons  - Select Image
4. Eidt Text  - Default Rating
5. Eidt Text  - Approx Delivery Time
6. Eidt Text  - Full Address
7. Eidt Text  - Pincode
8. Eidt Text  - Landmark
9. Map (Google Map View based on Latitude & Longitude)
10.Eidt Text  - Latitude of the Store 
11.Eidt Text  - Longitude of the Store
12.Eidt Text  - Certificate/License Code
13.Eidt Text  - Store Charge (Packing/Extra)
14.Eidt Text  - Store Charge Tax Percentage
15.Drop Down  - Delivery Type 
16.Operational Areas (Multiple Selections)
17.Drop Down  - Delivery Charge Type
18.Eidt Text  - Delivery Charge:
19.Toggle Button  - Is Pure Veg?
20.Eidt Text  - Min Order Price
21.Eidt Text  - Store Tax Percentage
22.Drop Down  - Commission Type *
23.Eidt Text  - Commission Rate % *
24.Drop Down  - Zone

*/
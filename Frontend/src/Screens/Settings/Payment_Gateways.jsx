import React, { useEffect, useState } from "react";
import { Form } from 'react-bootstrap';
import '../../css/Home.css';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { store_Model } from '../../Models/StoreModel';


const Payment_Gateways = () => {
        const navigate = useNavigate();
        const location = useLocation();
        const [formValues, setFormValues] = useState(store_Model);
        const button = 1;
        const isButtonDisabled = true;


    return (
      <>
          <div className="cls_block">
                        <div className="cls_store_out_container">
                            <label htmlFor="" className="cls_form_out_label"> Payment Gateways Settings </label>

                            <Form >
                                <div className="cls_form_container">
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">COD (Cash On Delivery Payment)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Stripe (Online Payment with Stripe)                                </label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paypal (Paypal Express Checkout)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">PayStack (PayStack Payment Gateway)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Razorpay (Razorpay Payment Gateway)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">PayMongo (PayMongo Payment Gateway)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">MercadoPago (MercadoPago Payment Gateway)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paytm (Paytm Payment Gateway)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Flutterwave (Flutterwave Payment Gateway)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Khalti (Khalti Payment Gateway)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">eSewa (eSewa Payment Gateway)</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>

                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> Stripe </label>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Stripe Public Key : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Stripe Secret Key : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Stripe Language :</label><div class="cls_form_div_right"><select as="select" name="" class="cls_form_div_input form-select"><option value="">Default - Version 1</option></select></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Show Stripe Postal Code Input</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Stripe Ideal Payment</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Stripe FPX Payment</label><div class="cls_form_div_right"><label class="switch"><input type="checkbox" /><span class="slider round" ></span></label></div></div>


                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> PayPal </label>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paypal Environment :</label><div class="cls_form_div_right"><select as="select" name="" class="cls_form_div_input form-select"><option value="">Default - Version 1</option></select></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paypal Sandbox Key                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paypal Production Key                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>

                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> PayStack </label>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">PayStack Public Key                               : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">PayStack Private Key                                : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>

                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> Razorpay </label>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Razorpay Merchant Id                 : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Razorpay Key Id                       : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Razorpay Secret Key                     : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Razorpay Webhook Secret               : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left cls_mar_top_5px">Razorpay Webhook Secret     : </label><div class="cls_form_div_right1"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /><label for="" class="cls_form_div_label1">Click here to learn how to setup Webhooks for Razorpay</label> <label htmlFor="" className="cls_form_div_label1">Webhooks setup is mandatory for Foodomaa</label> </div></div>

                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> PayMongo </label>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">PayMongo Public Key         : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">PayMongo Secret Key              : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>

                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> MercadoPago </label>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left cls_mar_top_5px">MercadoPago Access Token    : </label><div class="cls_form_div_right1"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /><label for="" class="cls_form_div_label1">Get Access token from here: https://www.mercadopago.com.br/developers/panel/credentials</label> <label htmlFor="" className="cls_form_div_label1">Webhooks setup is mandatory for Foodomaa</label> </div></div>


                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> Paytm </label>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paytm Environment      : </label><div class="cls_form_div_right"><select as="select" name="" class="cls_form_div_input form-select"><option value="">Default - Version 1</option></select></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paytm Merchant ID : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paytm Merchant Key : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paytm Website : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paytm Industry Type : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Paytm Channel ID (For Website) : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>


                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> Flutterwave </label>
                                <div class="cls_form_div2"><label class="cls_form_div_label cls_form_div_left cls_mar_top_5px">Flutterwave Public Key     : </label><div class="cls_form_div_right1"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /><label for="" class="cls_form_div_label1">How to get the Public Key: https://developer.flutterwave.com/docs/api-keys</label> <label htmlFor="" className="cls_form_div_label1">Make sure you enable the Test Mode on Flutterwave dashboard if you intent to use the Test Public Key</label> </div></div>


                                <div className="cls_break_line"></div>
                                <label htmlFor="" className="cls_form_out_label"> Khalti </label>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Khalti Public Key : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <div class="cls_form_div"><label class="cls_form_div_label cls_form_div_left">Khalti Secret Key : </label><div class="cls_form_div_right"><input name="" placeholder="" type="text" class="cls_form_div_input form-control" value="" /></div></div>
                                <label htmlFor="" className="cls_form_div_label1">How to get the Keys: https://khalti.com/join/merchant                                </label>


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

  export default Payment_Gateways;
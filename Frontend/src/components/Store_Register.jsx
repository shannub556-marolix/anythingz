import React from "react";

const Store_Register=()=>{
    return(
        <div className="cls_register">
                                <div className="cls_register_container">
                                    <div className="cls_login_container1">
                                    <img src="/images/store_img.svg" alt="" className="cls_login_img" />
                                    </div>
                        
                        <div className="cls_login_container2">
                        <label htmlFor="" className="cls_login_label">Register for Store Owner</label>
                        <label htmlFor="" className="cls_login_label1">Please fill the form to register</label>

                        </div>
                        <div className="cls_login_cont2">
                            <input type="text" name="" id="" className="cls_login_input" placeholder="Full Name" />
                            <input type="text" name="" id="" className="cls_login_input" placeholder="Email" />
                            <input type="number" name="" id=" " className="cls_login_input"  placeholder="Phone Number"/>
                            <input type="text" name="" id="" className="cls_login_input" placeholder="Password" />
                            <input type="text" name="" id="" className="cls_login_input" placeholder="Enter Captcha" />



                        </div>
                        {/* <div className="cls_login_cont3">
                            <input type="checkbox"  checked className="cls_checkbox"/>
                            <label htmlFor="" className="cls_checkbox_label">Keeped me logged in</label>

                        </div> */}
                        <div className="cls_login_cont2">
                            <button className="cls_login_btn">Register</button>

                        </div>
                        {/* <div className="cls_login_cont3">
                            <label htmlFor="" className="cls_forgot_label">Already Have a reset code?</label>

                        </div> */}

                    </div>

                    <div className="cls_login_container1">
                        <label htmlFor="" className="cls_login_label">or</label>

                    </div>

                    <div className="cls_login_container1">
                        <button className="cls_button_light">Login to Admin or Store Owner</button>

                    </div>

        </div>
    )
}

export default Store_Register
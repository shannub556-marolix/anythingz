import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (email === "Admin" && password === "1234") {
            // Redirect to the dashboard
            onLogin(true);
            navigate("/dashboard");
        } else {
            setError("Invalid credentials. Please try again.");
        }
    };

    return (
        <div className="cls_login">
            <div className="cls_login_left">
                <div className="cls_motivation">
                    <div className="cls_motivation_container">
                        <div className="cls_motivation_con1">
                            <label htmlFor="" className="cls_motivation_label">Motivation For Today</label>
                            <img src="/images/bulb_icon.svg" alt="" className="cls_motivation_img" />
                        </div>
                        <div className="cls_motivation_con">
                            <label htmlFor="" className="cls_motivation_label">Either you run the day, or the day runs you.</label>
                        </div>
                        <div className="cls_motivation_con">
                            <label htmlFor="" className="cls_motivation_label">- Jim Rohn</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cls_login_right">
                <div className="cls_login_content">
                    <div className="cls_login_container">
                        <div className="cls_login_cont1">
                            <div className="cls_login_cont2">
                                <label htmlFor="" className="cls_login_label">Login to dashboard</label>
                                <label htmlFor="" className="cls_login_label1">Enter Your Credentials Below</label>
                            </div>
                            <img src="/images/profile_icon.svg" alt="" className="cls_login_img" />
                        </div>
                        <div className="cls_login_cont2">
                            <input 
                                type="text" 
                                className="cls_login_input" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                            <input 
                                type="password" 
                                className="cls_login_input" 
                                placeholder="Password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className="cls_login_cont3">
                            <input type="checkbox" className="cls_checkbox" />
                            <label htmlFor="" className="cls_checkbox_label">Keep me logged in</label>
                        </div>
                        <div className="cls_login_cont2">
                            <button className="cls_login_btn" onClick={handleLogin}>Login</button>
                        </div>
                        {error && (
                            <div className="cls_error">
                                <label className="cls_error_label">{error}</label>
                            </div>
                        )}
                        <div className="cls_login_cont3">
                            <label htmlFor="" className="cls_forgot_label">Forgot Password?</label>
                        </div>
                    </div>

                    <div className="cls_login_container1">
                        <label htmlFor="" className="cls_login_label">or</label>
                    </div>

                    <div className="cls_login_container1">
                        <button className="cls_button_light">Register for Store</button>
                        <button className="cls_button_light">Register for Delivery</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

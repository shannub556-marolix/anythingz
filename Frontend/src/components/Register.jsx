import React, { useState } from "react";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";

const Register = () => {
  const { executeRecaptcha } = useGoogleReCaptcha(); // Hook to execute reCAPTCHA
  const [email, setEmail] = useState(""); // To track the email input
  const [isVerified, setIsVerified] = useState(false); // To track verification
  const [errorMessage, setErrorMessage] = useState(""); // To handle errors

  const handleSubmit = async () => {
    if (!email) {
      setErrorMessage("Please enter your email.");
      return;
    }

    try {
      // Execute the reCAPTCHA and get the token
      const token = await executeRecaptcha("submit");
      if (!token) {
        setErrorMessage("reCAPTCHA failed. Please try again.");
        return;
      }

      const response = await fetch("http://localhost:5000/verify-captcha", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, email }),
      });

      const result = await response.json();
      if (result.verified) {
        setIsVerified(true);
        alert("Password reset email sent successfully!");
      } else {
        setErrorMessage("reCAPTCHA verification failed. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="cls_register">
      <div className="cls_register_container">
        <div className="cls_login_container1">
          <img src="/images/reset_icon.svg" alt="" className="cls_login_img" />
        </div>
        <div className="cls_login_container1">
          <label htmlFor="" className="cls_login_label">Password Reset</label>
        </div>
        <div className="cls_login_cont2">
          <input
            type="email"
            name="email"
            id="email"
            className="cls_login_input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {errorMessage && (
          <div className="cls_login_error">
            <p>{errorMessage}</p>
          </div>
        )}
        <div className="cls_login_cont2">
          <button
            className="cls_login_btn"
            onClick={handleSubmit}
            disabled={!email || isVerified}
          >
            Get Password Reset Email
          </button>
        </div>
        <div className="cls_login_cont3">
          <label htmlFor="" className="cls_forgot_label">
            Already Have a reset code?
          </label>
        </div>
      </div>
      <div className="cls_login_container1">
        <label htmlFor="" className="cls_login_label">or</label>
      </div>
      <div className="cls_login_container1">
        <button className="cls_button_light">Login to Admin or Store Owner</button>
      </div>
    </div>
  );
};

export default Register
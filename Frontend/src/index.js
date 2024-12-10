import React from "react";
import ReactDOM from "react-dom";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import App from "./App";


ReactDOM.render(
  <GoogleReCaptchaProvider
    reCaptchaKey="6Le9RIkqAAAAAAz011imS3BfumvekvhY9DHz-gI5" // Replace with your v3 site key
  >
    <App />
  </GoogleReCaptchaProvider>,
  document.getElementById("root")
);
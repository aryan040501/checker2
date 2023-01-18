import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OTPInput, { ResendOTP } from "otp-input-react";
import "./Signup.css";
import axios from "axios";
import { useNavigate } from "react-router";

function Signup() {
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const emailhandler = (e) => {
    setEmail(e.target.value);
  };

  const sendOTP = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/v1/user/request-otp",
      { email: email }
      // { withCredentials: true }
    );
    console.log(res.data);
    localStorage.setItem("email", email);
    console.log(localStorage.getItem("email"));
    navigate("/verify");
  };

  return (
    <div>
      <Header />
      <div className="my-5 row mx-5">
        <div class="col-md-4"></div>
        <form className="signupForm col-md-4">
          <br />
          <br />
          <h4>SignUp Here</h4>

          <label for="username" className="signupLabel">
            Email
          </label>
          <input
            type="text"
            placeholder="Email"
            id="username"
            className="input1"
            onChange={emailhandler}
            value={email}
          />

          {/* <label for="password" className="signupLabel">
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="input1"
          // onChange={onChangePassword}
        />
        <label for="password" className="signupLabel">
          Confirm Password
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="password2"
          className="input1"
          // onChange={onChangePassword2}
        /> */}
          {/* <br />
        <OTPInput
          value={OTP}
          onChange={setOTP}
          autoFocus
          OTPLength={4}
          otpType="number"
          disabled={false}
          secure
          style={{ display: "flex", justifyContent: "center" }}
        />
        <br />
        <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}

          <button className="signupButton" onClick={sendOTP}>
            Send OTP
          </button>
          <div class="login">
            Already a user?
            <a href="/login">
              <div className="btn btn-sm btn-primary mx-1 my-1 text-white">
                Login Here
              </div>
            </a>
          </div>
        </form>
        <div class="col-md-4"></div>
      </div>
      {/* <div style={{ marginTop: "600px" }}> */}
      <Footer />
      {/* </div> */}
    </div>
  );
}

export default Signup;

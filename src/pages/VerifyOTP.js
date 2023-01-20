import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OTPInput, { ResendOTP } from "otp-input-react";
import axios from "axios";
import { useNavigate } from "react-router";

function VerifyOTP() {
  const [OTP, setOTP] = useState("");
  const navigate = useNavigate();

  console.log(localStorage.getItem("email"));

  const verifyOTP = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://recruitex.in:5000/v1/user/verify/email",
      {
        email: localStorage.getItem("email"),
        otp: OTP,
      }
    );
    console.log("uhm", res.data.data);
    if (res.data.data === "all good!") {
      navigate("/set-password");
    } else {
      alert("invalid otp");
    }
  };

  return (
    <div>
      <Header />
      {/* <div class="background-su">
        <div class="shape"></div>
        <div class="shape"></div>
      </div> */}
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <form className="signupForm my-5 mx-3">
            <br />
            <br />
            <br />
            <h4>Verify OTP</h4>

            <br />
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
            <ResendOTP onResendClick={() => console.log("Resend clicked")} />

            <button className="signupButton" onClick={verifyOTP}>
              Verify
            </button>
            <div class="login">
              Already a user?{" "}
              <a href="/login">
                {" "}
                <button className="btn btn-sm">Login Here</button>
              </a>
            </div>
          </form>
        </div>
        <div class="col-md-4"></div>
      </div>

      <Footer />
    </div>
  );
}

export default VerifyOTP;

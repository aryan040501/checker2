import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router";
import axios from "axios";

function SetPassword() {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const navigate = useNavigate();
  const savePassword = async (e) => {
    e.preventDefault();
    if (password === password2) {
      const res = await axios.post(
        "http://localhost:5000/v1/user/set-password",
        {
          email: localStorage.getItem("email"),
          password: password,
        }
      );
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      navigate("/candidate/preference");
    } else {
      alert("Please check password and confirm password");
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
            <h4>Set Password</h4>

            <label for="password" className="signupLabel">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="input1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label for="password" className="signupLabel">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="password2"
              className="input1"
              onChange={(e) => setPassword2(e.target.value)}
            />

            <button className="signupButton" onClick={savePassword}>
              SignUp
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

export default SetPassword;

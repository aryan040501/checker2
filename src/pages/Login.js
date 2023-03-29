import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const emailhandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordhandler = (e) => {
    console.log("pass", e.target.value);
    setPassword(e.target.value);
  };

  const signIn = async (e) => {
    try {
      console.log("email and pass", email, password);
      e.preventDefault();
      const res = await axios.post(
        "http://localhost:5000/v1/user/login",
        { email: email, password: password }
        // { withCredentials: true }
      );
      console.log(res.data);
      if (res.data.token !== undefined) {
        localStorage.setItem("email", email);
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("email"));
        navigate("/jobs");
      }
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div>
      <Header />
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <form className="signupForm my-5 mx-3">
            <br />
            <br />
            <h4>Login Here</h4>

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
              // onChange={onChangeEmail}
            />

            <label for="password" className="signupLabel">
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              id="password"
              className="input1"
              onChange={passwordhandler}
              value={password}
              // onChange={onChangePassword}
            />
            <button className="signupButton" onClick={signIn}>
              Sign In
            </button>
            <div class="login">
              Don't Have an Account?{" "}
              <button className="btn btn-sm" onClick={() => navigate("/signup")}>Signup</button>
            </div>
          </form>
        </div>
        <div class="col-md-4"></div>
      </div>

      <Footer />
    </div>
  );
}

export default Login;

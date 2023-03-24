import React, { useState } from "react";
import emailjs, { send } from "emailjs-com";
import Popup from "reactjs-popup";

function LandingHeroSection() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fuqjtye",
        "template_hkvstwo",
        e.target,
        "user_atSxYw99bKnf9mXrAVaQe"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();

    const options = {
      type: "success",
      shadow: false,
      animation: "bounce",
      duration: 3000,
      position: "top-center",
      onhoverPause: true,
      styleClass: {
        background: "#22272e", // dark mode
        text: "#fff",
        border: "#eee",
      },
    };
  }
  return (
    <div>
      <div class="container">
        <br />
        <br />
        <div class="row">
          <div class="col-md">
            <br />
            <br />
            <h1 class="text-start text-dark fw-bolder">
              Hire or Get Hired without any Hassle <br />
              with RecruitEx
            </h1>
            <br />
            <p class="text-start">
              A Proud Indian Team with exceptional Screened Candidates
            </p>
            <br />
            <div class="d-flex justify-content-start">
              {!token ? (
                <a href="/signup">
                  <button class="btn btn-dark px-5 ">
                    <div class="text-start text-white">Apply Now</div>
                  </button>
                </a>
              ) : (
                <a href="/jobs">
                  <button class="btn btn-dark px-5 ">
                    <div class="text-start text-white">Apply Now</div>
                  </button>
                </a>
              )}
              &nbsp;&nbsp;&nbsp;
              <Popup
                trigger={
                  <button class="btn btn-dark px-5 ">
                    <div class="text-start text-white">Hire Now</div>
                  </button>
                }
                position="center center"
                modal
              >
                <div>
                  <p className="fs-2 bold text-dark">
                    Connect with us to hire with ease
                  </p>
                  <form onSubmit={sendEmail}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email Address"
                      className="form-control mt-2 text-dark"
                    />
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="form-control mt-2 text-dark"
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Phone Number"
                      className="form-control mt-2 text-dark"
                    />
                    <input
                      name="textarea"
                      placeholder="Your Message Here"
                      className="form-control mt-2 text-dark"
                    />
                    <button className="btn btn-sm btn-primary mt-2">
                      Submit
                    </button>
                  </form>
                </div>
              </Popup>
            </div>
          </div>
          <div class="col-md mt-3">
            <div class="card w-100">
              <img
                src="https://img.freepik.com/free-vector/job-interview-conversation_74855-7566.jpg?w=1060&t=st=1672087124~exp=1672087724~hmac=6d3b9ed41b1a183762274da4bf4216092a856d9f573ba092438153a545b7d4a3"
                class="card-img-top"
                alt="#"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default LandingHeroSection;

import React, { useEffect, useState } from "react";
import emailjs, { send } from "emailjs-com";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import toastifier from "toastifier";

function Header() {
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
      <nav className="navbar navbar-expand-lg bg-gray">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="/RecruitEx.png" alt="logo" style={{ width: "200px" }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="row collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-end">
              <li class="nav-item me-5 mb-2">
                <div className="col">
                  {token ? (
                    <a href="/jobs">
                      <div className=" btn btn-sm btn-primary">Apply Now</div>
                    </a>
                  ) : (
                    <a href="/signup">
                      <div className=" btn btn-sm btn-primary">Apply Now</div>
                    </a>
                  )}
                </div>
              </li>
              <li class="nav-item">
                <Popup
                  trigger={
                    <button className=" btn btn-sm btn-primary">
                      Hire Now
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
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;

import React, { useState } from "react";
import emailjs, { send } from "emailjs-com";
import Popup from "reactjs-popup";
import "./LandingHeroSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router";

function LandingHeroSection() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate()
  const [searchData, setSearchData] = useState("")
  const handleChange = (e) => {
    e.preventDefault()
    setSearchData(e.target.value)
    console.log("search", searchData)
  }
  const handleSubmit = () => {
    console.log("pressed")
    navigate(`/jobs?search=${searchData}`)

  }
  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_fuqjtye",
  //       "template_hkvstwo",
  //       e.target,
  //       "user_atSxYw99bKnf9mXrAVaQe"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );

  //   e.target.reset();

  //   const options = {
  //     type: "success",
  //     shadow: false,
  //     animation: "bounce",
  //     duration: 3000,
  //     position: "top-center",
  //     onhoverPause: true,
  //     styleClass: {
  //       background: "#22272e", // dark mode
  //       text: "#fff",
  //       border: "#eee",
  //     },
  //   };
  // }
  return (
    <div>
      <div class="container">
        <br />
        <br />
        <center>
          <h2 className="text-dark">Find Your Dream Job Now</h2>
        </center>
        <div class="d-flex justify-content-center px-4">
          <div class="search shadow-lg"> <form onSubmit={handleSubmit}><input type="text" class="search-input" placeholder="Search Job Roles" name="search" onChange={handleChange} /></form> <a href={`/jobs?search=${searchData}`} class="search-icon"> <FontAwesomeIcon icon={faSearch} /></a> </div>
        </div>
        <br />
        <br />
        <center>
          <h1 className="text-dark">OR</h1>
        </center>
        <br /> <br />
        <center>
          <h2 className="text-dark">Let Employers Contact you</h2>
          <br />
          <button className="btn btn-sm btn-primary" onClick={() => { navigate("/signup") }}>Upload Resume</button>
        </center>
        {/* <div class="row">
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
              <a href="/jobs">
                <button class="btn btn-dark px-5 ">
                  <div class="text-start text-white">Explore Jobs</div>
                </button>
              </a>
            </div>
          </div>
          <div class="col-md mt-3">
            <div class="card w-100">
              <img
                src="https://images.pexels.com/photos/7580636/pexels-photo-7580636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                class="card-img-top"
                alt="#"
              />
            </div>
          </div>
        </div> */}
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

export default LandingHeroSection;

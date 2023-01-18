import React from "react";

function LandingHeroSection() {
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
              Hire without any Hassle <br />
              with RecruitEx
            </h1>
            <br />
            <p class="text-start">
              A Proud Indian Team with exceptional Screened Candidates
            </p>
            <br />
            <a href="/create-new-store">
              <button class="btn btn-dark px-5 ">
                <div class="text-start text-white">Hire Now</div>
              </button>
            </a>
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

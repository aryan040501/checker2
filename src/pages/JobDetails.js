import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function JobDetails() {
  return (
    <>
      <Header />
      <div class="container">
        <br />
        <div class="d-flex justify-content-center">
          <img
            src="https://internshala.com/static/images/internship/detail/specialization_banner/dm_1/r575.png"
            alt="banner"
            style={{ width: "80%", height: "40%" }}
          />
        </div>
        <br />
        <div class="d-flex justify-content-center">
          {/* take details from api for heading */}
          <h2 class="text-dark fw-bold">
            Business Development (Sales) Job/Internship at Company Name
          </h2>
        </div>
        <br />
        <div class="container border rounded px-4 py-4">
          <div class="row">
            <div class="col-md d-flex justify-content-start fw-bold">
              <h4 class="text-dark">Business Development (Sales)</h4>
            </div>
            <div class="col d-flex justify-content-end">
              <img
                src="https://internshala.com/cached_uploads/logo%2F60acc23b76b811621934651.jpg"
                alt="company logo"
                style={{ position: "absolute" }}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md d-flex justify-content-start">
              <h5 class="text-dark">Company Name</h5>
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md d-flex justify-content-start fw-bold">
              <strong>Location:&nbsp;</strong> New Jersey
            </div>
          </div>
          <br />
          <div class="row">
            <div class="col-md ">
              <strong>Start Date:&nbsp;</strong> 12th December 2022
            </div>
            <div class="col-md ">
              <strong>Duration: &nbsp;</strong> 6 Month
            </div>
            <div class="col-md ">
              <strong>Pay Scale: &nbsp;</strong> $10k - $20k
            </div>
            <div class="col-md ">
              <strong>Apply By: &nbsp;</strong> 12th December 2022
            </div>
          </div>
          <br />
          <h4 class="text-dark">About Company Name</h4>
          <div class="row d-flex justify-content-between">
            <div class="col-md-9">
              AVRL provides automation for the leading enterprises with process
              flows that power chatbot + RPA combinations, decision engines,
              workflow automation and data transformation.
            </div>
            <div class="col-md-3">
              <div>
                <strong>Website:&nbsp;</strong>avrl.com
              </div>

              <div>
                <strong>Employees:&nbsp;</strong>100-200
              </div>

              <br />
            </div>
          </div>
          <br />
          <div>
            <h4 class="text-dark">Job Description</h4>
            <div>
              Selected intern's day-to-day responsibilities include: 1. Keeping
              data in CRM up to date with customer details after every call 2.
              Working on lead follow-up (through calls, WhatsApp, texts, etc.)
              till we get all required details 3. Writing corporate emails as
              per business etiquette rules 4. Getting reviews from customers
              (extra incentives will be applied for every review) 5. Updating
              website as on when required
            </div>
          </div>
          <br />
          <div>
            <h3 class="text-dark">Skills Required&nbsp;</h3>
            <h6>
              <span class="badge bg-secondary fs-6">Javascript</span>
            </h6>
          </div>
          <br />
          <div class="d-flex justify-content-center">
            <button class="btn btn-primary">Apply Now</button>
          </div>
          <br />
        </div>
      </div>
      <br />
      <Footer />
    </>
  );
}

export default JobDetails;

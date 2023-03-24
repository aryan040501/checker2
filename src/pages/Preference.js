import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router";

function Preference() {
  const [experienced, setExperienced] = useState(false);
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const handleExperienceChange = (e) => {
    if (e.target.value === "yes") {
      setExperienced(true);
    } else {
      setExperienced(false);
    }
  };

  const [inputFields, setInputFields] = useState([
    { name: "", role: "", start_date: "", end_date: "" },
  ]);

  const addFields = (e) => {
    e.preventDefault();
    let newfield = { name: "", role: "", start_date: "", end_date: "" };

    setInputFields([...inputFields, newfield]);
  };

  const [formData, setFormData] = useState({ email: email });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("form", formData);
  };

  const update = async (e) => {
    e.preventDefault();
    const data = await axios.post(
      `https://recruitex.in/v1/user/preferences`,
      {
        formData,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    console.log("data", data);
    navigate("/candidate/personal_details");
  };

  return (
    <div>
      <Header />
      <br />
      <center>
        <h3 class="fw-bolder text-dark">Choose Preference</h3>
      </center>
      <div class="container border border-3">
        <form class="px-5 py-5">
          <div class="card px-4 py-4">
            <div class="form-check">
              <input
                class="form-check-input mt-2"
                type="radio"
                name="employmentType"
                onChange={handleChange}
                id="flexRadioDefault1"
                value="internship"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                <h4 class="text-dark">Internships</h4>
              </label>
            </div>
          </div>
          <br />
          <div class="card px-4 py-4">
            <div class="form-check">
              <input
                class="form-check-input mt-2"
                type="radio"
                name="employmentType"
                id="flexRadioDefault2"
                value="job"
                onChange={handleChange}
              />
              <label class="form-check-label" for="flexRadioDefault2">
                <h4 class="text-dark">Jobs</h4>
              </label>
            </div>
          </div>
          <br />
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Field Of Interest
            </label>
            <select
              class="form-select text-dark"
              aria-label="Default select example"
              name="fieldOfInterest"
              onChange={handleChange}
            >
              <option selected disabled class="text-dark">
                Select Interest
              </option>
              <option value="Android Development" class="text-dark">
                Android Development
              </option>
              <option value="IOS Development" class="text-dark">
                IOS Development
              </option>
              <option value="Full Stack Web Development" class="text-dark">
                Full Stack Web Development
              </option>
              <option value="Frontend Web Development" class="text-dark">
                Frontend Web Development
              </option>
              <option value="Backend Web Development" class="text-dark">
                Backend Web Development
              </option>
              <option value="Business Development (Sales)" class="text-dark">
                Business Development (Sales)
              </option>
              <option
                value="Marketing or Social Media Manager"
                class="text-dark"
              >
                Marketing or Social Media Manager
              </option>
            </select>
          </div>
          <br />
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Years of Employment Experience in years
            </label>
            <input
              class="form-control text-dark"
              type="number"
              name="experience"
              onChange={handleChange}
            />
            <br />
            <label for="exampleFormControlInput1" class="form-label">
              Current CTC (in LPA, if any)
            </label>
            <input
              class="form-control text-dark"
              type="number"
              name="currctc"
              onChange={handleChange}
            />
            {/* <select
              class="form-select text-dark"
              aria-label="Default select example"
              name="experience"
              onChange={(e) => handleExperienceChange(e)}
            >
              <option selected disabled class="text-dark">
                Do you have Any Experience
              </option>
              <option value="yes" class="text-dark">
                Yes
              </option>
              <option value="no" class="text-dark">
                No
              </option>
            </select> */}
          </div>
          <br />

          {experienced ? (
            <>
              <label class="form-label fs-5 text-dark fw-bold">
                Experiences
              </label>
              {inputFields.map((input, index) => {
                return (
                  <div
                    key={index}
                    class="border border-2 px-1 py-1 rounded mt-2"
                  >
                    <div class="row">
                      <div class="col-md-6">
                        <label class="form-label">Name of Company</label>
                        <input class="form-control text-dark" type="text" />
                      </div>
                      <div class="col-md-6">
                        <label class="form-label">Role</label>
                        <input class="form-control text-dark" type="text" />
                      </div>
                      <div class="row">
                        <div class="col-md me-3">
                          <label class="form-label">Start Date</label>
                          <input class="form-control text-dark" type="date" />
                        </div>
                        <div class="col-md">
                          <label class="form-label">End Date</label>
                          <input class="form-control text-dark" type="date" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            ""
          )}
          <br />
          <center>
            {/* <button
              class="btn btn-primary btn-sm mt-3 mb-3"
              onClick={addFields}
            >
              Add More Experience
            </button>
            &nbsp; &nbsp;&nbsp; */}
            <button class="btn btn-primary btn-sm mt-3 mb-3" onClick={update}>
              Save & Next
            </button>
          </center>
        </form>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Preference;

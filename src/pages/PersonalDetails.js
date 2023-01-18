import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import { useNavigate } from "react-router";

function PersonalDetails() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    email: localStorage.getItem("email"),
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log("form", formData);
  };

  const updateDetails = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:5000/v1/user/personal-details",
      { formData },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    console.log(res.data);
    navigate("/candidate/preference");
  };

  const upload = async (event) => {
    setDisabled(true);
    var image = "";
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = async function () {
      console.log(reader.result);
      image = reader.result;
      await axios
        .post(
          `http://localhost:5000/v1/upload`,
          {
            resume: image,
            type: event.target.files[0].type,
          },
          {
            headers: {
              "x-auth-token": token,
            },
          }
        )
        .then((resul) => {
          console.log("result from upload", resul);
          setFormData({ ...formData, ["resume"]: resul.data });
          setDisabled(false);
        });
    };
  };

  return (
    <div>
      <Header />
      <br />
      <center>
        <h3 class="fw-bolder text-dark">Personal Details</h3>
      </center>
      <div class="container border border-3">
        <form class="px-5 py-5">
          <div class="row">
            <div class="col-md">
              <label class="form-label">First Name</label>
              <input
                class="form-control text-dark"
                name="firstName"
                onChange={handleChange}
                type="text"
              />
            </div>
            <div class="col-md">
              <label class="form-label">Last Name</label>
              <input
                class="form-control text-dark"
                name="lastName"
                onChange={handleChange}
                type="text"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label class="form-label">Gender</label>
              <select
                class="form-select text-dark"
                aria-label="Default select example"
                name="gender"
                onChange={handleChange}
              >
                <option selected disabled>
                  Select Gender
                </option>
                <option value="Male" class="text-dark">
                  Male
                </option>
                <option value="Female" class="text-dark">
                  Female
                </option>
                <option value="Others" class="text-dark">
                  Others
                </option>
              </select>
            </div>
            <div class="col-md">
              <label class="form-label">Any Disablity</label>
              <select
                class="form-select text-dark"
                aria-label="Default select example"
                name="disabled"
                onChange={handleChange}
              >
                <option selected disabled>
                  Select Option
                </option>
                <option value="true" class="text-dark">
                  Yes
                </option>
                <option value="false" class="text-dark">
                  No
                </option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="col-md-2">
              <label class="form-label">Country Code</label>
              <input
                class="form-control text-dark"
                type="number"
                placeholder="+91"
              />
            </div>
            <div class="col-md-10">
              <label class="form-label">Mobile Number</label>
              <input
                class="form-control text-dark"
                type="number"
                name="mobileNo"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label class="form-label">Current Location</label>
              <input
                class="form-control text-dark"
                type="text"
                name="currentLocation"
                onChange={handleChange}
              />
            </div>
            <div class="col-md">
              <label class="form-label">Preferred Location (Optional)</label>
              <input
                class="form-control text-dark"
                type="text"
                name="preferredLocation"
                onChange={handleChange}
              />
            </div>
          </div>
          <div class="row">
            <div class="col-md">
              <label class="form-label">
                Current/Highest Level of Education
              </label>
              <select
                class="form-select text-dark"
                aria-label="Default select example"
                name="levelOfEducation"
                onChange={handleChange}
              >
                <option selected disabled>
                  Select Education
                </option>
                <option value="Graduation" class="text-dark">
                  Graduation
                </option>
                <option value="Senior Secondary" class="text-dark">
                  Senior Secondary
                </option>
                <option value="Secondary" class="text-dark">
                  Secondary
                </option>
                <option value="Diploma" class="text-dark">
                  Diploma
                </option>
                <option value="Phd" class="text-dark">
                  Phd
                </option>
              </select>
            </div>
            <div class="col-md">
              <label for="formFile" class="form-label">
                Upload Resume
              </label>
              <input
                class="form-control text-dark"
                name="resume"
                onChange={upload}
                type="file"
                id="formFile"
              />
            </div>
          </div>
          <br />
          <center>
            <button
              class="btn btn-primary btn-sm"
              onClick={updateDetails}
              disabled={disabled}
            >
              Save & Next
            </button>
          </center>
        </form>
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default PersonalDetails;

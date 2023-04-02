import React from "react";
import "./App.css";
import "./assets/css/animate.css";
import "./assets/css/bootstrap-icons.css";
import "./assets/scss/style.scss";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import JobListing from "./pages/JobListing";
import JobDetails from "./pages/JobDetails";
import Signup from "./pages/Signup";
import PersonalDetails from "./pages/PersonalDetails";
import Preference from "./pages/Preference";
import MyApplications from "./pages/MyApplications";
import VerifyOTP from "./pages/VerifyOTP";
import SetPassword from "./pages/SetPassword";
import Login from "./pages/Login";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" index element={<LandingPage />} />
        <Route exact path="/jobs" element={<JobListing />} />
        <Route exact path="/job/:id" element={<JobDetails />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/verify" element={<VerifyOTP />} />
        <Route exact path="/set-password" element={<SetPassword />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/blogs" element={<Blogs/>}/>
        <Route exact path="/blog/:id" element={<Blog/>}/>
        <Route
          exact
          path="/candidate/personal_details"
          element={<PersonalDetails />}
        />
        <Route exact path="/candidate/preference" element={<Preference />} />
        {/* <Route
          exact
          path="/candidate/application"
          element={<MyApplications />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;

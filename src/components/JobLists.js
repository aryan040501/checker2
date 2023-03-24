import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Sidebar from "./Sidebar";
import axios from "axios";
import { useNavigate } from "react-router";
import Footer from "./Footer";

function JobLists() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    const getJobs = async () => {
      const res = await axios.get("http://localhost:5000/v1/jobs");
      console.log(res.data);
      setJobs(res.data);
    };
    getJobs();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div>
              <br />
              <br />
              <br />
              <Sidebar />
            </div>
          </div>
          <div className="col-md-7">
            <div>
              <br />
              <div class="d-flex justify-content-center f2-bold text-dark">
                {jobs.length} Jobs Found
              </div>
              {/* send datas to jobCard */}
              <center>
                Don't worry if you don't find a job of your liking here. <br />
                Your Resume will be shared directly to recruiters that are not
                present here.
              </center>
              {jobs.map((datas) => (
                <div>
                  <br />
                  <JobCard data={datas} />
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <Footer />
    </>
  );
}

export default JobLists;

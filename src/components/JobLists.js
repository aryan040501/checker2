import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Sidebar from "./Sidebar";
import axios, { all } from "axios";
import { useNavigate } from "react-router";
import Footer from "./Footer";

function JobLists() {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [company, setCompany] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get("https://recruitex.in/v1/jobs");
      console.log(res.data);
      setJobs(res.data);
      setAllJobs(res.data);
    };
    getJobs();
  }, []);

  useEffect(() => {
    const jobs = allJobs.filter((j) => {
      return (
        j.company_name.toLowerCase().includes(company) &&
        j.job_title.toLowerCase().includes(jobRole) &&
        j.skills_required.toLowerCase().includes(skills) &&
        j.location.toLowerCase().includes(location)
      );
    });
    setJobs(jobs);
  }, [company, jobRole, skills, location]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div>
              <br />
              <br />
              <br />
              <Sidebar
                setCompany={setCompany}
                company={company}
                jobRole={jobRole}
                setJobRole={setJobRole}
                skills={skills}
                setSkills={setSkills}
                location={location}
                setLocation={setLocation}
              />
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

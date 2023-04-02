import React, { useState, useEffect } from "react";
import JobCard from "./JobCard";
import Sidebar from "./Sidebar";
import axios, { all } from "axios";
import { useNavigate } from "react-router";
import Footer from "./Footer";
import { useSearchParams } from "react-router-dom";

function JobLists() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [company, setCompany] = useState("");
  const [jobRole, setJobRole] = useState(searchParams.get("search"));
  const [skills, setSkills] = useState("");
  const [location, setLocation] = useState("");
  const [noJob, setNoJob] = useState(false)

  useEffect(() => {
    const getJobs = async () => {
      const res = await axios.get("http://localhost:5000/v1/jobs");
      console.log(res.data);
      setJobs(res.data);
      setAllJobs(res.data);
    };
    getJobs();
  }, []);

  useEffect(() => {
    console.log("job", jobRole)
    console.log("company", company)
    console.log("skills", skills)
    console.log("localtion", location)
    console.log("all jobs", allJobs)
    const filteredjobs = allJobs.filter((j) => {
      return (
        j.company_name.toLowerCase().includes(company) &&
        j.job_title.toLowerCase().includes(jobRole) &&
        j.skills_required.toLowerCase().includes(skills) &&
        j.location.toLowerCase().includes(location)
      );
    });
    console.log("filtered", filteredjobs)
    if (filteredjobs.length > 0) {
      setNoJob(false)
      setJobs(filteredjobs);
    }
    else {
      setJobs(allJobs)
      setNoJob(true)
    }
    console.log("nojob", noJob)
  }, [company, jobRole, skills, location, allJobs]);

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
                {!noJob ? jobs.length + " Jobs Found" : "No Job Found, Here are some we recommend"}
              </div>
              {/* send datas to jobCard */}
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

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./JobCard.css";
import "./JobCard.scss";

function JobCard({ data }) {
  const [tags, setJobTags] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [applied, setApplied] = useState(false);
  useEffect(() => {
    const setTags = () => {
      setJobTags(data.tags.split(","));
    };

    const getApplied = async () => {
      console.log("token", token);
      const res = await axios.post(
        `http://localhost:5000/v1/user/applied/${data.id}`,
        {},
        {
          headers: {
            "x-auth-token": token,
          },
        }
      );
      console.log("data from applied?", res.data);
      setApplied(res.data);
    };

    setTags();
    getApplied();
  }, []);

  const apply = async () => {
    console.log("applied");
    const res = await axios.post(
      `http://localhost:5000/v1/user/apply/${data.id}`,
      {},
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    console.log("data from apply", res.data);
  };

  return (
    <div>
      {console.log("tags", tags)}
      <div class="job-card">
        <div class="job-card__content">
          <div class="job-card_img">
            <img src={data.logo} alt="Company Logo" />
          </div>
          <div class="job-card_info">
            <h6 class="text-muted">
              <div class="job-card_company">{data.company_name}</div>
            </h6>
            <div class="row">
              <h4 class="col-8 text-dark">{data.job_title}</h4>
              <h6 class="col-4 text-muted">{data.location}</h6>
            </div>
            <p class="mb-0">Salary: {data.salary}</p>
          </div>
        </div>
        <div class="job-card__footer">
          <div class="job-card_job-type">
            {tags.map((tag) => (
              <span class="job-label">{tag}</span>
            ))}
            {/* <span class="job-label">Senior</span>
            <span class="job-label">UX/UI</span> */}
          </div>
          {applied ? (
            <button class="btn btn-primary" disabled>
              Applied
            </button>
          ) : (
            <button class="btn btn-primary" onClick={apply}>
              Apply
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default JobCard;

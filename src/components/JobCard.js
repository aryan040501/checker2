import React from "react";
import "./JobCard.css";
import "./JobCard.scss";

function JobCard({data}) {
  return (
    <div>
      <div class="job-card">
        <div class="job-card__content">
          <div class="job-card_img">
            <img
              src="https://www.tailorbrands.com/wp-content/uploads/2020/07/mcdonalds-logo.jpg"
              alt="Company Logo"
            />
          </div>
          <div class="job-card_info">
            <h6 class="text-muted">
              <a href="" class="job-card_company">
              {data.company_name}
              </a>
              <a href="#!" class="float-right">
                <i class="fa fa-heart-o"></i>
              </a>
            </h6>
            <h4 class="text-dark">{data.job_title}</h4>
            <p class="mb-0">{data.salary}</p>
          </div>
        </div>
        <div class="job-card__footer">
          <div class="job-card_job-type">
            <span class="job-label">Full time</span>
            <span class="job-label">Senior</span>
            <span class="job-label">UX/UI</span>
          </div>
          <button class="btn btn-primary">Apply</button>
        </div>
      </div>
    </div>
  );
}

export default JobCard;

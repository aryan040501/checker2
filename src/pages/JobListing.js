import React from "react";
import Header from "../components/Header";
import JobLists from "../components/JobLists";
import { Helmet } from "react-helmet";

function JobListing() {
  return (
    <div>
      <Helmet>
        <title>RecruitEx - Jobs just for you</title>
        <meta name={"Get hired at your dream job with ease"} content={"RecruitEx assists you to get hired without applying to hundreds of jobs rather you are contacted by employers"} />
        <meta name="site_name" content="Recruitex" />
        <meta
          name="title"
          content="Recruitex: Get hired at your dream job with ease"
        />
        <meta
          name="description"
          content="Connecting recruiters and candidates to appropriate job roles and simplifying the hiring process"
        />
        <meta
          name="image"
          content="https://recruitex.in/RecruitExFavicon.png"
        />
      </Helmet>
      <Header />
      <JobLists />
    </div>
  );
}

export default JobListing;

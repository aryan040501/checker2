import React, { useState } from "react";
import EmptyList from "../components/EmptyList";
import BlogList from "../components/BlogList";
import { blogList } from "../components/Data";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import { useEffect } from "react";
import axios from "axios"
import Footer from "../components/Footer";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const getBlogs = async () => {
      const res = await axios.get("https://recruitex.in/v1/blogs");
      console.log(res.data);
      setBlogs(res.data);
    };
    getBlogs();
  }, []);
  return (
    <div>
      <Helmet>
        <title>RecruitEx - Hiring Made Easy</title>
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
      {/* <Dark /> */}
      <Header />
      <br></br>
      <center>
        <strong>
          <div className="text-dark fs-1">Blogs</div>
        </strong>
      </center>
      <br></br>
      {/* Blog List & Empty View */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
      <br /><br />
      <Footer />
    </div>
  );
};

export default Blogs;

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
      const res = await axios.get("http://localhost:5000/v1/blogs");
      console.log(res.data);
      setBlogs(res.data);
    };
    getBlogs();
  }, []);
  return (
    <div>
      <Helmet>
        <title>Get Hired with Ease | Recruitex</title>
        <meta
          name="Get Hired or Hire with Ease | Recruitex"
          content="Interviews, articles and todos to get hired at your dream company"
        />
        <meta property="og:site_name" content="Recruitex" />
        <meta
          property="og:title"
          content="Get tips on how to get hired from professionals | Recruitex"
        />
        <meta
          property="og:description"
          content="Interviews, articles and todos to get hired at your dream company"
        />
        <meta
          property="og:image"
          content="http://localhost:5000/RecruitEx.png"
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

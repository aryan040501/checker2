import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogList } from "../components/Data";
import Chip from "../components/Chip";
import EmptyList from "../components/EmptyList";
import "./blog.css";
// import Dark from "components/headers/dark";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import axios from "axios"
import Footer from "../components/Footer";

const Blog = () => {
  const { id } = useParams();
  const [blog, setBlogs] = useState(null);
  const [tags, setTags] = useState()
  console.log("id", id);
  useEffect(() => {
    // console.log("bloglist", blogList);
    // console.log("blog from blog data", blogList);
    // let blog = blogList.find((blog) => blog.id === parseInt(id));
    // console.log("huhhhhhhhhhhh", blog);
    // if (blog) {
    //   setBlog(blog);
    // }
    const getBlogs = async () => {
      const res = await axios.get("http://localhost:5000/v1/blogs/1");
      console.log("blogs data", res.data[0]);
      setBlogs(res.data[0]);
      setTags(res.data[0].subcategory.split(","));
    };
    getBlogs();
  }, []);
  // console.log("bloglist", blogList);
  // console.log("blog from blog data", blogList);
  return (
    <>
      {blog ? (
        <Helmet>
          <title>{blog.title}</title>
          <meta name={blog.title} content={blog.description.substr(0, 30)} />
          <meta property="og:site_name" content="Recruitex" />
          <meta property="og:title" content={blog.title} />
          <meta
            property="og:description"
            content={blog.description.substr(0, 30)}
          />
          <meta
            property="og:image"
            content="http://localhost:5000/RecruitEx.png"
          />
        </Helmet>
      ) : (
        <Helmet></Helmet>
      )}
      {/* <Dark /> */}
      <Header />
      <br></br>
      {blog ? (
        <div className="blog-body-full">
          <div className="ads">
            {/* <ins
              class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-6014245561423948"
              data-ad-slot="9190722057"
              data-ad-format="auto"
              data-full-width-responsive="true"
            ></ins> */}
          </div>
          <div className="blog-wrap">
            <header>
              <h1 className="blog-title text-dark">{blog.title}</h1>
              <p className="blog-date">Published {blog.createdAt}</p>
              <div className="blog-subCategory">
                {tags.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
              </div>
            </header>
            <img src={blog.cover} alt="cover" />
            <p
              className="blog-desc"
              dangerouslySetInnerHTML={{ __html: blog.description }}
            ></p>
          </div>
          {/* <div className="ads"> */}
          {/* ADSSFNFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF */}
          {/* </div> */}
        </div>
      ) : (
        <EmptyList />
      )}
      <Footer />
    </>
  );
};

export default Blog;

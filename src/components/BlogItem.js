import React from "react";
import { Link } from "react-router-dom";
import Chip from "./Chip";
import "./BlogItem.css";

const BlogItem = ({
  blog: {
    description,
    title,
    created_at,
    author_name,
    author_avatar,
    cover,
    category,
    id,
  },
}) => {
  console.log("blog itme", description);
  return (
    <div className="blogItem-wrap">
      <Link className="blogItem-link" to={`/blog/${id}`}>
        <img className="blogItem-cover" src={cover} alt="cover" />
        <Chip label={category} />
        <h3 className="text-dark">{title}</h3>
        <p className="blogItem-desc text-dark" dangerouslySetInnerHTML={{ __html: description.slice(0, 180) }}></p>
        <footer>
          <div className="blogItem-author">
            <img src={author_avatar} alt="avatar" />
            <div>
              <h6 className="text-dark">{author_name}</h6>
            </div>
          </div>
          ➝
        </footer>
      </Link>
    </div>
  );
};

export default BlogItem;

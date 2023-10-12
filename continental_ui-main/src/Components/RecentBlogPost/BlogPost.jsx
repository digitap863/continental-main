import React from "react";
import dateI from "../../assets/HomePage/Date Icon.svg";

const BlogPost = ({ blogData }) => {
  const { img, date, authorName, postHeading, postDesc } = blogData;
  return (
    <div className="BlogPost ">
      <div className="blogImage ">
        <img src={img} alt="blogImage" />
      </div>
      <div className="blog-info">
        <div className="author-info">
          <div className="author-img"></div>
          <p>By {authorName}</p>
        </div>
        <p className="blog-date"> 
          <img src={dateI} alt="date" /> {date}
        </p>
      </div>
      <h1>{postHeading}</h1>

      <p className="postDesc">{postDesc}</p>
    </div>
  );
};

export default BlogPost;

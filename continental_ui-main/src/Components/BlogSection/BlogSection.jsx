import React from "react";
import "./BlogSection.css";
import readMore from "../../assets/HomePage/readMore.svg";
import { blogsArr, containerStyle } from "../../Constants/Constants";
import { useNavigate } from "react-router-dom";

const BlogSection = () => {
  const navigate = useNavigate();
  return (
    <section className="blog-section testBorder">
      <div className="articles-wrap testBorder">
        <p className="title">New Articles</p>
        <h1>Featured Blog Posts</h1>
        <p className="description">
        Explore firsthand experiences of students studying abroad, gaining insights into diverse cultures and educational landscapes.
        </p>
        <div className="articles testBorder">
          {blogsArr.map(({ imgSrc, date, heading, desc }, idx) => (
            <div className="blog " key={idx}>
              <div className="blog-item">
                <img className="girl" src={imgSrc} alt="girl" />
              </div>
              <div className="blog-item ">
                <p className="date">{date}</p>
                <h2>{heading}</h2>
                <p className="desc" style={containerStyle}>{desc}</p>
                <p
                  style={{ cursor: "pointer" }}
                  className="readMore"
                  onClick={() => navigate("/blogs")}
                >
                  Read More &nbsp;
                  <span className="readMoreIcon">
                    <img src={readMore} alt="icon" />
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

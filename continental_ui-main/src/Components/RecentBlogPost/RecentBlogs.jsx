import React from "react";

const RecentBlogs = ({ blogs, onBlogClick }) => {
  return (
    <div className="RecentBlogs">
      <h3>Recent Post</h3>
      {blogs.map((b) => (
        <div style={{ cursor: "pointer" }} onClick={() => onBlogClick(b)}>
          <div className="rec-blog-card">
            <div className="img">
              <img src={b.img} alt="blog" />
            </div>
            <div className="blog-text">
              <h5>{b.postHeading}</h5>
              <p>{b.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentBlogs;

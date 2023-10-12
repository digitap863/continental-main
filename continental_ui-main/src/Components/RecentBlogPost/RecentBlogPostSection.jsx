import React, { useRef, useState } from "react";
import { recentBlogArr } from "../../Constants/Constants";
import "./RecentBlogPostSection.css";
import RecentBlogs from "./RecentBlogs";
import BlogPost from "./BlogPost";

const RecentBlogPostSection = () => {
  const [selectedBlog, setSelectedBlog] = useState(recentBlogArr[0]);
  const parentDivRef = useRef(null);
  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
    parentDivRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
      offset: 30,
    });
  };
  return (
    <section className="RecentBlogPost testBorder" ref={parentDivRef}>
      <div className="RecentBlogWrap testBorder">
        <div className="res-blog-post ">
          <BlogPost blogData={selectedBlog} />
        </div>
        <div className="res-blog-posts ">
          <RecentBlogs blogs={recentBlogArr} onBlogClick={handleBlogClick} />
        </div>
      </div>
    </section>
  );
};

export default RecentBlogPostSection;

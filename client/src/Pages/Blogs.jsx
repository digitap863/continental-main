import React from "react";
import HeaderBlog from "../Components/HeaderBlog/HeaderBlog";
import Footer from "../Components/Footer/Footer";
import Subscription from "../Components/Subscription/Subscription";
import RecentBlogPostSection from "../Components/RecentBlogPost/RecentBlogPostSection";
import useScrollToTop from "../Hooks/useScrollToTop";

const Blogs = () => {
  useScrollToTop();

  return (
    <div className="mainWrapper">
      <HeaderBlog />
      <RecentBlogPostSection />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Blogs;

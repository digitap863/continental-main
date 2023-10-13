import React from "react";
import HeaderMigrate from "../Components/HeaderMigrate/HeaderMigrate";
import DreamDestiGrid from "../Components/DestiGrid/DreamDestiGrid";
import YstudyAbroad from "../Components/YstudyAbroad/YstudyAbroad";
import OurExperience from "../Components/OurExperience/OurExperience";
import Testimonials from "../Components/Testimonials/Testimonials";
import BlogSection from "../Components/BlogSection/BlogSection";
import Subscription from "../Components/Subscription/Subscription";
import Footer from "../Components/Footer/Footer";
import useScrollToTop from "../Hooks/useScrollToTop";

const Migrate = () => {
  useScrollToTop();

  return (
    <div className="mainWrapper">
      <HeaderMigrate />
      <DreamDestiGrid />
      <YstudyAbroad />
      <OurExperience />
      <Testimonials />
      <BlogSection />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Migrate;

import React from "react";
import { useLocation, useParams } from "react-router-dom";
import HeaderCountry from "../Components/HeaderCountryPage/HeaderCountry";
import CountryExperience from "../Components/CountryExperience/CountryExperience";
import YstudyAbroad from "../Components/YstudyAbroad/YstudyAbroad";
import EducationSystem from "../Components/EducationSystem/EducationSystem";
import Testimonials from "../Components/Testimonials/Testimonials";
import BlogSection from "../Components/BlogSection/BlogSection";
import Subscription from "../Components/Subscription/Subscription";
import Footer from "../Components/Footer/Footer";
import AccordionGuidlines from "../Components/AccordionGuidlines/AccordionGuidlines";
import useScrollToTop from "../Hooks/useScrollToTop";

const Countries = () => {
  useScrollToTop();

  const location = useLocation()
  const data = location.state
  return (
    <div className="mainWrapper">
      <HeaderCountry name={data?.name} />
      <CountryExperience data={data} />
      <EducationSystem data={data} />
      <YstudyAbroad name={data?.name} />
      <AccordionGuidlines />
      <Testimonials />
      <BlogSection />
      <Subscription />
      <Footer />
    </div>
  );
};

export default Countries;

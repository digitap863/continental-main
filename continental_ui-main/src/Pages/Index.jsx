import React from "react";
import "../global.css";
import Header from "../Components/Header/Header";
import Destination from "../Components/Destination/Destination";
import Footer from "../Components/Footer/Footer";
import Subscription from "../Components/Subscription/Subscription";
import BlogSection from "../Components/BlogSection/BlogSection";
import Overseas from "../Components/Overseas/Overseas";
import OurExperience from "../Components/OurExperience/OurExperience";
import WhyChooseUs from "../Components/WhyChooseUs/WhyChooseUs";
import Testimonials from "../Components/Testimonials/Testimonials";
import useScrollToTop from "../Hooks/useScrollToTop"; 
import ChatbotBubble from "../Components/chatbot/Chatbot";

const Index = () => {
  useScrollToTop();
  return (
    <>
      <div className="mainWrapper">
        <ChatbotBubble/>
        <Header />
        <Destination />
        <WhyChooseUs />
        <Overseas />
        <OurExperience />
        <Testimonials />
        <BlogSection />
        <Subscription />
        <Footer />
      </div>
    </>
  );
};

export default Index;

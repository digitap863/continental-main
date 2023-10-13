import React from "react";
import HeaderContact from "../Components/HeaderContact/HeaderContact";
import GetInTouchForm from "../Components/GetInTouchForm/GetInTouchForm";
import ContactDetails from "../Components/ContactDetails/ContactDetails";
import Subscription from "../Components/Subscription/Subscription";
import Footer from "../Components/Footer/Footer";
// import useScrollToTop from "../Hooks/useScrollToTop";
import useScrollToService from "../Hooks/useScollToService";
import useScrollToTop from "../Hooks/useScrollToTop";
import { useLocation } from "react-router-dom";


function Contact() {
  const location = useLocation()
  const data = location.state
  useScrollToService(data)
// useScrollToTop()
  return (
    <div className="mainWrapper">
      <HeaderContact />
      <div>
        <GetInTouchForm /> </div>
      <ContactDetails />
      <Subscription />
      <Footer />
    </div>
  );
}

export default Contact;

import React from "react";
import contactCirc from "../../assets/HomePage/contactImage-min.png";
import Email from "../../assets/HomePage/Email Icon.svg";
import Call from "../../assets/HomePage/Call Icon.svg";
import Location from "../../assets/HomePage/Location Contact Icon.svg";
import "./ContactDetails.css";

const ContactDetails = () => {
  return (
    <section className="ContactDetails testBorder">
      <div className="contacts-wrap testBorder">
        <div className="contacts-text-sec">
          <h3>Details</h3>
          <h1>Contact Details</h1>
          <p>
          Feel free to reach out to us for further information and assistance.
          </p>
        </div>

        <div className="contact-image-btns ">
          <div className="contact-Img ">
            <img src={contactCirc} alt="" />
          </div>

          <div className="contact-details ">
            <div className="contact_cards ">
              <img src={Email} alt="" />
              <div className="text-details">
                <h3>Email us</h3>
                <p>enquiry@continentaloverseaseducation.com</p>
              </div>
            </div>
            <div className="contact_cards ">
              <img src={Call} alt="" />
              <div className="text-details">
                <h3>Call Us</h3>
                <p>+91 7736211130</p>
              </div>
            </div>
            <div className="contact_cards ">
              <img src={Location} alt="" />
              <div className="text-details">
                <h3>Our Location</h3>
                <p>
                  Continental House, Master Coaching Board Rd, Kaloor,
                  Ernakulam, Kerala 682017
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;

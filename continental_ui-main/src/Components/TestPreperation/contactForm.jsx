import React from "react";
import mapGetin from "../../assets/HomePage/contactImageMap.png";

const ContactForm = () => {
  return (
    <section className="GetInTouchForm ">
      <div className="GetInTouch-wrap ">
        <div className="getIn-text-sec ">
          <h4>Connect Us</h4>
          <h1>Get in touch</h1>
          <p>Feel free to contact us for any inquiries or assistance you may need. We're here to help
          </p>
        </div>
        <div className="map-form ">
          <div className="map ">
            <img src={mapGetin} alt="" />
          </div>
          <div className="form ">
            <form action="">
              <div className="form-row  ">
                <div className="input-group">
                  <input
                    type="text"
                    name=""
                    placeholder="Full Name"
                    className="name-inp"
                    required
                  />
                  <label htmlFor="name" className="input-group__label">
                    Full Name
                  </label>
                </div>
              </div>
              <div className="form-row name-email-row  ">
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Email"
                    name=""
                    className="email-inp"
                    required
                  />
                  <label htmlFor="name" className="input-group__label">
                    Email
                  </label>
                </div>
                <div className="input-group">
                  <input
                    type="number"
                    name=""
                    placeholder="Phone No"
                    className="number-inp"
                    required
                  />
                  <label htmlFor="phone" className="input-group__label">
                    Phone{" "}
                  </label>
                </div>
              </div>
              <div className="form-row ">
                <div className="input-group">
                  <textarea
                  placeholder="Type Message"
                  className=".textArea" />
                  <label htmlFor="phone" className="input-group__labelMessage">
                    Type Message{" "}
                  </label>
                </div>
              </div>

              <button className="getIn-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

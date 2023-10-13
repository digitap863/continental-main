import React from "react";
import "./Subscription.css";
import subsIcon from "../../assets/HomePage/subscribeIcon.svg";
import bottomSpiral from "../../assets/HomePage/bottomSpiral.svg";
import topSpiral from "../../assets/HomePage/topSpiral.svg";
import subsMsg from "../../assets/HomePage/subsMsg.svg";

const Subscription = () => {
  return (
    <section className="subscription testBorder">
      <div className="subs-wrap testBorder">
        <p className="title">Reach out</p>
        <h1>Subscribe for latest updates</h1>
        <p className="description">
        Stay Informed! Subscribe for the latest abroad education updates, insights, and valuable resources tailored to your journey.
        </p>
        <form className="subscribe-form ">
          <div className="input-container">
            <img
              src={subsMsg}
              draggable={false}
              className="subMsgIcon"
              alt=""
            />
            <input type="email" name="email" placeholder="Your email" />
          </div>
          <button type="submit">Subscribe</button>
        </form>
        <img src={subsIcon} className="topIcon" alt="subs_icon" />
        <img src={subsIcon} className="bottomIcon" alt="subs_icon" />
        <img src={topSpiral} className="topSpiral" alt="spiral" />
        <img
          src={bottomSpiral}
          draggable={false}
          className="bottomSpiral"
          alt="spiral"
        />
      </div>
    </section>
  );
};

export default Subscription;

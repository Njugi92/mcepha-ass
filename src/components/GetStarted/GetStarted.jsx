import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section className="g-wrapper" id="GetStarted">
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get started with Mcepha</span>
          <span className="secondaryText">
            Subscribe and get super attractive Services <br />
            Our commitment is to provide high quality professional services and
            valued consultancies in all our client engagements.
          </span>
          <button className="button">
            <a href="mailto:raph.mcepha@gmail.com">Get Started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

import React from "react";
import { Link as ScrollLink } from "react-scroll";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="/mcephalogo.png" alt="logo" width={120} />

          <span className="secondaryText">
            Exceed client expectations on Time,
            <br />
            Quality and value of Service.
          </span>
        </div>

        {/* right side */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            {" "}
            Room 501, 5TH FLOOR EQUITY PLAZA BIASHARA STREET
          </span>

          <div className="flexCenter f-menu">
            <span>Home</span>
            <span>Our Values</span>
            <span>Services</span>
            <span>contact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import "./Accountancy.css";

const Accountancy = () => {
  return (
    <section className="accountancy-wrapper">
      <div className="accountancy-container">
        <div className="accountancy-text">
          <h1>Expert Accountancy Services</h1>
          <p>
            Our team of experienced accountants provides top-notch services to
            help you manage your finances effectively. We offer tailored
            solutions to meet the unique needs of your business.
          </p>
          <ul className="services-list">
            <li>Financial Reporting</li>
            <li>Tax Preparation & Planning</li>
            <li>Audit Support</li>
            <li>Business Advisory</li>
          </ul>
          <button className="cta-button">Learn More</button>
        </div>
        <div className="accountancy-image">
          <img src="./contact.jpg" alt="Accountancy" />
        </div>
      </div>
    </section>
  );
};

export default Accountancy;

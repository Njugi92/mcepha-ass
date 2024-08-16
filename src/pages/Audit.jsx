import React from "react";
import "./Audit.css";

const Audit = () => {
  const handleContactClick = () => {
    window.location.href =
      "mailto:raph.mcepha@gmail.com?subject=Inquiry&body=Hello, I would like to inquire about your audit services.";
  };

  const handleExchangeRatesClick = () => {
    window.open(
      "https://www.centralbank.go.ke/rates/forex-exchange-rates/",
      "_blank"
    );
  };

  return (
    <section className="audit-wrapper">
      <div className="audit-header">
        <h1 className="audit-title">Our Audit Services</h1>
      </div>
      <div className="inner-width">
        <div className="audit-content">
          <div className="audit-info">
            <h2 className="audit-subtitle">
              External/Statutory Audit (Financial)
            </h2>
            <p className="audit-description">
              In accordance with statutory requirements and International
              Accounting Standards (IAS) as well as Risk assessment audits.
            </p>
            <ul className="audit-operations">
              <li>Internal Audit and Management Audit</li>
              <li>Accountancy and Books Keeping</li>
              <li>Management Accounting</li>
              <li>
                Financial Management Systems designs development of policy
                manuals
              </li>
              <li>Procurement policy manuals</li>
              <li>
                Feasibility and Sustainability studies in government and donor
                funded organizations
              </li>
              <li>
                Project and donor audit in compliance with the Donor
                requirements and the memorandum of understanding
              </li>
            </ul>
          </div>
          <div className="audit-image-wrapper">
            <img
              src="/mcephalogo.png"
              alt="Mcepha & Associates Logo"
              className="logo"
            />
            <img
              src="./audit-img.jpg"
              alt="Audit Services"
              className="audit-image"
            />
            <div className="audit-buttons">
              <button className="contact-button" onClick={handleContactClick}>
                Contact
              </button>
              <button
                className="exchange-rates-button"
                onClick={handleExchangeRatesClick}
              >
                USD Exchange Rates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audit;

import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./DebtFinancingAndManagementAdvisory.css";

const DebtFinancingAndManagementAdvisory = () => {
  const openLargerMap = () => {
    window.open(
      "https://www.google.com/maps?q=Equity+Plaza,+Thika,+Kenya",
      "_blank"
    );
  };

  return (
    <div className="debt-financing-advisory-wrapper">
      <div className="debt-financing-advisory-heading-container">
        <h1 className="debt-financing-advisory-heading">
          Debt Financing and Management Advisory
        </h1>
      </div>
      <div className="inner-width">
        <div className="debt-financing-advisory-content">
          <div className="debt-financing-advisory-left">
            <p>
              Managing debt can be complicated and demanding more so in the
              current market system. Therefore having the right type of debt
              financing to actualize your organization’s strategy has proven to
              be critical.
            </p>
            <p>
              Mcepha&Associates is able to help your company review viable
              alternatives to your particular circumstances.
            </p>
          </div>
          <div className="debt-financing-advisory-right">
            <img
              src="/mcephalogo.png"
              alt="Mcepha & Associates Logo"
              className="logo"
            />
            <div className="map-container">
              <iframe
                title="Thika Equity Plaza"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.7407821071495!2d37.06741401544776!3d-1.0410545618454946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10fd47d62cf9%3A0xacc93d24407a48e5!2sEquity%20Plaza%2C%20Thika!5e0!3m2!1sen!2ske!4v1659557445961!5m2!1sen!2ske"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <button
                className="view-larger-map-button"
                onClick={openLargerMap}
              >
                View Larger Map
              </button>
            </div>
            <div className="location-details">
              <p>
                <strong>Mcepha & Associates</strong>
              </p>
              <p>Thika, Equity Plaza Building</p>
              <p>HEAD OFFICE; 5TH FLOOR EQUITY PLAZA</p>
              <p>BIASHARA STREET</p>
              <p>Tel: +254 721-271910/733-997933</p>
              <p>THIKA – KENYA</p>
              <p>
                Emails:{" "}
                <a href="mailto:info.mcepha@gmail.com">info.mcepha@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtFinancingAndManagementAdvisory;

import React from "react";
import "./GovernanceRiskCompliance.css";

const GovernanceRiskCompliance = () => {
  const openLargerMap = () => {
    window.open(
      "https://www.google.com/maps?q=Equity+Plaza,+Thika,+Kenya",
      "_blank"
    );
  };

  return (
    <div className="governance-risk-compliance-wrapper">
      <div className="title">Governance, Risk and Compliance</div>
      <div className="content">
        <div className="left-side">
          <p>
            Mcepha&Associates Governance, Risk and Compliance services help our
            clients in Kenya tackle issues such as Enterprise risk management,
            Corporate governance, and effective corporate compliance.
          </p>
        </div>
        <div className="right-side">
          <img
            src="/mcephalogo.png"
            alt="Mcepha & Associates Logo"
            className="logo"
          />
          <div className="map-container">
            <iframe
              title="Mcepha & Associates"
              src="https://www.google.com/maps/d/embed?mid=1lAf8vnKS9o58Ztb4KiHIbFYmyduEdT8&ehbc=2E312F"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <button className="view-larger-map-button" onClick={openLargerMap}>
              View Larger Map
            </button>
            <div className="location-details">
              <p>
                <strong>Mcepha & Associates</strong>
              </p>
              <p>CERTIFIED PUBLIC ACCOUNTANTS</p>
              <p>HEAD OFFICE; 5TH FLOOR EQUITY PLAZA</p>
              <p>BIASHARA STREET</p>
              <p>Tel: +254 721-271910/733-997933</p>
              <p>THIKA – KENYA</p>
              <p>Emails: info.mcepha@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernanceRiskCompliance;

// src/pages/OperationsImprovement.jsx
import React from "react";

import "./OperationsImprovement.css";

const OperationsImprovement = () => {
  const openLargerMap = () => {
    window.open(
      "https://www.google.com/maps?q=Equity+Plaza,+Thika,+Kenya",
      "_blank"
    );
  };

  return (
    <>
      <div className="operations-wrapper">
        <h1 className="page-title">Operations Improvement</h1>
        <div className="operations-content">
          <div className="operations-left">
            <p>
              A business plan is a tool that defines a new business, its
              product/ service offerings, its mode of revenue generation,
              management and staffing, financing, operations, and other factors
              crucial for long-term success. Start-ups create them as part of
              the business inception process while existing businesses often
              write them when changing strategies.
            </p>
            <p>
              The business-plan-writing process can also help a start-up
              identify weaknesses, misconceptions, or other details that might
              affect how a business has positioned itself.
            </p>
            <p>
              Business plans are usually required by start-ups seeking funding,
              whether from financial institutions or investors. However, since
              they serve as a solid business compass/roadmap, they are
              recommended for all start-ups and entities wishing to revitalize
              existing businesses.
            </p>
            <p>
              Mcepha&Associates advisory team has extensive experience in the
              formulation of viable business plans for all business sizes in
              Kenya.
            </p>
          </div>
          <div className="operations-right">
            <img
              src="/mcephalogo.png"
              alt="Mcepha & Associates Logo"
              className="logo"
            />
            <div className="map-container">
              <iframe
                title="Mcepha & Associates"
                src="https://www.google.com/maps/d/embed?mid=1EQyRfY9RSBmnkx0Ux7ODwMjTrkB_idg&ehbc=2E312F"
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
              <div className="location-details">
                <p>Mcepha & Associates</p>
                <p>Thika, Equity Plaza Building</p>
              </div>
            </div>
            <div className="contact-details">
              <p>
                Mcepha & Associates
                <br />
                CERTIFIED PUBLIC ACCOUNTANTS
                <br />
                HEAD OFFICE; 5TH FLOOR EQUITY PLAZA
                <br />
                BIASHARA STREET
                <br />
                Tel: + 254 721-271910/733-997933
                <br />
                THIKA – KENYA
                <br />
                Emails: info.mcepha@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OperationsImprovement;

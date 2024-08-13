import React from "react";
import "./TechnologyAndSystemsManagement.css";

const TechnologyAndSystemsManagement = () => {
  const openLargerMap = () => {
    window.open(
      "https://www.google.com/maps?q=Equity+Plaza,+Thika,+Kenya",
      "_blank"
    );
  };

  return (
    <div className="technology-systems-management-wrapper">
      <div className="title">Technology and Systems Advisory</div>
      <div className="content">
        <div className="left-side">
          <p>
            The technology and system advisory services offered at
            Mcepha&Associates help our clients utilise information technology
            and business systems to bolster their competitive advantage, improve
            efficiency, control risks and reduce operational costs. The
            Mcepha&Associates advisory team in Kenya is skilled in IT strategic
            planning, service management, information risk management and also
            enterprise applications.
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
              src="https://www.google.com/maps/d/embed?mid=1EQyRfY9RSBmnkx0Ux7ODwMjTrkB_idg&ehbc=2E312F"
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
              <p>Mcepha & Associates</p>
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

export default TechnologyAndSystemsManagement;

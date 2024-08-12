import React from "react";
import "./HumanResourceManagement.css";

const HumanResourceManagement = () => {
  const openLargerMap = () => {
    window.open(
      "https://www.google.com/maps?q=Equity+Plaza,+Thika,+Kenya",
      "_blank"
    );
  };

  return (
    <div className="human-resource-management-wrapper">
      <div className="human-resource-management-content">
        {/* Left side - Human Resource Management Content */}
        <div className="human-resource-management-left">
          <h2>Human Resource Management</h2>
          <p>
            Human resource management (HRM) is a key pillar in any organization
            which needs serious and critical attention. The Mcepha&Associates
            team in Kenya can assist you in aligning with HRM best practices
            designed to maximize employee performance in line with your
            strategic objectives.
          </p>
          <p>
            Mcepha&Associates advisory team has extensive experience in the
            formulation of viable business plans for all business sizes in
            Kenya.
          </p>
        </div>

        {/* Right side - Google Map and Contact Details */}
        <div className="human-resource-management-right">
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
              <p>Thika, Equity Plaza Building</p>
              <p>CERTIFIED PUBLIC ACCOUNTANTS</p>
              <p>HEAD OFFICE; 5TH FLOOR EQUITY PLAZA</p>
              <p>BIASHARA STREET</p>
              <p>Tel: +254 721-271910 / 733-997933</p>
              <p>THIKA – KENYA</p>
              <p>Emails: info.mcepha@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HumanResourceManagement;

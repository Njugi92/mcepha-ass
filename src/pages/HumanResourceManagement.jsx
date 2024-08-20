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
      {/* Title Section */}
      <div className="title">Human Resource Management</div>

      <div className="human-resource-management-content">
        {/* Left side - Human Resource Management Content */}
        <div className="human-resource-management-left">
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
          <img
            src="/mcephalogo.png"
            alt="Mcepha & Associates Logo"
            className="logo"
          />
          <div className="map-container">
            <iframe
              title="Mcepha & Associates"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1653894412675!2d37.0728851!3d-1.0365746999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4f0022be22c9%3A0x3c072f9805fa5a4e!2sMcepha%20%26%20Associates!5e0!3m2!1sen!2ske!4v1724116505063!5m2!1sen!2ske"
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

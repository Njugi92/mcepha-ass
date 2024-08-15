import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./BusinessAdvisory.css";

const BusinessAdvisory = () => {
  const openLargerMap = () => {
    window.open(
      "https://www.google.com/maps?q=Equity+Plaza,+Thika,+Kenya",
      "_blank"
    );
  };

  const descriptions = [
    "Operations and Process Improvement",
    "Human Resource Management",
    "Strategic Planning and Management",
    "Technology and System Advisory",
    "Governance Risk and Compliance",
    "Enterprise Performance Management",
    "Due Diligence Reports",
    "Corporate Finance Advisory",
    "Receivables Management", // Added link
    "Independent Business Reviews",
    "Debt Financing and Management Advisory",
    "Controlling Costs and Increasing Profitability",
  ];

  return (
    <section className="business-advisory-wrapper">
      <div className="inner-width">
        <div className="business-advisory-content">
          <div className="business-advisory-left">
            {descriptions.map((description, index) => (
              <div key={index} className="business-advisory-item">
                <img
                  src="./business-image-1.png"
                  alt={description}
                  className="business-advisory-image"
                />
                {description === "Operations and Process Improvement" ? (
                  <RouterLink
                    to="/businessadvisory/operations-improvement"
                    className="business-advisory-link"
                  >
                    {description}
                  </RouterLink>
                ) : description === "Human Resource Management" ? (
                  <RouterLink
                    to="/businessadvisory/human-resource-management"
                    className="business-advisory-link"
                  >
                    {description}
                  </RouterLink>
                ) : description === "Technology and System Advisory" ? (
                  <RouterLink
                    to="/businessadvisory/technologyandsystemsmanagement"
                    className="business-advisory-link"
                  >
                    {description}
                  </RouterLink>
                ) : description === "Governance Risk and Compliance" ? (
                  <RouterLink
                    to="/businessadvisory/governanceriskcompliance"
                    className="business-advisory-link"
                  >
                    {description}
                  </RouterLink>
                ) : description === "Enterprise Performance Management" ? (
                  <RouterLink
                    to="/businessadvisory/enterpriseperformancemanagement"
                    className="business-advisory-link"
                  >
                    {description}
                  </RouterLink>
                ) : description === "Due Diligence Reports" ? (
                  <RouterLink
                    to="/businessadvisory/duediligencereports"
                    className="business-advisory-link"
                  >
                    {description}
                  </RouterLink>
                ) : description === "Corporate Finance Advisory" ? (
                  <RouterLink
                    to="/businessadvisory/corporatefinanceadvisory"
                    className="business-advisory-link"
                  >
                    {description}
                  </RouterLink>
                ) : description === "Receivables Management" ? (
                  <RouterLink
                    to="/businessadvisory/receivablesmanagement"
                    className="business-advisory-link"
                  >
                    {description}
                  </RouterLink>
                ) : (
                  <a
                    href={`#${description.split(" ").join("-").toLowerCase()}`}
                    className="business-advisory-link"
                  >
                    {description}
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="business-advisory-right">
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
                  <a href="mailto:info.mcepha@gmail.com">
                    info.mcepha@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="menu-items">
              <ul>
                <li>
                  <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                  <RouterLink to="/#about">About Us</RouterLink>
                </li>
                <li>
                  <RouterLink to="/#values">Our Values</RouterLink>
                </li>
                <li>
                  <RouterLink to="/#contact">Contact Us</RouterLink>
                </li>
                <li>
                  <RouterLink to="/#getstarted">Get Started</RouterLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAdvisory;

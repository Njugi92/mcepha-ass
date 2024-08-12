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
    "Receivables Management",
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
                    to="/operations-improvement"
                    className="business-advisory-link"
                  >
                    {description}
                  </RouterLink>
                ) : description === "Human Resource Management" ? (
                  <RouterLink
                    to="/human-resource-management"
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

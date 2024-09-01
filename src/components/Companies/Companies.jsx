import React from "react";
import "./Companies.css";

const Companies = () => {
  // Functions to handle clicks on the images
  const handleICPAKClick = () => {
    window.open("https://www.icpak.com", "_blank");
  };

  const handleIFRSClick = () => {
    window.open("https://www.ifrs.org", "_blank");
  };

  const handleIIAWebsiteClick = () => {
    window.open("https://www.theiia.org", "_blank");
  };

  const handleKRAClick = () => {
    window.open("https://www.kra.go.ke", "_blank");
  };

  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img
          src="./camp1.png"
          alt="ICPAK"
          onClick={handleICPAKClick}
          className="clickable"
        />
        <img
          src="./camp2.png"
          alt="IFRS"
          onClick={handleIFRSClick}
          className="clickable"
        />
        <img
          src="./camp3.png"
          alt="Institute of Internal Auditors"
          onClick={handleIIAWebsiteClick}
          className="clickable"
        />
        <img
          src="./camp4.jpg"
          alt="Kenya Revenue Authority"
          onClick={handleKRAClick}
          className="clickable"
        />
      </div>
    </section>
  );
};

export default Companies;

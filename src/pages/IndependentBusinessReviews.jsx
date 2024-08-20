import React from "react";
import { Link as RouterLink } from "react-router-dom";
import "./IndependentBusinessReviews.css";

const IndependentBusinessReviews = () => {
  const openLargerMap = () => {
    window.open(
      "https://www.google.com/maps?q=Equity+Plaza,+Thika,+Kenya",
      "_blank"
    );
  };

  return (
    <section className="independent-business-reviews-wrapper">
      <div className="independent-business-reviews-heading-container">
        <h1 className="independent-business-reviews-heading">
          Independent Business Reviews
        </h1>
      </div>
      <div className="inner-width">
        <div className="independent-business-reviews-content">
          <div className="independent-business-reviews-left">
            <p>
              When an entity is not performing well or is in dire straits and at
              the risk of collapse, The Mcepha&Associates team in Kenya provides
              custom independent business reviews for the situation at hand.
              These services aim to get a clear understanding of the current
              position and the best mitigation options going forward.
            </p>
          </div>
          <div className="independent-business-reviews-right">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndependentBusinessReviews;

import React from "react";
import "./ReceivablesManagement.css";

const ReceivablesManagement = () => {
  const openLargerMap = () => {
    window.open(
      "https://www.google.com/maps?q=Equity+Plaza,+Thika,+Kenya",
      "_blank"
    );
  };

  return (
    <>
      <div className="receivables-management-wrapper">
        <div className="title-section">
          <h1>Receivables Management</h1>
        </div>
        <div className="content-wrapper">
          <div className="left-side">
            <p>
              Receivables management is a key aspect of working capital. The
              objectives of Accounts receivable management is to be able to know
              the optimum level of trade credit to offer to customers and manage
              that credit. The Mcepha&Associates team in Kenya is able to help
              our clients optimize on this.
            </p>
          </div>
          <div className="right-side">
            <div className="logo-image">
              <img
                src="/mcephalogo.png"
                alt="Mcepha & Associates"
                className="logo-image-img"
              />
            </div>
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
            </div>
            <div className="contact-details">
              <p>
                <strong>Mcepha & Associates</strong>
                <br />
                CERTIFIED PUBLIC ACCOUNTANTS
                <br />
                HEAD OFFICE; 5TH FLOOR EQUITY PLAZA
                <br />
                BIASHARA STREET
                <br />
                Tel: +254 721-271910/733-997933
                <br />
                THIKA – KENYA
                <br />
                Emails:{" "}
                <a href="mailto:info.mcepha@gmail.com">info.mcepha@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceivablesManagement;

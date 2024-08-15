import React from "react";
import "./DueDiligenceReports.css";

const DueDiligenceReports = () => {
  return (
    <div className="due-diligence-reports-wrapper">
      <header className="due-diligence-title">Due Diligence Reports</header>
      <main className="due-diligence-content">
        <div className="left-content">
          <p>
            Due diligence is a process of enquiry and investigation made by a
            prospective buyer in order to confirm that they are buying what they
            think they are buying and fully understand exactly what they are
            buying.
          </p>
          <p>
            The better the due diligence, the more buyers know about a target
            and therefore the more they know about the immediate risks they are
            taking on. Therefore, due diligence allows an acquirer to:
          </p>
          <ul>
            <li>
              Identify issues which feed into price negotiations, and hence
              reduce the risk of paying excessively;
            </li>
            <li>
              Mitigate risk in the deal by identifying areas where legal
              protection ought to be sought.
            </li>
          </ul>
          <p>
            Due diligence is an aid to working out what contractual protection
            is required from the seller and what risks the buyer should steer
            away from completely.
          </p>
          <p>
            Mcepha&Associates advisory team has extensive experience in due
            diligence services in Kenya for both voluntary and involuntary
            investigations.
          </p>
        </div>

        <div className="right-content">
          <img
            src="/mcephalogo.png"
            alt="Mcepha & Associates Logo"
            className="logo"
          />
          <div className="map-container">
            <iframe
              title="Thika Equity Plaza"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3167.7407821071495!2d37.06741401544776!3d-1.0410545618454946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10fd47d62cf9%3A0xacc93d24407a48e5!2sEquity%20Plaza%2C%20Thika!5e0!3m2!1sen!2ske!4v1659557445961!5m2!1sen!2ske"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <a
              href="https://www.google.com/maps/place/Equity+Plaza/@-1.0410546,37.067414,15z/data=!3m1!4b1!4m8!3m7!1s0x182f10fd47d62cf9:0xacc93d24407a48e5!5m2!4m1!1i2!8m2!3d-1.0410546!4d37.067414"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Larger Map
            </a>
          </div>
          <div className="contact-info">
            <p>
              <strong>Mcepha & Associates</strong>
            </p>
            <p>CERTIFIED PUBLIC ACCOUNTANTS</p>
            <p>HEAD OFFICE; 5TH FLOOR EQUITY PLAZA</p>
            <p>BIASHARA STREET</p>
            <p>Tel: +254 721-271910/733-997933</p>
            <p>THIKA – KENYA</p>
            <p>
              Emails:{" "}
              <a href="mailto:info.mcepha@gmail.com">info.mcepha@gmail.com</a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DueDiligenceReports;

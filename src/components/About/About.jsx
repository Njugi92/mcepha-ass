import React from "react";
import "./About.css";
const About = ({ setPlayState }) => {
  return (
    <div className="about" id="About">
      <div className="about-left">
        <img src="./about1.jpg" alt="" className="about-img" />
        <img
          src="./play-icon.png"
          alt=""
          className="play-icon"
          onClick={() => {
            setPlayState(true);
          }}
        />
      </div>
      <div className="about-right">
        <h2>About Our Firm</h2>
        <h3>Mcepha & Associates, Certified Public Accountants of Kenya</h3>
        <p>
          we are a firm of professional Auditors, Accountants, Tax, Financial
          and Management Consultants, with the partners and associates having
          been in practice for over 10 years and having dealt with the various
          sectors of economy in the Republic of Kenya.
        </p>
        <p>
          The firm has 3 Partners, and other on call part time consultants
          within the pool of its experts. We offer a wide range of professional
          services starting with Statutory and financial Audits, value for money
          audits, economic and social viability studies, feasibility
          surveys/studies, Projects audits and evaluations, monitoring and
          results measurements,financial management and project development
          consultancies, capacity building / training, business investment
          advisory services and taxation across the sectors of the economy.
        </p>
        <p>
          Mcepha & Associates boast of its relationships and support of over 5
          (Five) consulting and on call consulting Associate Firms and
          Professional Consultants, with diverse accounting, audit and financial
          backgrounds. The firm has working relationship or understanding
          professionals in business and economic spheres of disciplines to
          deliver, on joint ventures/Consortiums, the various services that
          clients may need. This in effect gives us diversity on our capacity
          for services coverage we can offer.
        </p>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper" id="Hero">
      <div className="paddings innerWidth flexCenter hero-container">
        {/*left side */}
        <div className="flexColstart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Mcepha & Associates <br />
              CERTIFIED PUBLIC <br />
              ACCOUNTANTS
            </motion.h1>
          </div>

          <div className="flexColStart hero-des">
            <span className="secondaryText">
              HEAD OFFICE: 5TH FLOOR EQUITY PLAZA BIASHARA STREET
            </span>
            <span className="secondaryText">
              Tel: + 254 721-271910/733-997933 THIKA – KENYA
            </span>
            <span className="secondaryText">Emails: info.mcepha@gmail.com</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Successful Jobs</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="flexCenter hero-right">
          <motion.div
            className="image-container"
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
          >
            <img src="./equityplza3.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

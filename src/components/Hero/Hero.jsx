import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Use RouterLink for navigation
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const slides = [
  {
    title: "MCEPHA & ASSOCIATES CERTIFIED PUBLIC ACCOUNTANTS",
    description:
      "HEAD OFFICE: 5TH FLOOR EQUITY PLAZABIASHARA STREET Tel: + 254721-271910/733-997933 THIKA – KENYA Emails: info.mcepha@gmail.com",
    buttonLink: "/",
    imageUrl: "./bgeqtyplza.png",
  },
  {
    title: "Expert Accountancy Services",
    description:
      "Our team of experienced accountants provides top-notch services to help you manage your finances effectively. We offer tailored solutions to meet the unique needs of your business.",
    buttonLink: "/accountancy",
    imageUrl: "./bgaccounts.png",
  },
  {
    title: "Tax Services",
    description:
      "Understanding your tax obligations is crucial for proper financial planning. Use our tax calculator to determine your monthly and annual tax liabilities on your income.",
    buttonLink: "/tax",
    imageUrl: "./bgtaxo.png",
  },
  {
    title: "Audit Services",
    description:
      "In accordance with statutory requirements and International Accounting Standards (IAS) as well as Risk Assessment Audits.",
    buttonLink: "/audit",
    imageUrl: "./bgauditor.png",
  },
  {
    title: "Business Advisory Services",
    description:
      "We offer business advisory services to help you optimize operations, manage risks, and improve performance with tailored, strategic solutions.",
    buttonLink: "/business-advisory",
    imageUrl: "./bgbizadvice.png",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 12000); // Change slide every 12 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <section className="hero-wrapper" id="Hero">
      <div
        className="hero-background"
        style={{
          backgroundImage: `url(${slides[currentSlide].imageUrl})`,
        }}
      >
        <div className="paddings innerWidth flexStart hero-container">
          {/* Left side */}
          <div className="flexColstart hero-left">
            <motion.h1
              key={currentSlide}
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="hero-title"
            >
              {slides[currentSlide].title}
            </motion.h1>

            <motion.p
              key={slides[currentSlide].description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="hero-description"
            >
              {slides[currentSlide].description}
            </motion.p>

            <Link to={slides[currentSlide].buttonLink}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#00008B", // Dark blue on hover
                }}
                transition={{
                  duration: 0.3,
                }}
                className="button learn-more"
              >
                Learn More
              </motion.button>
            </Link>
          </div>

          {/* Right side (Static elements like search bar and stats) */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <span></span>
              </span>
              <span className="secondaryText"></span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <span></span>
              </span>
              <span className="secondaryText"></span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <span></span>
              </span>
              <span className="secondaryText"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

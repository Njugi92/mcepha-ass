import React from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  return (
    <section className="h-wrapper contain dark-nav">
      <div className=" flexCenter paddings innerWidth h-container">
        <img src="./mcephalogo.png" alt="logo" width={100} />

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link spy={true} to="Hero" smooth={true}>
              Home
            </Link>
            <Link spy={true} to="Value" smooth={true}>
              Our Values
            </Link>
            <Link spy={true} to="About" smooth={true}>
              About Us
            </Link>
            <Link spy={true} to="Services" smooth={true}>
              Services
            </Link>
            <Link spy={true} to="Testimonial" smooth={true}>
              Testimonials
            </Link>
            <Link spy={true} to="GetStarted" smooth={true}>
              Get Started
            </Link>

            <button className="button">
              <Link spy={true} to="Contact" smooth={true}>
                Contact
              </Link>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;

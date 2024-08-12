import React, { useState, useEffect } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const location = useLocation();

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".h-wrapper");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="h-wrapper contain dark-nav">
      <div className="flexCenter paddings innerWidth h-container">
        <RouterLink to="/">
          <img src="./mcephalogo.png" alt="logo" width={100} />
        </RouterLink>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
            setDropdownOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            {isHomePage ? (
              <>
                <ScrollLink spy={true} to="Hero" smooth={true}>
                  Home
                </ScrollLink>
                <ScrollLink spy={true} to="Value" smooth={true}>
                  Our Values
                </ScrollLink>
                <ScrollLink spy={true} to="About" smooth={true}>
                  About Us
                </ScrollLink>
                <div
                  className="services-dropdown"
                  onMouseEnter={() => setDropdownOpened(true)}
                  onMouseLeave={() => setDropdownOpened(false)}
                >
                  <span>Services</span>
                  {dropdownOpened && (
                    <div className="dropdown-content">
                      <RouterLink to="/accountancy">Accountancy</RouterLink>
                      <RouterLink to="/tax">Tax</RouterLink>
                      <RouterLink to="/audit">Audit</RouterLink>
                      <RouterLink to="/business-advisory">
                        Business Advisory
                      </RouterLink>
                    </div>
                  )}
                </div>
                <ScrollLink spy={true} to="Testimonial" smooth={true}>
                  Testimonials
                </ScrollLink>
                <ScrollLink spy={true} to="GetStarted" smooth={true}>
                  Get Started
                </ScrollLink>
                <button className="button">
                  <ScrollLink spy={true} to="Contact" smooth={true}>
                    Contact
                  </ScrollLink>
                </button>
              </>
            ) : (
              <>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/">Our Values</RouterLink>
                <RouterLink to="/">About Us</RouterLink>
                <div
                  className="services-dropdown"
                  onMouseEnter={() => setDropdownOpened(true)}
                  onMouseLeave={() => setDropdownOpened(false)}
                >
                  <span>Services</span>
                  {dropdownOpened && (
                    <div className="dropdown-content">
                      <RouterLink to="/accountancy">Accountancy</RouterLink>
                      <RouterLink to="/tax">Tax</RouterLink>
                      <RouterLink to="/audit">Audit</RouterLink>
                      <RouterLink to="/business-advisory">
                        Business Advisory
                      </RouterLink>
                    </div>
                  )}
                </div>
                <RouterLink to="/">Testimonials</RouterLink>
                <RouterLink to="/">Get Started</RouterLink>
                <button className="button">
                  <RouterLink to="/">Contact</RouterLink>
                </button>
              </>
            )}
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

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";
import logo from "./images/masked-logo.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar_container">
          <Link
            to="/home"
            className="navbar_logo"
            onClick={closeMobileMenu}
            smooth={true}
            duration={750}
          >
            <img className="sidebar__logo1" src={logo} alt="Logo" />
            Masked
          </Link>
          <div className="menu_icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav_menu active" : "nav_menu"}>
            <li className="nav_item">
              <Link
                to="/home"
                className="nav_links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={600}
              >
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/guide"
                className="nav_links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={700}
              >
                Reporter's Guide
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/contact"
                className="nav_links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={1000}
              >
                Contact Us
              </Link>
            </li>
            <li className="nav_item">
              <Link
                to="/awareness"
                className="nav_links"
                onClick={closeMobileMenu}
                smooth={true}
                duration={1000}
              >
                Awareness
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// {button && <Button buttonStyle='btn--outline'>Order Now</Button>}

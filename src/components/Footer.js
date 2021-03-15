import React from "react";
import "./Footer.css";
import logo from "./images/masked-logo.svg";

function Footer() {
  return (
    <div className="the_end">
      <div className="footer__logo">
        <img className="mask" src={logo}></img>
      </div>
      <div className="footer__copyright">
        <p>
          <span>&#169;</span> 2021 Masked
        </p>
      </div>
      <div className="footer__TC">
        *T<span>&#38;</span>C Apply
      </div>
    </div>
  );
}

export default Footer;

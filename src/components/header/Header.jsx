import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muhammad Talha</h1>
        <h5 className="text-light">FRONT-END-(REACT-JS)-DEVELOPER</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src="../../../public/Me.jpg" alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;

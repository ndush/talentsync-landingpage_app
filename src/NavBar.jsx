import React from "react";
import chevronDownIcon from "./assets/chevron-down.svg";
import logo from "./assets/Group.svg";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={logo} alt="ClearLink Logo" className="logo" />
        <div>
          <span className="logo-text">ClearLink</span>
          <span className="dot">.</span>
        </div>
      </div>
      <div className="nav-links">
        <div className="link">
          <span className="link-text">Products</span>
          <img src={chevronDownIcon} alt="Chevron Down" className="icon" />
        </div>
        <div className="link">
          <span className="link-text">Solutions</span>
          <img src={chevronDownIcon} alt="Chevron Down" className="icon" />
        </div>
        <div className="link">
          <span className="link-text">Resources</span>
          <img src={chevronDownIcon} alt="Chevron Down" className="icon" />
        </div>
        <div className="link">Pricing</div>
      </div>
      <div className="buttons">
        <div className="sales-button">
          <span className="sales-button-text">Talk to sales</span>
        </div>
        <div className="signup-button">
          <span className="signup-button-text">Sign up for free</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

import React from "react";
import "./index.css"; 


import SquareIcon from "./assets/footer/in.svg";
import RectangleIcon from "./assets/footer/ln.svg";
import LargeRectangleIcon from "./assets/footer/git.svg";
import ComplexIcon from "./assets/footer/tw.svg";

function FooterComponent() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="left-content">
          <div className="footer-text">
            © 2023 ClearLink. All rights reserved.
          </div>
        </div>
        <div className="right-content">
          <div className="footer-icons">
            <img src={SquareIcon} alt="Square Icon" className="icon" />
            <img src={RectangleIcon} alt="Rectangle Icon" className="icon" />
            <img
              src={LargeRectangleIcon}
              alt="Large Rectangle Icon"
              className="icon"
            />
            <img
              src={ComplexIcon}
              alt="Complex Icon"
              className="icon complex-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterComponent;

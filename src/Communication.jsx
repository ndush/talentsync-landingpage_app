import React from "react";
import communicationImage from "./assets/communication/screen.png"; 

const Communication = () => {
  return (
    <div className="communication-container">
      <div className="communication-content">
        <div className="communication-text">
          Ready to clear the path to perfect communication?
        </div>
        <div className="communication-list">
          <div className="communication-item">
            <div className="communication-icon">
              <div className="communication-icon-inner">
                <div></div>
              </div>
            </div>
            <div className="communication-item-text">30 days free trial</div>
          </div>
          <div className="communication-item">
            <div className="communication-icon">
              <div className="communication-icon-inner">
                <div></div>
              </div>
            </div>
            <div className="communication-item-text">Cancel at any time</div>
          </div>
          <div className="communication-item">
            <div className="communication-icon">
              <div className="communication-icon-inner">
                <div></div>
              </div>
            </div>
            <div className="communication-item-text">
              Access to all features
            </div>
          </div>
          <div className="communication-item">
            <div className="communication-icon">
              <div className="communication-icon-inner">
                <div></div>
              </div>
            </div>
            <div className="communication-item-text">
              Personalized onboarding
            </div>
          </div>
        </div>
        <div className="communication-buttons">
          <div className="communication-button sales-button">Talk to sales</div>
          <div className="communication-button trial-button">
            Start your free trial
          </div>
        </div>
      </div>
      <div className="communication-image">
        <div className="communication-image">
          <img src={communicationImage} alt="Communication"  />
        </div>
      </div>
      
    </div>
  );
};

export default Communication;

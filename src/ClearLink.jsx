import React from "react";
import "./index.css"; 
import CalendarImage from "./assets/clearlink/calendar.svg";
import HandDrawnArrowImage from "./assets/clearlink/Hand-drawn arrow.svg";
import LockUnlockedImage from "./assets/clearlink/lock-unlocked-04.svg";
import RecordingImage from "./assets/clearlink/recording-01.svg";
import RectangleImage from "./assets/clearlink/Rectangle 1.png";
import VideoRecorderImage from "./assets/clearlink/video-recorder.svg";

const ClearLink = () => {
  return (
    <div className="clearlink-container">
      <div className="clearlink-title-container">
        <div className="clearlink-title">The ClearLink Advantage</div>
      </div>
      <div className="clearlink-subtitle">
        <div className="clearlink-subtitle-text">Why choose ClearLink?</div>
      </div>
      <div className="clearlink-content-grid">
        <div className="clearlink-description">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </div>
        <div className="clearlink-handdraw">
          <img src={HandDrawnArrowImage} alt="Hand-Drawn Arrow" />
        </div>
      </div>

      <div className="clearlink-feature-container">
        <div className="clearlink-features">
          <div className="clearlink-feature">
            <div className="clearlink-feature-icon">
              <div className="clearlink-feature-icon-inner">
                <img src={VideoRecorderImage} alt="Video Recorder" />
              </div>
            </div>
            <div className="clearlink-feature-text-container">
              <div className="clearlink-feature-title">
                Crystal-clear HD video
              </div>
              <div className="clearlink-feature-description">
                No more pixelation or blurriness – just stunning, lifelike
                clarity that brings your team closer in meetings.
              </div>
            </div>
          </div>
          <div className="clearlink-feature">
            <div className="clearlink-feature-icon">
              <div className="clearlink-feature-icon-inner">
                <img src={CalendarImage} alt="Calendar" />
              </div>
            </div>
            <div className="clearlink-feature-text-container">
              <div className="clearlink-feature-title">
                Scheduling made easy
              </div>
              <div className="clearlink-feature-description">
                Streamline your agenda with ClearLink's intuitive scheduling.
                Set up meetings, send invitations, and receive reminders in one
                place.
              </div>
            </div>
          </div>
          <div className="clearlink-feature">
            <div className="clearlink-feature-icon">
              <div className="clearlink-feature-icon-inner">
                <img src={RecordingImage} alt="Recording" />
              </div>
            </div>
            <div className="clearlink-feature-text-container">
              <div className="clearlink-feature-title">
                Noise-canceling audio
              </div>
              <div className="clearlink-feature-description">
                Say goodbye to distractions with our advanced audio tech for
                crisp, interruption-free conversations.
              </div>
            </div>
          </div>
          <div className="clearlink-feature">
            <div className="clearlink-feature-icon">
              <div className="clearlink-feature-icon-inner">
                <img src={LockUnlockedImage} alt="Lock Unlocked" />
              </div>
            </div>
            <div className="clearlink-feature-text-container">
              <div className="clearlink-feature-title">Bank-grade security</div>
              <div className="clearlink-feature-description">
                Your privacy is our priority with bank-grade security protocols
                safeguarding your meetings and data from unwanted intruders.
              </div>
            </div>
          </div>
        </div>
        <div className="clearlink-rectangle">
          <img src={RectangleImage} alt="Rectangle" />
        </div>
      </div>
    </div>
  );
};

export default ClearLink;

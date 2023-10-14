import React from "react";
import image8 from "./assets/image 8.png";
import image21 from "./assets/image 21.png";
import image72 from "./assets/image 72.png";
import image100 from "./assets/image 100.png";
import image103 from "./assets/image 103.png";
import image108 from "./assets/image 108.png";
const VideoComponent = () => {
  return (
    <div className="video-container">
      <div className="video-content">
        <div className="video-title">
          Uniting the world,
          <br />
          one video call at a time
        </div>
        <div className="video-description">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </div>
        <div className="video-buttons">
          <div className="start-trial-button">Start your free trial</div>
          <div className="ai-assistant-button">Discover AI assistant</div>
        </div>
        <div className="video-rating">
          <div className="star-rating">
            <span className="star-icon">★</span>
            <span className="star-rating-text">5.0</span>
          </div>
          <div className="review-count">from 3,000+ reviews</div>
        </div>
      </div>
      <div className="video-images">
        <img src={image8} alt="Image 8" />
        <img src={image21} alt="Image 21" />
        <img src={image72} alt="Image 72" />
        <img src={image100} alt="Image 100" />
        <img src={image103} alt="Image 103" />
        <img src={image108} alt="Image 108" />
      </div>
    </div>
  );
};

export default VideoComponent;

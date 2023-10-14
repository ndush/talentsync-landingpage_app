import React from "react";
import ShopifyImage from "./assets/socials/Shopify.com svg.svg";
import CoinbaseImage from "./assets/socials/Coinbase svg.svg";
import DropboxImage from "./assets/socials/Dropbox svg.svg";
import IntercomImage from "./assets/socials/Intercom svg.svg";
import MarvelImage from "./assets/socials/Marvel svg.svg";
import AutomatticImage from "./assets/socials/Automattic svg.svg";

const SocialProofSection = () => {
  return (
    <div className="social-proof-container">
      <div className="social-proof-content">
        <div className="social-proof-text">
          Join 1,500+ companies already video conferencing the ClearLink way
        </div>
        <div className="social-images">
          <img src={ShopifyImage} alt="Shopify" />
          <img src={CoinbaseImage} alt="Coinbase" />
          <img src={DropboxImage} alt="Dropbox" />
          <img src={IntercomImage} alt="Intercom" />
          <img src={MarvelImage} alt="Video Recorder" />
          <img src={AutomatticImage} alt="Automattic" />
        </div>
        
      </div>
    </div>
  );
};

export default SocialProofSection;

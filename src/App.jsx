
import React from "react";
import "./index.css";
import NavBar from "./NavBar";
import VideoComponent from "./VideoComponent";
import SocialProofSection from "./SocialProofSection";
import ClearLink from "./ClearLink";
import Testimonial from "./Testimonial";
import FAQS from "./FAQS";
import Communication from "./Communication";
import FooterComponent from "./FooterComponent";



function App() {


  return (
    <>
      <div>
        <NavBar />
        <VideoComponent/>
        <SocialProofSection/>
        <ClearLink/>
        <Testimonial/>
        <FAQS/>
        <Communication/>
       <FooterComponent/>
      </div>
    </>
  );
}

export default App

import React from "react";
import "./index.css"; // Import your CSS file with styles

const FAQS = () => {
  return (
    <div className="faq-container">
      <div className="faq-header">
        <div className="faq-title">Support</div>
        <div className="faq-subtitle">FAQs</div>
        <div className="faq-answer">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </div>
      </div>

      <div className="faq-list">
        <div className="faq-item">
          <div className="faq-question">
            How many participants can join a ClearLink video conference?
          </div>
          <div className="faq-answer">
            ClearLink offers flexible meeting options. Depending on your
            subscription plan, you can host meetings with varying numbers of
            participants. Our plans are designed to accommodate small team
            collaborations and large-scale webinars, ensuring you have the right
            fit for your needs.
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            Can I use ClearLink on multiple devices?
          </div>
          <div className="faq-answer">
            Yes, you can use ClearLink on multiple devices. ClearLink provides
            multi-device support, allowing you to access your account and join
            meetings from various devices such as your computer, tablet, or
            smartphone.
          </div>
          <div className="faq-icon">
            <div className="faq-icon-inner"></div>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            How does ClearLink ensure the security of my video conferences?
          </div>
          <div className="faq-answer">
            ClearLink takes security seriously. We use robust encryption and
            security protocols to protect your video conferences. Our platform
            includes features like meeting passwords and waiting rooms to ensure
            only authorized participants can access your meetings.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            Do I need to download any software to use ClearLink?
          </div>
          <div className="faq-answer">
            No, you don't need to download any software to use ClearLink. It is
            a web-based platform that you can access directly from your web
            browser. This makes it easy to join meetings without the need for
            installations or downloads.
          </div>
        </div>
        <div className="faq-item">
          <div className="faq-question">
            What kind of customer support does ClearLink provide?
          </div>
          <div className="faq-answer">
            ClearLink offers a range of customer support options. You can
            contact our support team via chat, email, or phone. Our friendly and
            knowledgeable support agents are available to assist you with any
            questions or issues you may have.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQS;

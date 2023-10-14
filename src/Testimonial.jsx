import React from "react";
import AvatarImage from "./assets/testimonials/Avatar.png";
import TestimonialImage from "./assets/testimonials/A.png";
import TestimonialImage4 from "./assets/testimonials/D.png";
import TestimonialImage1 from "./assets/testimonials/B.png";
import TestimonialImage2 from "./assets/testimonials/C.png";
import TestimonialImage3 from "./assets/testimonials/E.png";

const Testimonial = () => {
  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="testimonial-text">
          <div className="testimonial-shapes">
            {/* Add shape elements here */}
          </div>
          <div className="testimonial-icons">
            {/* Add icon elements here */}
          </div>
          <div className="testimonial-text-description">
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </div>
          <div className="testimonial-author-info">
            <div className="testimonial-author">
              <div className="author-avatar">
                <img src={AvatarImage} alt="Sarah Thompson" />
                {/* Add author avatar elements here */}
              </div>
              <div className="author-details">
                <div className="author-name">Sarah Thompson</div>
                <div className="author-position">Project Manager, Shopify</div>
              </div>
            </div>
            <div className="social-icons">
              <div className="social-icon">
                <div className="icon-with-border">
                  <div className="icon-border"></div>
                </div>
              </div>
              <div className="social-icon">
                <div className="icon-with-border">
                  <div className="icon-border"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonial-images">
          <img
            className="testimonial-image-1"
            src={TestimonialImage}
            alt="Testimonial Image 1"
          />
          <img
            className="testimonial-image-2"
            src={TestimonialImage1}
            alt="Testimonial Image 2"
          />
          <img
            className="testimonial-image-3"
            src={TestimonialImage2}
            alt="Testimonial Image 3"
          />
          <img
            className="testimonial-image-4"
            src={TestimonialImage3}
            alt="Testimonial Image 4"
          />
          <img
            className="testimonial-image-5"
            src={TestimonialImage4}
            alt="Testimonial Image 5"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

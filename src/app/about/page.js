"use client";
// import React, { useState,useRef } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-solid-svg-icons";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper.min.css";
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import "swiper/components/effect-coverflow/effect-coverflow.min.css";
// import SlideNavButtons from './slideNavButtons';
import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import SlideNavButtons from './SlideNavButtons';
const contents = [
  {
    id: 1,
    name: "Andrew Chris",
    country: "Tunisia",
    rating: 4,
    content:
      "I had a fantastic experience with this company. Their team was professional, responsive, and went above to meet my needs.",
  },
  {
    id: 2,
    name: "Andrew Chris",
    country: "Tunisia",
    rating: 5,
    content:
      "I had a fantastic experience with this company. Their team was professional, responsive, and went above to meet my needs.",
  },
  {
    id: 3,
    name: "Andrew Chris",
    country: "Tunisia",
    rating: 5,
    content:
      "I had a fantastic experience with this company. Their team was professional, responsive, and went above to meet my needs.",
  },
  {
    id: 4,
    name: "Andrew Chris",
    country: "Tunisia",
    rating: 4,
    content:
      "I had a fantastic experience with this company. Their team was professional, responsive, and went above to meet my needs.",
  },
  {
    id: 5,
    name: "Andrew Chris",
    country: "Tunisia",
    rating: 3,
    content:
      "I had a fantastic experience with this company. Their team was professional, responsive, and went above to meet my needs.",
  },

  // Add more testimonial data here
];

const renderStars = (count) => {
  const stars = [];

  for (let i = 0; i < count; i++) {
    stars.push(
      <FontAwesomeIcon
        key={i}
        icon={faStar}
        style={{
          height: "20px",
          width: "20px",
          color: "#f8b45a",
          margin: "3px",
        }}
      />
    );
  }

  return stars;
};

const About = () => {
  const swiperRef = React.useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };
  
  return (
    <section>
      <div className="about">
        <h1>
          What Our Clients Say<br></br> About Us
        </h1>
        <p>
          We take pride in delivering exceptional services .<br></br> Here are
          some testimonials from our valued customers.
        </p>

        <div className="containerabout-wrapper">
          <Swiper
            centeredSlides={true} // Center the current slide
            grabCursor={true} // Change cursor to a grabbing hand on hover
            spaceBetween={15}
            loop={true}
            effect="coverflow" // Use the coverflow effect
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              480: { slidesPerView: 2 },
              740: { slidesPerView: 3 },
              1275: { slidesPerView: 4 },
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
          >
            
              {contents.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id}>
                  <div
                    className={`containerabout ${
                      activeSlide === index ? "centered-slide" : ""
                    }`}
                  >
                  <div className="stars-container">
                    {renderStars(testimonial.rating)}
                  </div>
                  <h5>{testimonial.content}</h5>
                  <br />
                  <h5>{testimonial.name}</h5>
                  <h6>Client from {testimonial.country}</h6>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <SlideNavButtons swiperRef={swiperRef} />
      </div>
    </section>
  );
};

export default About;

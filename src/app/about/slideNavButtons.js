// SlideNavButtons.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const SlideNavButtons = ({ swiperRef }) => {
  const handleNext = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef && swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  return (
    <div>
      {/* Utilisation des classes "btnabout" et "btnabout2" au lieu de "btnabout2" et "btnabout" */}
      <button className="btnabout" name="prev" onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} style={{ height: '14px', width: '14px' }} />
      </button>
      <button className="btnabout2" name="next" onClick={handleNext}>
        <FontAwesomeIcon icon={faArrowRight} style={{ height: '14px', width: '14px' }} />
      </button>
    </div>
  );
};

export default SlideNavButtons;

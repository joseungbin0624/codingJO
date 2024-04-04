// Carousel.js
import React, { useState } from 'react';
import '../styles/Carousel.scss';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === images.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-control prev" onClick={goToPrevious}>&lt;</button>
      {images.length > 0 && (
        <div className="carousel-slide">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} style={{ width: "100%", height: "500px", objectFit: "cover" }} />
        </div>
      )}
      <button className="carousel-control next" onClick={goToNext}>&gt;</button>
    </div>
  );
};

export default Carousel;

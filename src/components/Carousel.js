import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';
import Card from './Card'; // Card 컴포넌트 임포트

const Carousel = ({ items }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {items.map((item) => (
          <Card key={item.id} title={item.title} content={item.content} imageUrl={item.imageUrl} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;


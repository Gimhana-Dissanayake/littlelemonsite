import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./CarouselCustom.css";

const CarouselCustom = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="mb-3">
      <Carousel.Item>
        <div className="about__image about__image--one" alt="image" />
        <Carousel.Caption>
          <h3>Dine</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="about__image about__image--two" alt="image" />
        <Carousel.Caption>
          <h3>Enjoy</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="about__image about__image--three" alt="image" />
        <Carousel.Caption>
          <h3>Celebrate</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselCustom;

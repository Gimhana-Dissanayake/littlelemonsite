import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import specialImageOne from "../assets/special_one_img.jpg";
import specialImageTwo from "../assets/special_two_img.jpg";
import specialImageThree from "../assets/special_three_img.jpg";
import "./About.css";

const About = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section className="about pt-5">
      <Container>
        <p className="pb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <Carousel activeIndex={index} onSelect={handleSelect}>
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
      </Container>
    </section>
  );
};

export default About;

import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import WeeksSpecial from "../components/WeeksSpecial";
import CarouselCustom from "../components/CarouselCustom";

const Home = () => {
  return (
    <section className="home">
      <Container>
        <Hero />
        <WeeksSpecial />
        <CarouselCustom />
      </Container>
    </section>
  );
};

export default Home;

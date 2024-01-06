import React from "react";
import { Container } from "react-bootstrap";
import Hero from "../components/Hero";
import WeeksSpecial from "../components/WeeksSpecial";

const Home = () => {
  return (
    <section className="home">
      <Container>
        <Hero />
        <WeeksSpecial />
      </Container>
    </section>
  );
};

export default Home;

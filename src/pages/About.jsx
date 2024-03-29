import React from "react";
import { Container } from "react-bootstrap";
import "./About.css";
import Testimonials from "../components/Testimonials";

const About = () => {
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
      </Container>
      <Testimonials />
    </section>
  );
};

export default About;

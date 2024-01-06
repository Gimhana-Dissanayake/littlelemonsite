import React from "react";
import { Col, Row } from "react-bootstrap";
import heroImg from "../assets/hero_img.jpg";
import "./Hero.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <article className="hero">
      <Row>
        <Col md={6} xs={12}>
          <h1 className="hero__heading">Little Lemon</h1>
          <h3 className="hero__sub-heading">Chicago</h3>
          <p className="hero__description">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a moder twist
          </p>
          <Button
            title="Reserve a Table"
            className="hero__reserve-btn"
            onClick={() => {
              navigate("./booking");
            }}
          />
        </Col>
        <Col
          md={6}
          xs={12}
          className="hero__hero-img-container d-none d-md-block"
        >
          <img
            className="hero__hero-img"
            src={heroImg}
            width={260}
            alt="image"
          ></img>
        </Col>
      </Row>
    </article>
  );
};

export default Hero;

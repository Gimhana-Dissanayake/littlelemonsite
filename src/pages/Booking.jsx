import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Booking = (props) => {
  return (
    <header className="pt-4">
      <Container>
        <h1>Reservation | {props.step}</h1>
        <Outlet />
      </Container>
    </header>
  );
};

export default Booking;

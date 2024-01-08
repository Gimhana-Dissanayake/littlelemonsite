import React from "react";
import { Alert, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";

const Booking = (props) => {
  const variant =
    props.response?.type === "success"
      ? "success"
      : props.response?.type === "error"
      ? "danger"
      : "";

  return (
    <header className="pt-4">
      <Container>
        <header className="d-flex justify-content-between ">
          <h1>Reservation | {props.step}</h1>
          <Alert
            key={variant}
            variant={variant}
            className={`${!variant && "d-none"}`}
          >
            {props.response?.message}
          </Alert>
        </header>

        <Outlet />
      </Container>
    </header>
  );
};

export default Booking;

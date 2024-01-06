import React from "react";
import BookingForm from "../components/BookingForm";
import { Container } from "react-bootstrap";

const Booking = () => {
  return (
    <section className="booking">
      <Container>
        <BookingForm />
      </Container>
    </section>
  );
};

export default Booking;

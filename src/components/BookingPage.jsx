import React from "react";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  // TODO: Lift state up
  const [state, setState] = useState();

  return (
    <section>
      <BookingForm />
    </section>
  );
};

export default BookingPage;

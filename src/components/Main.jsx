import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import BookingPage from "./BookingPage";

const Main = () => {
  //TODO: STATE HERE

  const [availableTimes, setAvailableTimes] = useState();

  const updateTimes = () => {};

  const initializeTImes = () => {
    // TODO: reset avialble times
  };

  //use reducer function

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
    </main>
  );
};

export default Main;

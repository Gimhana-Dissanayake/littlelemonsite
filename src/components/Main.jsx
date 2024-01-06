import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Booking from "../pages/Booking";
import OrderOnline from "../pages/OrderOnline";

const Main = () => {
  //TODO: STATE HERE

  const [availableTimes, setAvailableTimes] = useState();

  const updateTimes = () => {};

  const initializeTImes = () => {
    // TODO: reset avialble times
  };

  //use reducer function

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/order-online" element={<OrderOnline />}></Route>
      </Routes>
    </main>
  );
};

export default Main;

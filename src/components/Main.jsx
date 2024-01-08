import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import OrderOnline from "../pages/OrderOnline";
import Reservation from "../pages/Reservation";

const Main = () => {
  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking/*" element={<Reservation />}></Route>
        <Route path="/order-online" element={<OrderOnline />}></Route>
      </Routes>
    </main>
  );
};

export default Main;

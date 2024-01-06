import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <Container>
      <footer className="footer text-white text-center pt-3">
        <div className="pb-2">
          <FaSquareFacebook size={30} />
          <FaSquareInstagram size={30} className="mx-2" />
          <FaSquareWhatsapp size={30} />
        </div>
        &copy; {new Date().getFullYear()} Little lemon
      </footer>
    </Container>
  );
};

export default Footer;

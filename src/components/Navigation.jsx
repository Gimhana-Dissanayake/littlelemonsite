import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Little Lemon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="ms-auto">
            <Nav.Link>
              <NavLink to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about">About</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/testimonials">Testimonials</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/booking">Booking</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/order-online">Order online</NavLink>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

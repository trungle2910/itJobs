import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbarr = () => {
  return (
    <Navbar variant="info" bg="dark" expand="lg">
      <Navbar.Brand className="mr-auto">
        <img src={logo} alt="CoderSchool" width="50px" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/login">
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navbarr;

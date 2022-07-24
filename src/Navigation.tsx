import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="primary" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://ytts-coaching.s3.us-east-2.amazonaws.com/YTTS-logos+2.JPEG"
            width={"45px"}
            height={"45px"}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#section-hero">Home</Nav.Link>
            <Nav.Link href="#section-description">Description</Nav.Link>
            <Nav.Link href="#section-trailer">Trailer</Nav.Link>
            <Nav.Link href="#section-showcase">Testimonials</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;

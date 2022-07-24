import React from "react";
import { Button, Container } from "react-bootstrap";

const Hero = () => {
  return (
    <section
      id="section-hero"
      className="text-center text-white d-flex justify-content-center align-items-center py-5"
    >
      <Container>
        <h1 className="display-1 text-primary text-upercase mt-5">YTTS</h1>
        <p className="display-4">Set goals and achieve together</p>
        <p className="lead">
          YTTS helps with the needs of high performance junior players on tennis tours
        </p>
        <p className="lead">Tour coaching, Travel management, and Match tagging</p>
        <p>
          <strong>Set-up an Appointment now:</strong>
        </p>
        <Button>Contact Me</Button>
      </Container>
    </section>
  );
};
export default Hero;

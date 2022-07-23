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
        <p className="display-4">Tennis Travel Coaching</p>
        <p className="lead">
          Personalized Feedback for tournament level competition
        </p>
        <p className="lead">Coaching tennis players for excellence</p>
        <p>
          <strong>Set-up an Appointment now:</strong>
        </p>
        <Button>Contact Me</Button>
      </Container>
    </section>
  );
};
export default Hero;

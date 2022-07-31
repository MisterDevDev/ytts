import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import ContactModal from "./ContactModal";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = (): void => setShowModal(false);

  return (
    <section
      id="section-hero"
      className="text-center text-white d-flex justify-content-center align-items-center py-5"
    >
      {showModal && (
        <ContactModal show={showModal} handleClose={handleCloseModal} />
      )}
      <Container>
        <h1
          style={{ color: "#539e8a" }}
          className="display-1 text-upercase mt-5"
        >
          YTTS
        </h1>
        <p className="display-4">Set goals and achieve together</p>
        <p className="lead">
          YTTS helps with the needs of high performance junior players on tennis
          tours
        </p>
        <p className="lead">
          Tour coaching, Travel management, and Match tagging
        </p>
        <p>
          <strong>Set-up an Appointment now:</strong>
        </p>
        <Button
          style={{ backgroundColor: "#539e8a" }}
          onClick={() => {
            console.log("trigger");
            setShowModal(true);
          }}
        >
          Contact Me
        </Button>
      </Container>
    </section>
  );
};
export default Hero;

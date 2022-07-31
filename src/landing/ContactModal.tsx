import React, { FC } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

interface ContactModalProps {
  show: boolean;
  handleClose(): void;
  coaching?: boolean;
  travel?: boolean;
  tagging?: boolean;
}

const ContactModal: FC<ContactModalProps> = ({
  show,
  handleClose,
  coaching,
  travel,
  tagging,
}) => {
  const [coachingBox, setCoachingBox] = useState(false);
  const [travelBox, setTravelBox] = useState(false);
  const [taggingBox, setTaggingBox] = useState(false);

  useEffect(() => {
    console.log("hit");
    if (coaching) setCoachingBox(true);
    if (travel) setTravelBox(true);
    if (tagging) setTaggingBox(true);
  }, [coaching, travel, tagging]);

  console.log(
    coaching,
    travel,
    tagging,
    "vs",
    coachingBox,
    travelBox,
    taggingBox
  );

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Inquiry Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group>
            <small>First Name</small>
            <Form.Control
              style={{ marginBottom: "1rem" }}
              type="email"
              placeholder="Enter email"
            />
            <small>Last Name</small>
            <Form.Control
              style={{ marginBottom: "1rem" }}
              type="email"
              placeholder="Enter email"
            />
            <small>Email Address</small>
            <Form.Control
              style={{ marginBottom: "1rem" }}
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group>
            <small>Message to Coach Yukako</small>
            <Form.Control
              style={{ marginBottom: "1rem" }}
              as="textarea"
              rows={3}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <small>Select Services</small>
            <Form.Check
              type="checkbox"
              label="Tour Coaching"
              checked={coachingBox}
              onChange={(e) => setCoachingBox(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Travel Arrangement"
              checked={travelBox}
              onChange={(e) => setTravelBox(e.target.checked)}
            />
            <Form.Check
              type="checkbox"
              label="Match Tagging"
              checked={taggingBox}
              onChange={(e) => setTaggingBox(e.target.checked)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} style={{ backgroundColor: "#808080" }}>
          Close
        </Button>
        <Button onClick={handleClose} style={{ backgroundColor: "#539e8a" }}>
          Send
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ContactModal;

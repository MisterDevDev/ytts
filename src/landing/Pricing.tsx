import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPercent,
  faArrowDown19,
  faClipboardCheck,
  faPlaneArrival,
  faMagnifyingGlass,
  faReceipt,
  faPersonChalkboard,
  faArrowUpRightDots,
  faBrain,
  faFistRaised,
  faPerson,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import ContactModal from "../modals/ContactModal";

const Pricing = () => {
  const [show, setShow] = useState(false);
  const [coaching, setCoaching] = useState(false);
  const [travel, setTravel] = useState(false);
  const [tagging, setTagging] = useState(false);

  const handleCloseModal = (): void => {
    setCoaching(false);
    setTravel(false);
    setTagging(false);
    setShow(false);
  };

  return (
    <section id="section-pricing">
      {show && (
        <ContactModal
          show={show}
          handleClose={handleCloseModal}
          coaching={coaching}
          travel={travel}
          tagging={tagging}
        />
      )}
      <Row style={{ padding: "0.75rem" }}>
        <h2>Choose your service</h2>
        <Col xs={12} md={4}>
          <Card className="mb-4">
            <Card.Header style={{ backgroundColor: "#ACE1AF" }}>
              <h2>Tour Coaching</h2>
              <h4>Starting @ $899 + Coach's expense /per tournament</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <FontAwesomeIcon icon={faArrowUpRightDots} /> Skill
                  Development
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faBrain} /> Mentality Building
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faFistRaised} /> Stength and Deficiency
                  Tuning
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faPerson} /> Support and Networking
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="success"
                onClick={() => {
                  setCoaching(true);
                  setShow(true);
                }}
              >
                Send Inquiry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="mb-4">
            <Card.Header style={{ backgroundColor: "#539e8a" }}>
              <h2>Travel Management</h2>
              <h4>Starting @ $59/per tournament</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <FontAwesomeIcon icon={faMagnifyingGlass} /> Visa Requirement
                  Search
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faPlaneArrival} />
                  Transportation & Hotel Proposals
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faPersonChalkboard} /> Tournament
                  Schedule Consultation
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faReceipt} /> Full Booking Assistance{" "}
                  {"(Premium)"}
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faIdBadge} /> Visa and Entry
                  Requirements Filing {"(Premium)"}
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="success"
                onClick={() => {
                  setTravel(true);
                  setShow(true);
                }}
              >
                Send Inquiry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="mb-4">
            <Card.Header style={{ backgroundColor: "#8cc751" }}>
              <h2>Match Tagging </h2>
              <h4>Starting @ $79/per match</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem>
                  <FontAwesomeIcon icon={faArrowDown19} /> Score Tracking
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faClipboardCheck} /> Match Analysis
                  Point by Point
                </ListGroupItem>
                <ListGroupItem>
                  <FontAwesomeIcon icon={faPercent} /> Percentages Data
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="success"
                onClick={() => {
                  setTagging(true);
                  setShow(true);
                }}
              >
                Send Inquiry
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default Pricing;

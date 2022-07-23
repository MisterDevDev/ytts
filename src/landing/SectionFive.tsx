import React from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row,
} from "react-bootstrap";

const SectionFive = () => {
  return (
    <section>
      <h2>Choose your service</h2>
      <Row>
        <Col xs={12} md={4}>
          <Card border="success">
            <Card.Header style={{ backgroundColor: "#198754" }}>
              <h2>Match Tagging</h2>
              <h4>Statistical Evaluation</h4>
            </Card.Header>
            <Card.Body>
              Match Video Analysis
              <ListGroup variant="flush">
                <ListGroupItem>Error Analysis</ListGroupItem>
                <ListGroupItem>Score Tracking</ListGroupItem>
                <ListGroupItem>Serve Assessment</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button variant="success">Send Inquiry</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card border="Warning">
            <Card.Header style={{ backgroundColor: "#ffc107" }}>
              <h2>Travel Management</h2>
              <h4>Stress Free Planning</h4>
            </Card.Header>
            <Card.Body>
              Scheduling
              <ListGroup variant="flush">
                <ListGroupItem>Error Analysis</ListGroupItem>
                <ListGroupItem>Score Tracking</ListGroupItem>
                <ListGroupItem>Serve Assessment</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button variant="success">Send Inquiry</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card border="success">
            <Card.Header style={{ backgroundColor: "#DC3545" }}>
              <h2>Match Tagging</h2>
              <h4>Statistical Evaluation</h4>
            </Card.Header>
            <Card.Body>
              Match Video Analysis
              <ListGroup variant="flush">
                <ListGroupItem>Error Analysis</ListGroupItem>
                <ListGroupItem>Score Tracking</ListGroupItem>
                <ListGroupItem>Serve Assessment</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button variant="success">Send Inquiry</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </section>
  );
};

export default SectionFive;

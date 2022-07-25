import React from "react";
import {
  Button,
  Card,
  Col,
  ListGroup,
  ListGroupItem,
  Row
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation, 
  faArrowDown19, 
  faClipboardCheck, 
  faPlaneArrival, 
  faBus, 
  faHotel, 
  faReceipt, 
  faArrowUpRightDots, 
  faBrain, 
  faFistRaised, 
  faPerson
} from '@fortawesome/free-solid-svg-icons'


const Pricing = () => {
  return (
    <section id="section-pricing">
        <Row style={{padding:'0.75rem'}}>
        <h2>Choose your service</h2>
        <Col xs={12} md={4}>
          <Card className="mb-4">
            <Card.Header style={{ backgroundColor: "#ACE1AF" }}>
              <h2>Tour Coaching</h2>
              <h4>$499/per tournament</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem><FontAwesomeIcon icon={faArrowUpRightDots} />  Skill Development</ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faBrain} />  Mentality Building</ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faFistRaised} />  Stength and Deficiency Tuning</ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faPerson} />  Support and Networking</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button variant="success">Send Inquiry</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="mb-4">
            <Card.Header style={{backgroundColor:'#539e8a'}}>
              <h2>Travel Management</h2>
              <h4>$199 + travel fees/per tournament</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem><FontAwesomeIcon icon={faPlaneArrival} />  Flights</ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faBus} />  Busing</ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faHotel} />  Hotels</ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faReceipt} />  Bookings</ListGroupItem>
              </ListGroup>
            </Card.Body>
            <Card.Footer>
              <Button variant="success">Send Inquiry</Button>
            </Card.Footer>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="mb-4">
            <Card.Header style={{ backgroundColor: "#8cc751" }}>
              <h2>Match Tagging </h2>
              <h4>$299/per match</h4>
            </Card.Header>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroupItem><FontAwesomeIcon icon={faCircleExclamation} />  Error Analysis</ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faArrowDown19} />  Score Tracking</ListGroupItem>
                <ListGroupItem><FontAwesomeIcon icon={faClipboardCheck} />  Serve Assessment</ListGroupItem>
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

export default Pricing;

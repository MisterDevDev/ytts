import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMedal,
  faPlaneDeparture,
  faClipboardList,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import CoachingReadMore from "../modals/CoachingReadMore";
import TaggingReadMore from "../modals/TaggingReadMore";
import TravelReadMore from "../modals/TravelReadMore";

const Services = () => {
  const [showCoachingModal, setShowCoachingModal] = useState(false);
  const [showTaggingModal, setShowTaggingModal] = useState(false);
  const [showTravelModal, setShowTravelModal] = useState(false);

  const closeCoachingModal = () => setShowCoachingModal(false);
  const closeTaggingModal = () => setShowTaggingModal(false);
  const closeTravelModal = () => setShowTravelModal(false);

  return (
    <section className="mt-5">
      <CoachingReadMore
        show={showCoachingModal}
        closeModal={closeCoachingModal}
      />
      <TaggingReadMore show={showTaggingModal} closeModal={closeTaggingModal} />
      <TravelReadMore show={showTravelModal} closeModal={closeTravelModal} />
      <h2 className="display-4 text-center">YTTS Services</h2>
      <Row style={{ padding: "0.75rem" }}>
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column align-items-center mb-5"
        >
          <div className="text-center" aria-hidden={true}>
            <FontAwesomeIcon icon={faMedal} />
          </div>
          <h3 className="h4 mb-4 text-center">Tour Coaching</h3>
          <p>
            Traveling is not just a tennis tournament but developing and making
            memories. YTTS will help the platers to perform better on the road
            and to have the best experience
          </p>
          <Button
            onClick={() => setShowCoachingModal(true)}
            style={{ backgroundColor: "#539e8a" }}
            size="sm"
          >
            Read More...
          </Button>
        </Col>
        <Col
          xs={12}
          md={4}
          className="d-flex flex-column align-items-center mb-5"
        >
          <div className="text-center" aria-hidden={true}>
            <FontAwesomeIcon icon={faPlaneDeparture} />
          </div>
          <h3 className="h4 mb-4 text-center">Travel Arrangement</h3>
          <p>
            Consultation of tournament schedule, booking hotels and flights,
            budgeting, research entry requirement, and visa situation etc.
            Organizaing a trip is a lot of work. YTTS will guide you to make the
            traveling easier.
          </p>
          <Button
            onClick={() => setShowTravelModal(true)}
            style={{ backgroundColor: "#539e8a" }}
            size="sm"
          >
            Read More...
          </Button>
        </Col>
        <Col xs={12} md={4} className="d-flex flex-column align-items-center">
          <div className="text-center" aria-hidden={true}>
            <FontAwesomeIcon icon={faClipboardList} />
          </div>
          <h3 className="h4 mb-4 text-center">Match Tagging</h3>
          <p>
            YTTS provides a statistic of a tennis match from your match video.
            From the statistics, you can see the pattern of your mistakes,
            percentages on serves, numbers of winners or unforced errors.
          </p>
          <Button
            onClick={() => setShowTaggingModal(true)}
            style={{ backgroundColor: "#539e8a" }}
            size="sm"
          >
            Read More...
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default Services;

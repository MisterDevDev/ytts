import React, { Dispatch, FC, SetStateAction } from "react";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  closeModal(): void;
}

const CoachingReadMore: FC<Props> = ({ show, closeModal }) => {
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>Tour Coaching</Modal.Header>
      <Modal.Body>
        <ul>
          <li>
            Training before tournament: in-depth assessment and plan for
            improving crital skills for tournament success. Yukako will identify
            strategies for addressing weaknesses while emphasizing strengths to
            help junior athletes perform their best.
          </li>
          <li>
            Before the trip, YTTS will help you to coordinate bookings of hotel,
            transportation, and flights.
          </li>
          <li>
            End of the trip, YTTS will provide the summary and feedback on the
            player's performance to parents or coaches he/she works with back
            home.
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default CoachingReadMore;

import React, { Dispatch, FC, SetStateAction } from "react";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  closeModal(): void;
}

const TravelReadMore: FC<Props> = ({ show, closeModal }) => {
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>Travel Arrangements</Modal.Header>
      <Modal.Body>
        <p style={{ marginBottom: "10px" }}>Basic Consulting Service:</p>
        <ul>
          <li>Requirements research</li>
          <li>Future Tournament entry/withdrawl deadlines</li>
          <li>Hotel and Flight suggestions</li>
        </ul>
        <p style={{ marginBottom: "10px" }}>Premium Consulting Service:</p>
        <ul>
          <li>Requirements Research</li>
          <li>Future Tournament Entry/Withdrawl Deadlines</li>
          <li>Hotel and Flight Suggestions</li>
          <li style={{ color: "green" }}>Full Booking Assistance</li>
          <li style={{ color: "green" }}>
            Visa and Entry Requirement Filing Assistance
          </li>
        </ul>
      </Modal.Body>
    </Modal>
  );
};

export default TravelReadMore;

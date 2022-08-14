import React, { Dispatch, FC, SetStateAction } from "react";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  closeModal(): void;
}

const TaggingReadMore: FC<Props> = ({ show, closeModal }) => {
  return (
    <Modal show={show} onHide={closeModal} size="lg">
      <Modal.Header closeButton>Match Tagging Sample</Modal.Header>
      <Modal.Body
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <img src="https://ytts-coaching.s3.us-east-2.amazonaws.com/match_tagging_example1.jpg" />
        <img src="https://ytts-coaching.s3.us-east-2.amazonaws.com/match_tagging_example4.jpg" />
      </Modal.Body>
    </Modal>
  );
};

export default TaggingReadMore;

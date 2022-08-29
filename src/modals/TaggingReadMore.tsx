import React, { FC } from "react";
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
        <img style={{ maxWidth: "100%" }} src="/tagging-example1.jpg" />
        <img style={{ maxWidth: "100%" }} src="/tagging-example2.jpg" />
      </Modal.Body>
    </Modal>
  );
};

export default TaggingReadMore;

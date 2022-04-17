import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const ModalConfirmUpdate = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Property Update Confirmation</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>The property has been updated successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              props.onHide();
              navigate("/view/properties");
            }}
            className="btn-modal"
          >
            View
          </Button>

          <Button onClick={props.onHide} className="btn-modal">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirmUpdate;

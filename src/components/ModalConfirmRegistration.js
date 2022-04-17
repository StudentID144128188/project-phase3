import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ModalConfirmRegistration = ({ firstName, lastName, ...rest }) => {
  const navigate = useNavigate();
  return (
    <>
      <Modal
        {...rest}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h3>Registration Confirmation</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Hello {firstName} {lastName}
          </p>
          <p>You have registered successfully</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={() => {
              rest.onHide();
              navigate("/login");
            }}
            className="btn-modal"
          >
            Log in
          </Button>

          <Button onClick={rest.onHide} className="btn-modal">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalConfirmRegistration;

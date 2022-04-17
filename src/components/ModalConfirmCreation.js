import React from 'react'
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ModalConfirmCreation = (props) => {
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
            <h3>Property Creation Confirmation</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>New property has been created successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => {
            props.onHide();
            navigate("/view/properties");
          }} className="btn-modal">View</Button>
          <Button onClick={props.onHide} className="btn-modal">Close</Button>
        </Modal.Footer>
      </Modal>
    </>

  )
}

export default ModalConfirmCreation
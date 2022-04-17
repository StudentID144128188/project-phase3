import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirmContact = (props) => {
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
            <h3>Contact Confirmation</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Hello {props.name}</p>
          <p>Your message has been sent successfully.</p>
        </Modal.Body>
        <Modal.Footer>
          <p className='confirm-msg'>
            Thank you for your message.
          </p>

          <Button onClick={props.onHide} className="btn-modal">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalConfirmContact;
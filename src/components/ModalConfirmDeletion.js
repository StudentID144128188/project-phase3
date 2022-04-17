
import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ModalConfirmBooking = (props) => {
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
            <h3>Delete A Property</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Do you want to delete the property: </p>
           <p>{" - Id: "}{props.id}</p>
           <p>{" - Title: "}{props.title}</p>
           <p>{" - Address: "}{props.address}</p>
        </Modal.Body>
        <Modal.Footer>
          <p className='confirm-msg'>
            This property can not be restored after deleting.
          </p>
          <a href="/view/properties">
            <Button onClick={() => {
                    fetch(`http://localhost:8080/api/items/${props.id}`, {
                      method: "DELETE",
                      headers: { "Accept": "application/json", "Content-Type": "application/json" },
                    })
                      .then((response) => response.json())
                      .then((json) => {
                        console.log(json);
                      }).catch(err => {
                        console.log(`Error ${err}`);
                      });
                      props.onHide();
              }} className="btn-modal" >Delete</Button>
          </a>
          <Button onClick={props.onHide} className="btn-modal">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalConfirmBooking;
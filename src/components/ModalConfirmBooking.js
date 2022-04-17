import moment from 'moment';
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
            <h3>Reservation Confirmation</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Room Name: {props.title}</p>
          {props.booking.roomtype === "1" ? (<p>Room Type: Standard</p>) : ("")}
          {props.booking.roomtype === "2" ? (<p>Room Type: Exclusive</p>) : ("")}
          {props.booking.roomtype === "3" ? (<p>Room Type: Luxury</p>) : ("")}

          <p>Check-in: {props.booking.checkin}</p>
          <p>Check-out: {props.booking.checkout}</p>
          <p>Number of guest: {props.booking.numofguest}</p>
          <p>Booking date: {moment().format("YYYY-MM-DD")}</p>
        </Modal.Body>
        <Modal.Footer>
          <p className='confirm-msg'>
            Thank you for using Rest-Inn service. We are excited to bring you awesome experiences.
          </p>
          <Button onClick={props.onHide} className="btn-modal">Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalConfirmBooking;
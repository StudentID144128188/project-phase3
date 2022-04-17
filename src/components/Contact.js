import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import ModalConfirmContact from "./ModalConfirmContact";

const Contact = () => {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [username, setUserName] = useState("");

  const [errorEmail, setErrorEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const validateForm = () => {
    let isValidated = true;

    if (email === "") {
      setErrorEmail("You must enter your email");
      isValidated = false;
    } else if (!email.includes("@")) {
      setErrorEmail("Invalid email");
      isValidated = false;
    } else {
      setErrorEmail("");
    }

    if (name === "") {
      setErrorName("You must enter your name");
      isValidated = false;
    } else {
      setErrorName("");
    }

    if (message === "") {
      setErrorMessage("You must enter your message");
      isValidated = false;
    } else {
      setErrorMessage("");
    }

    return isValidated;
  };

  return (
    <>
      <br />
      <Container className="con-login-form">
        <h3 className="login-header">Contact us</h3>
        <Form className="my-login-form">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="example@gmail.com" value={email} onChange={(event) => {
              setEmail(event.target.value);
            }} />
            <span className="error-msg">{errorEmail} </span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your last name" value={name} onChange={(event) => {
              setName(event.target.value);
            }} />
            <span className="error-msg">{errorName} </span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} value={message} onChange={(event) => {
              setMessage(event.target.value);
            }} />
            <span className="error-msg">{errorMessage} </span>
          </Form.Group>
          <Button variant="primary" type="button" className="login-btn" onClick={() => {
            if (validateForm()) {
              let msg = {
                email: email,
                name: name,
                message: message
              };
              setUserName(name);
              fetch("http://localhost:8080/api/messages", {
                method: "POST",
                body: JSON.stringify(msg),
                headers: { "Content-Type": "application/json" }
              })
                .then((response) => response.json())
                .then((json) => {
                  console.log(json);
                });
              setEmail("");
              setName("");
              setMessage("");
              setModalShow(true);
            }
          }}>
            Send message
          </Button>
          <ModalConfirmContact
            key={Math.random()}
            name={username}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <br />
          <br />
        </Form>
      </Container>
    </>
  );
};

export default Contact;

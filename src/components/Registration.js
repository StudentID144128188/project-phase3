import React, { useState, useEffect } from "react";
import { Container, Form, Button, InputGroup, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from 'react-icons/fa';

import ModalConfirmRegistration from "./ModalConfirmRegistration";

const Registration = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    keepSignIn: false,
    emailMe: false,
    role: "",
  });
  const [users, setUsers] = useState([{
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    username: "",
    keepSignIn: false,
    emailMe: false,
    role: "",
  }]);
  useEffect(() => {
    fetch(`http://localhost:8080/api/users`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [keepSignIn, setKeepSignIn] = useState(false);
  const [emailMe, setEmailMe] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorFirstName, setErrorFirstName] = useState("");
  const [errorLastName, setErrorLastName] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [type, setType] = useState("password");

  const validateForm = () => {
    let isValidated = true;

    if (email === "") {
      setErrorEmail("You must enter a email");
      isValidated = false;
    } else if (!email.includes("@")) {
      setErrorEmail("Invalid email");
      isValidated = false;
    } else {
      setErrorEmail("");
    }

    if (password === "") {
      setErrorPassword("You must enter an password");
      isValidated = false;
    } else if (password.length < 8) {
      setErrorPassword("Your password must have at least 8 characters");
      isValidated = false;
    } else if (password.length > 25) {
      setErrorPassword("Your password must not exist 25 characters");
      isValidated = false;
    } else if (!/\d/.test(password)) {
      setErrorPassword("Your password must contain at least 1 number");
      isValidated = false;
    } else {
      setErrorPassword("");
    }

    if (firstName === "") {
      setErrorFirstName("You must enter your first name");
      isValidated = false;
    } else {
      setErrorFirstName("");
    }

    if (lastName === "") {
      setErrorLastName("You must enter your last name");
      isValidated = false;
    } else {
      setErrorLastName("");
    }

    if (username === "") {
      setErrorUsername("You must enter your username");
      isValidated = false;
    } else {
      setErrorUsername("");
    }

    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        setErrorEmail("This email is not available");
        isValidated = false;
        break;
      }
      if (users[i].username === username) {
        setErrorUsername("This username is not available");
        isValidated = false;
        break;
      }
    }
  return isValidated;
};
const clearForm = () => {
  setEmail("");
  setPassword("");
  setLastName("");
  setFirstName("");
  setUsername("");
  setKeepSignIn(false);
  setEmailMe(false);
}
return (
  <>
    <br />
    <Container className="con-res-form">
      <h3 className="login-header">Sign up</h3>
      <Form className="my-login-form">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setErrorEmail("");
            }}
          />
          <span className="error-msg">{errorEmail} </span>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter your password"
              aria-label="password"
              aria-describedby="basic-addon1"
              type={type}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
                setErrorPassword("");
              }}
            />
            {!showPass ?
              <InputGroup.Text id="basic-addon1" onClick={(e) => {
                setShowPass(!showPass);
                setType("text");
              }}><FaEyeSlash /></InputGroup.Text> :
              <InputGroup.Text id="basic-addon2" onClick={(e) => {
                setShowPass(!showPass);
                setType("password");
              }}><FaEye /></InputGroup.Text>}
          </InputGroup>

          <Form.Text className="text-muted">
            8 to 25 letters with at least 1 number
          </Form.Text>
          <span className="error-msg">{errorPassword} </span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText1">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={firstName}
            onChange={(event) => {
              setFirstName(event.target.value);
              setErrorFirstName("");
            }}
          />
          <span className="error-msg">{errorFirstName} </span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText2">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your last name"
            value={lastName}
            onChange={(event) => {
              setLastName(event.target.value);
              setErrorLastName("");
            }}
          />
          <span className="error-msg">{errorLastName} </span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicText3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
              setErrorUsername("");
            }}
          />
          <span className="error-msg">{errorUsername} </span>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox1">
          <Form.Check
            type="checkbox"
            label="Keep me sign in"
            checked={keepSignIn}
            value={keepSignIn}
            onChange={(event) => {
              setKeepSignIn(!keepSignIn);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox2">
          <Form.Check
            type="checkbox"
            label="Email me exclusive coupons, deals"
            checked={emailMe}
            value={emailMe}
            onChange={(event) => {
              setEmailMe(!emailMe);
            }}
          />
        </Form.Group>
        <Button
          type="button"
          className="login-btn"
          onClick={() => {
            if (validateForm()) {
              let user = {
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
                username: username,
                keepSignIn: keepSignIn,
                emailMe: emailMe,
                role: "user"
              };
              fetch("http://localhost:8080/api/users", {
                method: "POST",
                body: JSON.stringify(user),
                headers: { "Accept": "application/json", "Content-Type": "application/json" }
              })
                .then((response) => response.json())
                .then((json) => {
                  console.log(json);
                }).catch((error) => {
                  console.error('Error:', error);
                });
              setUser(user);
              clearForm();
              setModalShow(true);
            }
          }}
        >
          Creation Account
        </Button>
        <ModalConfirmRegistration
          key={Math.random()}
          firstName={user.firstName}
          lastName={user.lastName}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <br />
        <br />
        <Form.Text>
          Already have an account?<Link to="/login"> Sign in now</Link>
        </Form.Text>
      </Form>
    </Container>
  </>
);
};

export default Registration;

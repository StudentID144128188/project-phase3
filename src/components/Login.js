import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Form,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signMeIn, setSignMeIn] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [type, setType] = useState("password");
  const [errorUsername, setErrorUsername] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const validateForm = () => {
    let isValidated = true;

    if (username === "") {
      setErrorUsername("You must enter username");
      isValidated = false;
    } else {
      setErrorUsername("");
    }

    if (password === "") {
      setErrorPassword("You must enter a password");
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
    return isValidated;
  };

  return (
    <>
      <br />
      <Container className="con-login-form">
        <h3 className="login-header">Log in</h3>
        <h6 className="error-login">{errorLogin} </h6>
        <Form className="my-login-form" >
          <Form.Group className="mb-3" controlId="formBasicEmail">
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Sign me in automatically next time"
              checked={signMeIn}
              value={signMeIn}
              onChange={(event) => {
                setSignMeIn(!signMeIn);
              }}
            />
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
              {!showPass ? (
                <InputGroup.Text
                  id="basic-addon1"
                  onClick={(e) => {
                    setShowPass(!showPass);
                    setType("text");
                  }}
                >
                  <FaEyeSlash />
                </InputGroup.Text>
              ) : (
                <InputGroup.Text
                  id="basic-addon1"
                  onClick={(e) => {
                    setShowPass(!showPass);
                    setType("password");
                  }}
                >
                  <FaEye />
                </InputGroup.Text>
              )}
            </InputGroup>
            <span className="error-msg">{errorPassword} </span>
          </Form.Group>

          <Form.Text>
            <Link to="#">Forgot your password?</Link>
          </Form.Text>
          <br />

          <Button
            variant="primary"
            type="button"
            className="login-btn"
            onClick={() => {
              if (validateForm()) {
                let user_login = {
                  username: username,
                  password: password
                };
                fetch("http://localhost:8080/api/auth", {
                  method: "POST",
                  body: JSON.stringify(user_login),
                  headers: {"Accept": "application/json", "Content-Type": "application/json" }
                })
                .then(r =>  r.json().then(data => ({status: r.status, body: data})))
                .then(obj => {
                  console.log(obj);
                  if(obj.status === 200){
                    setErrorLogin("");
                                      
                  navigate(`/dashboard/user`,{ state:{lName:obj.body.lastName,
                    fName:obj.body.firstName,
                    uName:obj.body.userName, 
                    eMail: obj.body.email }});
                  } else{
                    setErrorLogin("Email and Password not match");
                  }
                })
                .catch((err) => {
                  setErrorLogin("Email and Password does not match");
                  console.log(`Error: ${err}`);
                });
              }
            }}
          >
            Login
          </Button>
          <br />
          <br />
          <Form.Text>
            Don't have an account?<Link to="/registration"> Sign up now</Link>
          </Form.Text>
        </Form>
      </Container>
    </>
  );
};

export default Login;

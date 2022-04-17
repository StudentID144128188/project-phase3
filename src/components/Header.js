import React, { useState } from "react";

import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Navbar, Card, Nav, NavDropdown, Container } from "react-bootstrap";
import { Button, Form, FormControl } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

import logo from "../assets/images/logo.png";
import "../assets/css/App.css";

const Header = () => {
  const [searchString, setSearchString] = useState("");
  return (
    <>
      <Navbar>
        <NavLink as={Link} to="/">
          <Image className="logo" src={logo} alt="logo" />
        </NavLink>
        <Card className="sale">
          <Card.Body>
            Sale up to 10% for the first booking of new customer
          </Card.Body>
        </Card>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" className="color-nav">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-1 nav-font"
              navbarScroll
              variant="pills"
            >
              <LinkContainer to="/">
                <Nav.Link className="nav-format">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/properties">
                <Nav.Link className="nav-format">Properties</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link className="nav-format">Contact Us</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link className="nav-format">About Us</Nav.Link>
              </LinkContainer>
              <NavDropdown
                title="My Account"
                id="basic-nav-dropdown"
                as={Nav.Item}
              >
                <NavDropdown.Item as={Link} to="/registration">
                  Sign Up
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/login">
                  Log In
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/logout">
                  Log Out
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-sm-2"
                value={searchString}
                onChange={(event) => {
                setSearchString(event.target.value);
              }}
              />
              <Link to={`/properties?content=${searchString}`}>
                <Button
                  type="submit"
                  variant="outline-success"
                  className="search-btn"
                >
                  <FaSearch />
                </Button>
              </Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

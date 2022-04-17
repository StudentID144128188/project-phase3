import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Link, NavLink } from "react-router-dom";
import Image from "react-bootstrap/Image";
import { Navbar, Card, Nav, Container } from "react-bootstrap";

import logo from "../assets/images/logo.png";
import "../assets/css/App.css";

const Header = () => {

  return (
    <>
      <Navbar>
        <NavLink as={Link} to="/">
          <Image className="logo" src={logo} alt="logo" />
        </NavLink>
        <Card className="sale">
          <Card.Body className="welcome">
            Welcome
          </Card.Body>
        </Card>
      </Navbar>
      <Navbar collapseOnSelect expand="lg" className="color-nav bg-dark ">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-1 nav-font justify-content-center" style={{ flex: 1}}
              navbarScroll
              variant="pills"
            >
              <LinkContainer to="/dashboard/admin">
                <Nav.Link className="nav-format">Dashboard</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/create/property">
                <Nav.Link className="nav-format">Create Property</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/view/properties">
                <Nav.Link className="nav-format">View All Properties</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/logout">
                <Nav.Link className="nav-format">Logout</Nav.Link>
              </LinkContainer>
              
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

import React from "react";
import { Card, Container, ListGroup, Col, Row } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Card>
        <Card.Footer className="footer">
          <Container className="container-list">
            <Row>
              <Col sm="auto" className="list-col">
                <ListGroup variant="flush">
                  <ListGroup.Item className="footer-section">
                    PROPERTY TYPE
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/properties?type=Villa"
                  >
                    Villas
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/properties?type=Resort"
                  >
                    Resorts
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/properties?type=Condo"
                  >
                    Condos
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/properties?type=Hotel"
                  >
                    Hotels
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/properties?type=Apartment"
                  >
                    Apartments
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm="auto" className="list-col">
                <ListGroup variant="flush">
                  <ListGroup.Item className="footer-section">
                    ACCOUNT
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/registration"
                  >
                    Registration
                  </ListGroup.Item>
                  <ListGroup.Item className="footer-list" as={Link} to="/login">
                    Login
                  </ListGroup.Item>
                  <ListGroup.Item className="footer-list" as={Link} to="#">
                    Profile
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm="auto" className="list-col">
                <ListGroup variant="flush">
                  <ListGroup.Item className="footer-section">
                    COMPANY
                  </ListGroup.Item>
                  <ListGroup.Item className="footer-list" as={Link} to="/about">
                    About
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/contact"
                  >
                    Contact
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm="auto" className="list-col">
                <ListGroup variant="flush">
                  <ListGroup.Item className="footer-section">
                    SUPPORT
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/support"
                  >
                    Covid-19 Info
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/support"
                  >
                    Cancel booking
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="footer-list"
                    as={Link}
                    to="/support"
                  >
                    FAQ
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm="auto" className="list-col">
                <ListGroup variant="flush">
                  <ListGroup.Item className="footer-section">
                    FOLLOW US
                  </ListGroup.Item>
                  <ListGroup.Item className="footer-icon">
                    <FaFacebook className="social-media" />
                    &nbsp;&nbsp;
                    <FaTwitter className="social-media" />
                    &nbsp;&nbsp;
                    <FaInstagram className="social-media" />
                    &nbsp;&nbsp;
                    <FaTiktok className="social-media" />
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Container>
        </Card.Footer>
        <Card.Footer className="copy-right footer">
          &copy; 2022, Rest-Inn. All rights reserved. Developed by Thi Thanh
          Nguyen Nguyen.
        </Card.Footer>
      </Card>
    </>
  );
};

export default Footer;

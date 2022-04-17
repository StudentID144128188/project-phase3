import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";

import visa from "../assets/images/visa.png";
import paypal from "../assets/images/paypal.jpg";
import master from "../assets/images/master.jpg";
import american from "../assets/images/american-express.png";

const Payment = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col className="payment">
          {" "}
          <Image src={visa} className="visa-card" />{" "}
        </Col>
        <Col className="payment">
          {" "}
          <Image src={master} className="master-card" />{" "}
        </Col>
        <Col className="payment">
          {" "}
          <Image src={american} className="american" />{" "}
        </Col >
        <Col className="payment">
          {" "}
          <Image src={paypal} className="paypal" />{" "}
        </Col >
      </Row>
    </Container>
  );
};

export default Payment;

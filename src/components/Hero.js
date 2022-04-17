import React from "react";
import { Button, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

import Carousel1 from "../assets/images/Carousel1.jpg";
import Carousel2 from "../assets/images/Carousel2.jpg";
import Carousel3 from "../assets/images/Carousel3.jpg";

const Hero = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item className="hero">
          <img className="d-block w-100 img-fluid hero-img" src={Carousel1} alt="First slide" height="450px" />
          <Carousel.Caption className="format-caption">
            <h1>LUXURY RESORTS</h1>
            <Link to="/properties">
              <Button className="explore">
                EXPLORE <FiChevronDown />
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="hero">
          <img className="d-block w-100 img-fluid hero-img" src={Carousel2} alt="Second slide" height="450px" />
          <Carousel.Caption className="format-caption">
            <h1>EXCLUSIVE VILLAS</h1>
            <Link to="/properties" className="format-caption">
              <Button className="explore">
                EXPLORE <FiChevronDown />
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="hero">
          <img className="d-block w-100 img-fluid hero-img" src={Carousel3} alt="Third slide" height="450px" />
          <Carousel.Caption className="format-caption">
            <h1>PRIVATE PLACE</h1>
            <Link to="/properties">
              <Button className="explore">
                EXPLORE <FiChevronDown />
              </Button>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Hero;

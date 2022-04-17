import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdRestaurant, MdOutlinePool, MdOutlinePets, MdFreeBreakfast } from "react-icons/md";
import { FiWifi } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";
import { FcCheckmark } from "react-icons/fc";
import { FaGlassMartiniAlt, FaSpa, FaBath } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

const Item = ({
  id,
  title,
  description,
  type,
  price,
  image,
  address,
  bestSeller,
  pool,
  wifi,
  parking,
  bathtub,
  restaurant,
  breakfast,
  bar,
  spa,
  gym,
  rules,
  star
}) => {
  return (
    <>
      <Row className="justify-content-md-left">
        <Col className="item-col">
          <Card className="item-image">
            <Card.Img
              variant="top"
              src={image[0]}
              alt={title + " images"}
              className="item-img"
            />
            <div className="overlay"> </div>
            <Card.Body className="item-type">
              <Card.Title>{type}</Card.Title>
            </Card.Body>
          </Card>
        </Col>

        <Col className="item-col1" >
          <Card className="item-card">
            <Row>
              <Col className="pad-left">
                <Card.Body className="item-detail">
                  <Card.Title>
                    {title}
                    <span className="star">
                      {" "}
                      <span>&nbsp;&nbsp;</span>
                      {star}-star
                    </span>
                  </Card.Title>
                  <Card.Text className="move-left-para">{address}</Card.Text>
                  <Card.Title>Description</Card.Title>
                  <Card.Text className="move-left-para">{description}</Card.Text>
                </Card.Body>
              </Col>
            </Row>
            <Row>
              <Col className="pad-left"  >
                <Card.Body className="item-detail space">
                  <Row className="justify-content-md-left move-left">
                    {pool ? (
                      <span className="border border-light rounded">
                        <MdOutlinePool /> Pool
                      </span>
                    ) : (
                      ""
                    )}
                    {wifi ? (
                      <span className="border border-light rounded">
                        <FiWifi /> Free Wifi
                      </span>
                    ) : (
                      ""
                    )}
                    {parking ? (
                      <span className="border border-light rounded">
                        <AiFillCar /> Free Parking
                      </span>
                    ) : (
                      ""
                    )}
                    {restaurant ? (
                      <span className="border border-light rounded">
                        <MdRestaurant /> Restaurant
                      </span>
                    ) : (
                      ""
                    )}
                    {breakfast ? (
                      <span className="border border-light rounded">
                        <MdFreeBreakfast /> Free breakfast
                      </span>
                    ) : (
                      ""
                    )}
                    {bar ? (
                      <span className="border border-light rounded">
                        <FaGlassMartiniAlt /> Bar
                      </span>
                    ) : (
                      " "
                    )}
                    {spa ? (
                      <span className="border border-light rounded">
                        <FaSpa /> Spa
                      </span>
                    ) : (
                      " "
                    )}
                    {gym ? (
                      <span className="border border-light rounded">
                        <CgGym /> Gym
                      </span>
                    ) : (
                      " "
                    )}
                    {bathtub ? (
                      <span className="border border-light rounded">
                        <FaBath /> Bathtub
                      </span>
                    ) : (
                      " "
                    )}
                    {rules.pet ? (
                      <span className="border border-light rounded">
                        <MdOutlinePets /> Pet-friendly
                      </span>
                    ) : (
                      " "
                    )}
                  </Row>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col className="item-col2 " >
          <Card className="item-card">
            <Card.Body className="move-right">
              <Row className="justify-content-md-right">
                <h5>{'$'}{price} CAD</h5>
                <p className="move-right-p">per night</p>
              </Row>
              {bestSeller ? (
                <Row className="justify-content-md-right">
                  <span className="green-check">
                    <FcCheckmark className="check-icon" />Bestseller{" "}
                  </span>
                </Row>
              ) : (
                ""
              )}
              <Row className="justify-content-md-right">
                <span className="green-check">
                  <FcCheckmark className="check-icon" />Free cancellation{" "}
                </span>
              </Row>
              <br />
              <Row className="justify-content-md-right">
                <Link to={`/properties/${id}`} className="move-right-link">
                  <Button variant="primary" className="go-desc">
                    BOOK NOW
                  </Button>
                </Link>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
    </>
  );
};

export default Item;

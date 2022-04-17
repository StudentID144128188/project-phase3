import React, { useState, useEffect } from "react";
import { Container, Carousel, Button, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { AiFillLike } from "react-icons/ai";
import { BiInfoCircle } from "react-icons/bi";
import { FaMapMarkerAlt, FaBath } from "react-icons/fa";
import { MdRestaurant, MdOutlinePool, MdSmokeFree, MdOutlinePets } from "react-icons/md";
import { FiWifi } from "react-icons/fi";
import { AiFillCar } from "react-icons/ai";
import { FaGlassMartiniAlt, FaSpa } from "react-icons/fa";
import { CgGym } from "react-icons/cg";

import LeafletMap from "./LeafletMap";
import moment from "moment";
import Payment from "./Payment";
import ModalConfirmBooking from "./ModalConfirmBooking";

const ItemDescription = () => {
  const [index, setIndex] = useState(0);
  const [item, setItem] = useState({
    id: 0,
    title: "",
    description: "",
    type: "",
    price: 0,
    image: [],
    address: "",
    coord: [],
    bestSeller: false,
    featured: false,
    amenities: {},
    rules: {},
    star: 0,
    comments: {}
  });
  const [comment, setComment] = useState({
    convenient: 0,
    quiet: 0,
    walkable: 0,
    safe: 0,
    transportation: 0,
    rating: 0,
    total: 0
  });
  const initialDate = moment().format("YYYY-MM-DD");
  const [checkIn, setCheckIn] = useState(initialDate);
  const [checkOut, setCheckOut] = useState(initialDate);
  const [guest, setGuest] = useState(0);
  const [roomType, setRoomType] = useState(0);
  const [errorRoomType, setErrorRoomType] = useState("");
  const [errorCheckIn, setErrorCheckIn] = useState("");
  const [errorCheckOut, setErrorCheckOut] = useState("");
  const [errorGuest, setErrorGuest] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [booking, setBooking] = useState({
    checkin: moment().format("YYYY-MM-DD"),
    checkout: moment().format("YYYY-MM-DD"),
    roomtype: "",
    numofguest: 0,
  });

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:8080/api/items/${id}`) // GET
      .then((response) => response.json())
      .then((json) => {
        setItem(json);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const validateForm = () => {
    let temp = {
      checkin: checkIn,
      checkout: checkOut,
      roomtype: roomType,
      numofguest: guest,
    };
    setBooking(temp);
    let isValidated = true;
    if (roomType === 0) {
      setErrorRoomType("Please choose room Type");
      isValidated = false;
    } else {
      setErrorRoomType("");
      setRoomType(0);
    }

    if (checkIn <= initialDate) {
      setErrorCheckIn("Check-in date is invalid");
      isValidated = false;
    } else {
      setErrorCheckIn("");
      setCheckIn(initialDate);
    }

    if (checkOut <= checkIn) {
      setErrorCheckOut("Check-out date is invalid");
      isValidated = false;
    } else {
      setErrorCheckOut("");
      setCheckOut(initialDate);
    }
    if (guest <= 0) {
      setErrorGuest("Number of guest is invalid");
      isValidated = false;
    } else {
      setErrorGuest("");
      setGuest(0);
    }
    return isValidated;
  };

  return (
    <>
      <Container>
        <br />
        <Row>
          <Col className="item-desc1">
            <h4>
              {item.title}
              <span>&nbsp;&nbsp;</span>
              <span className="star">{item.star}-star</span>
            </h4>
            <p>{item.description}</p>
     
            {item.amenities.breakfast ? (
              <span className="green-check-list ">
                 <FcCheckmark className="check-icon" />
                Free breakfast&nbsp;&nbsp;
              </span>
            ) : (
              ""
            )}

            <span className="green-check-list ">
              &nbsp;&nbsp;
              <FcCheckmark className="check-icon" />
              Free airport shuttle &nbsp;&nbsp;
            </span>
            <span className="green-check-list ">
              <FcCheckmark className="check-icon" />
              Free cancellation
            </span>
            <br />
            <br />
          </Col>

          <Col className="item-desc2">
            <h4>{'$'}{item.price} CAD</h4>
            <a href="#reserve-here">
              <Button variant="primary" className="book">
                CHOOSE ROOM
              </Button>
            </a>
          </Col>
        </Row>
        <Row>
          <Col className="item-desc1 .col-md-8" md={8}  >
            <Carousel fade
              activeIndex={index}
              onSelect={handleSelect}
              interval={100000}
            >
              <Carousel.Item className="format-height">
                <img
                  className="d-block w-100 slide-show"
                  src={item.image[0]}
                  alt="First slide"
                />
                <Carousel.Caption className="image-list">
                  <span className="index">{index + 1} / 3</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="format-height">
                <img
                  className="d-block w-100 slide-show"
                  src={item.image[1]}
                  alt="Second slide"

                />
                <Carousel.Caption className="image-list">
                  <span className="index">{index + 1} / 3</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="format-height">
                <img
                  className="d-block w-100 slide-show"
                  src={item.image[2]}
                  alt="Third slide"
                />
                <Carousel.Caption className="image-list">
                  <span className="index">{index + 1} / 3</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>

          <Col className="item-desc3 col-md-4" md={4} >
            <Row>
              <Col className="leaflet-desc">
                <LeafletMap
                  key={Math.random()}
                  coord0={item.coord[0]}
                  coord1={item.coord[1]}
                  popup="Here you are"
                >
                  {" "}
                </LeafletMap>
              </Col>
            </Row>
            <Row className="address-padding-top">
              <Col className="map-icon">
                <FaMapMarkerAlt className="address-icon" />
              </Col>
              <Col className="address" >{item.address}</Col>
            </Row>
            <hr />
            <Row>
              <Col className="rating-type">
                <span className="rating">{item.comments.rating}</span>
                <div className="arrow-right"></div>
              </Col>
              <Col>
                <Row>
                  {item.comments.rating > 8 ? (
                    <h6>Exceptional</h6>
                  ) : (
                    <h6>Fabulous</h6>
                  )}
                </Row>
                <Row>
                  <span className="comment">
                    {item.comments.total} verified guest reviews
                  </span>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr />

        <Row>
          <Row>
            <span className="rated-loc">
              Guests rated location <BiInfoCircle className="info-icon" />
            </span>
          </Row>
          <Row>
            <Col className="like-col">
              <AiFillLike className="like-icon" />
            </Col>
            <Col className="mention-col">
              <Row>Convenient</Row>
              <Row>
                {" "}
                <span className="mention">
                  {item.comments.convenient} positive mentions
                </span>
              </Row>
            </Col>
            <Col className="like-col">
              <AiFillLike className="like-icon" />
            </Col>
            <Col className="mention-col">
              <Row>Quiet</Row>
              <Row>
                {" "}
                <span className="mention">
                  {item.comments.quiet} positive mentions
                </span>
              </Row>
            </Col>
            <Col className="like-col">
              <AiFillLike className="like-icon" />
            </Col>
            <Col className="mention-col">
              <Row>Walkable</Row>
              <Row>
                {" "}
                <span className="mention">
                  {item.comments.walkable} positive mentions
                </span>
              </Row>
            </Col>
            <Col className="like-col">
              <AiFillLike className="like-icon" />
            </Col>
            <Col className="mention-col">
              <Row>Safe</Row>
              <Row>
                {" "}
                <span className="mention">
                  {item.comments.safe} positive mentions
                </span>
              </Row>
            </Col>
            <Col className="like-col">
              <AiFillLike className="like-icon" />
            </Col>
            <Col>
              <Row>Transportation options</Row>
              <Row>
                {" "}
                <span className="mention">
                  {item.comments.transportation} positive mentions
                </span>
              </Row>
            </Col>
          </Row>
        </Row>
        <hr />
        <Row>
          <span className="rated-loc">Highlight Features</span>
        </Row>
        <Row className="justify-content-md-left">
          {item.amenities.parking ? (
            <span className="feature-desc">
              <AiFillCar className="pool" />
              &nbsp;&nbsp;Free parking
            </span>
          ) : (
            ""
          )}
          {item.amenities.pool ? (
            <span className="feature-desc">
              <MdOutlinePool className="pool" />
              &nbsp;&nbsp;Pool
            </span>
          ) : (
            ""
          )}
          {item.amenities.wifi ? (
            <span className="feature-desc">
              <FiWifi className="pool" />
              &nbsp;&nbsp;Free Wifi
            </span>
          ) : (
            ""
          )}

          {item.amenities.restaurant ? (
            <span className="feature-desc">
              <MdRestaurant className="pool" />
              &nbsp;&nbsp;Restaurant
            </span>
          ) : (
            ""
          )}
          {item.amenities.bar ? (
            <span className="feature-desc">
              <FaGlassMartiniAlt className="pool" />
              &nbsp;&nbsp;Bar
            </span>
          ) : (
            ""
          )}
          {item.amenities.spa ? (
            <span className="feature-desc">
              <FaSpa className="pool" />
              &nbsp;&nbsp;Spa
            </span>
          ) : (
            ""
          )}
          {item.amenities.gym ? (
            <span className="feature-desc">
              <CgGym className="pool" />
              &nbsp;&nbsp;Gym
            </span>
          ) : (
            ""
          )}
           {item.amenities.bathtub ? (
            <span className="feature-desc">
              <FaBath className="pool" />
              &nbsp;&nbsp;Bathtub
            </span>
          ) : (
            ""
          )}
          {item.rules.smoke ? (
            ""
          ) : (
            <span className="feature-desc">
              <MdSmokeFree className="pool" />
              &nbsp;&nbsp;Non-smoking
            </span>
          )}
          {item.rules.pet ? (
            <span className="feature-desc">
              <MdOutlinePets className="pool" />
              &nbsp;&nbsp;Pet-friendly
            </span>
          ) : (
            ""
          )}
        </Row>
        <hr />
        <Row id="reserve-here">
          <span className="rated-loc">Reservation</span>
        </Row>
        <Row className="justify-content-md-left">
          <Col>
            <Form.Group>
              <Form.Label>Room Type</Form.Label>
              <Form.Select
                aria-label="room-type"
                value={roomType}
                onChange={(e) => {
                  setRoomType(e.target.value);
                }}
              >
                <option>--Select</option>
                <option value="1">Standard</option>
                <option value="2">Exclusive</option>
                <option value="3">Luxury</option>
              </Form.Select>
              <span className="error-msg">{errorRoomType} </span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Check-in</Form.Label>
              <Form.Control
                type="date"
                name="check-in"
                placeholder="check-in"
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                }}
              ></Form.Control>
              <span className="error-msg">{errorCheckIn} </span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Check-out</Form.Label>
              <Form.Control
                type="date"
                name="check-out"
                placeholder="check-out"
                value={checkOut}
                onChange={(e) => {
                  setCheckOut(e.target.value);
                }}
              ></Form.Control>
              <span className="error-msg">{errorCheckOut} </span>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Guests</Form.Label>
              <Form.Control
                type="number"
                name="num-of-guest"
                placeholder="Number of guest"
                value={guest}
                onChange={(e) => {
                  setGuest(e.target.value);
                }}
              ></Form.Control>
              <span className="error-msg">{errorGuest} </span>
            </Form.Group>
          </Col>
          <Col className="reserve">
            <Button
              type="button"
              className="reserve-btn"
              onClick={() => {
                if (validateForm()) {
                  setModalShow(true);
                }
              }}
            >
              RESERVE
            </Button>
            <ModalConfirmBooking
              key={Math.random()}
              title={item.title}
              booking={booking}
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
        <br />
        <hr />
        <br />
        <Payment />
      </Container>
    </>
  );
};

export default ItemDescription;

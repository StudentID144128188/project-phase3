import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
  FormControl,
  FormSelect,
} from "react-bootstrap";
import ModalConfirmCreation from "./ModalConfirmCreation";

const CreateProperty = () => {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState("");
  const [desc, setDesc] = useState("");
  const [errorDesc, setErrorDesc] = useState("");
  const [address, setAddress] = useState("");
  const [errorAddress, setErrorAddress] = useState("");
  const [latitude, setLatitude] = useState("");
  const [errorLatitude, setErrorLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [errorLongitude, setErrorLongitude] = useState("");
  const [type, setType] = useState("");
  const [errorType, setErrorType] = useState("");
  const [price, setPrice] = useState("");
  const [errorPrice, setErrorPrice] = useState("");
  const [star, setStar] = useState("");
  const [errorStar, setErrorStar] = useState("");
  const [image1, setImage1] = useState("");
  const [errorImage1, setErrorImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [errorImage2, setErrorImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [errorImage3, setErrorImage3] = useState("");
  const [bestSeller, setBestSeller] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [bathtub, setBathtub] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [bar, setBar] = useState(false);
  const [spa, setSpa] = useState(false);
  const [gym, setGym] = useState(false);
  const [pet, setPet] = useState(false);
  const [smoke, setSmoke] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  const validateForm = () => {
    let isValidated = true;

    if (name === "") {
      setErrorName("You must enter property name");
      isValidated = false;
    } else {
      setErrorName("");
    }

    if (desc === "") {
      setErrorDesc("You must enter property description");
      isValidated = false;
    } else {
      setErrorDesc("");
    }

    if (address === "") {
      setErrorAddress("You must enter property's address");
      isValidated = false;
    } else {
      setErrorAddress("");
    }
    let lat = Number(latitude);
    if (latitude === "") {
      setErrorLatitude("You must enter latitude for coordinates");
      isValidated = false;
    } else if(isNaN(lat) || lat === 0){
      setErrorLongitude("Invalid latitude");
      isValidated = false;
    }else {
      setErrorLatitude("");
    }
    let lng = Number(longitude);
    if (longitude === "") {
      setErrorLongitude("You must enter longitude for coordinates");
      isValidated = false;
    } else if(isNaN(lng) || lng === 0){
      setErrorLongitude("Invalid longitude");
      isValidated = false;
    } else {
      setErrorLongitude("");
    }
    let unit_price = Number(price);
    if (price === "") {
      setErrorPrice("You must enter property price per night");
      isValidated = false;
    } else if (isNaN(unit_price) || unit_price === 0) {
      setErrorPrice("Invalid price");
      isValidated = false;
    } else {
      setErrorPrice("");
    }

    let star_input = Number(star);
    if (star === "") {
      setErrorStar("You must enter property star");
      isValidated = false;
    } else if (isNaN(star_input) || star_input === 0 || star_input > 5) {
      setErrorStar("Invalid Star");
      isValidated = false;
    } else {
      setErrorStar("");
    }
    if (type === "") {
      setErrorType("You must choose property type");
      isValidated = false;
    } else {
      setErrorType("");
    }

    if (image1 === "") {
      setErrorImage1("You must enter image link");
      isValidated = false;
    } else {
      setErrorImage1("");
    }

    if (image2 === "") {
      setErrorImage2("You must enter image link");
      isValidated = false;
    } else {
      setErrorImage2("");
    }

    if (image3 === "") {
      setErrorImage3("You must enter image link");
      isValidated = false;
    } else {
      setErrorImage3("");
    }

    return isValidated;
  };

  const clearForm = () => {
    setName("");
    setDesc("");
    setAddress("");
    setPrice("");
    setLatitude("");
    setLongitude("");
    setStar("");
    setImage1("");
    setImage2("");
    setImage3("");
    setType("");
    setBestSeller(false);
    setFeatured(false);
    setWifi(false);
    setParking(false);
    setBathtub(false);
    setRestaurant(false);
    setBar(false);
    setSpa(false);
    setGym(false);
    setPet(false);
    setSmoke(false);
  };

  return (
    <>
      <Container>
        <br />
        <br />
        <Form className="create-item">
          <h3 className="login-header">Property Creation</h3>
          <Row>
            <Col className="col-md-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Property Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Property Name"
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
                <span className="error-msg">{errorName} </span>
              </Form.Group>
            </Col>
            <Col className="col-md-8">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Description"
                  value={desc}
                  onChange={(event) => {
                    setDesc(event.target.value);
                  }}
                />
                <span className="error-msg">{errorDesc} </span>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-4">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />
                <span className="error-msg">{errorAddress} </span>
              </Form.Group>
            </Col>
            <Col className="col-md-8">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Coordinates</Form.Label>
                <Row>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Latitude"
                      value={latitude}
                      onChange={(event) => {
                        setLatitude(event.target.value);
                      }}
                    />
                    <span className="error-msg">{errorLatitude} </span>
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Longitude"
                      value={longitude}
                      onChange={(event) => {
                        setLongitude(event.target.value);
                      }}
                    />
                    <span className="error-msg">{errorLongitude} </span>
                  </Col>
                </Row>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col className="col-md-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Property Type</Form.Label>
                <Form.Select
                  value={type}
                  onChange={(event) => {
                    setType(event.target.value);
                    console.log(event.target.value);
                  }}
                >
                  <option value="">--select type--</option>
                  <option value="Resort">Resort</option>
                  <option value="Villa">Villa</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Apartment">Apartment</option>
                  <option value="Condo">Condo</option>
                </Form.Select>
                <span className="error-msg">{errorType} </span>
              </Form.Group>
            </Col>
            <Col className="col-md-3">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Price per night"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                />
                <span className="error-msg">{errorPrice} </span>
              </Form.Group>
            </Col>
            <Col className="col-md-2">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Star</Form.Label>
                <Form.Control
                  type="number"
                  max="5"
                  min="1"
                  placeholder="Star"
                  value={star}
                  onChange={(event) => {
                    setStar(event.target.value);
                  }}
                />
                <span className="error-msg">{errorStar} </span>
              </Form.Group>
            </Col>
            <Col className="col-md-2">
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                <Form.Label></Form.Label>
                <Form.Check
                    type="checkbox"
                    label="BestSeller Item"
                    checked={bestSeller}
                    value={bestSeller}
                    onChange={(event) => {
                      setBestSeller(!bestSeller);
                    }}
                  />
              </Form.Group>
            </Col>
            <Col className="col-md-2">
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
                <Form.Label></Form.Label>
                <Form.Check
                    type="checkbox"
                    label="Featured Item"
                    checked={featured}
                    value={featured}
                    onChange={(event) => {
                      setFeatured(!featured);
                    }}
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Label>Images</Form.Label>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="First Image"
                  value={image1}
                  onChange={(event) => {
                    setImage1(event.target.value);
                  }}
                />
                <span className="error-msg">{errorImage1} </span>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Second Image"
                  value={image2}
                  onChange={(event) => {
                    setImage2(event.target.value);
                  }}
                />
                <span className="error-msg">{errorImage2} </span>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  placeholder="Second Image"
                  value={image3}
                  onChange={(event) => {
                    setImage3(event.target.value);
                  }}
                />
                <span className="error-msg">{errorImage3} </span>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Label>Amenities</Form.Label>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                    type="checkbox"
                    label="Wifi"
                    checked={wifi}
                    value={wifi}
                    onChange={(event) => {
                      setWifi(!wifi);
                    }}
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                    type="checkbox"
                    label="Parking"
                    checked={parking}
                    value={parking}
                    onChange={(event) => {
                      setParking(!parking);
                    }}
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                    type="checkbox"
                    label="Bathtub"
                    value={bathtub}
                    checked={bathtub}
                    onChange={(event) => {
                      setBathtub(!bathtub);
                    }}
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                    type="checkbox"
                    label="Restaurant"
                    checked={restaurant}
                    value={restaurant}
                    onChange={(event) => {
                      setRestaurant(restaurant);
                    }}
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                    type="checkbox"
                    label="Bar"
                    value={bar}
                    checked={bar}
                    onChange={(event) => {
                      setBar(!bar);
                    }}
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                    type="checkbox"
                    label="Spa"
                    checked={spa}
                    value={spa}
                    onChange={(event) => {
                      setSpa(!spa);
                    }}
                  />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                    type="checkbox"
                    label="Gym"
                    checked={gym}
                    value={gym}
                    onChange={(event) => {
                      setGym(!gym);
                    }}
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Form.Label>Rules</Form.Label>
            <Col className="col-md-2">
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                    type="checkbox"
                    label="Pet-Friendly"
                    checked={pet}
                    value={pet}
                    onChange={(event) => {
                      setPet(!pet);
                    }}
                  />
              </Form.Group>
            </Col>
            <Col className="col-md-2">
              <Form.Group className="mb-3" controlId="formBasicCheckbox2">
              <Form.Check
                    type="checkbox"
                    label="Smoking Allowed"
                    checked={smoke}
                    value={smoke}
                    onChange={(event) => {
                      setSmoke(!smoke);
                    }}
                  />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Button
              type="button"
              className="login-btn create-btn"
              onClick={() => {
                if (validateForm()) {
                  let item = {
                    title: name,
                    description: desc,
                    type: type,
                    price: price,
                    image: [image1, image2, image3],
                    address: address,
                    coord: [latitude, longitude],
                    bestSeller: bestSeller,
                    featured: featured,
                    amenities: {
                      wifi: wifi,
                      parking: parking,
                      bathtub: bathtub,
                      restaurant: restaurant,
                      bar: bar,
                      spa: spa,
                      gym: gym,
                    },
                    rules: {
                      pet: pet,
                      smoke: smoke,
                    },
                    star: Number(star),
                    comments: {
                      convenient: 39,
                      quiet: 14,
                      walkable: 22,
                      safe: 54,
                      transportation: 24,
                      rating: 9,
                      total: 74,
                    }
                  };
                  fetch("http://localhost:8080/api/items", {
                    method: "POST",
                    body: JSON.stringify(item),
                    headers: {
                      "Accept": "application/json",
                      "Content-Type": "application/json"
                    },
                  })
                    .then((response) => response.json())
                    .then((json) => {
                      console.log(json);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
                    setModalShow(true);
                    clearForm();
                }
              }}
            >
              CREATE
            </Button>
            <ModalConfirmCreation
            key={Math.random()}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          </Row>
          <br />
        </Form>
      </Container>
    </>
  );
};

export default CreateProperty;

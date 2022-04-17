import React, { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown, Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Image from "react-bootstrap/Image";
import Item from "./Item";
import LeafletMap from "./LeafletMap";

import img from "../assets/images/no-property-found.jpg";

const ItemListing = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState(100);
  const [itemName, setItemName] = useState("");
  const [notFound, setNotFound] = useState("");
  const [resortType, setResortType] = useState(false);
  const [villaType, setVillaType] = useState(false);
  const [condoType, setCondoType] = useState(false);
  const [hotelType, setHotelType] = useState(false);
  const [apartmentType, setApartmentType] = useState(false);
  const [pool, setPool] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [parking, setParking] = useState(false);
  const [bar, setBar] = useState(false);
  const [spa, setSpa] = useState(false);
  const [gym, setGym] = useState(false);
  const [restaurant, setRestaurant] = useState(false);
  const [bathtub, setBathtub] = useState(false);
  const [sortPrice, setSortPrice] = useState("");
  const [sortStar, setSortStar] = useState("");

  const [resorts, setResorts] = useState([
    {
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
      amenities: { },
      rules:{},
      star:0,
      comments:{}
    }
  ]);

  const [items, setItems] = useState([
    {
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
      amenities: { },
      rules:{},
      star:0,
      comments:{}
    }
  ]);

  useEffect(() => {
    let type = searchParams.get("type");
    let content = searchParams.get("content");
    if(type){
    fetch(`http://localhost:8080/api/items?type=${type}`) 
      .then((response) => response.json())
      .then((data) => {
          setResorts(data);
          setItems(data);
          setNotFound("");
      })
      .catch((err) => {
        console.log(`Error ${err}`);
        setNotFound("No result returned");
      });
    }else if(content){
      fetch(`http://localhost:8080/api/items/search/content/${content}`) 
      .then((response) => response.json())
      .then((data) => {
          setResorts(data);
          setItems(data);
          setNotFound("");
      })
      .catch((err) => {
        console.log(`Error ${err}`);
        setNotFound("No result returned");
      });
    }else {
      fetch(`http://localhost:8080/api/items`) 
      .then((response) => response.json())
      .then((data) => {
          setResorts(data);
          setItems(data);
          setNotFound("");
      })
      .catch((err) => {
        console.log("not found");
        setNotFound("No result returned");
      });
    }
  }, [searchParams]); 

  const handleChangeType = (input) => {
    let newItems = items.filter((item) => {
      return item.type === input;
    });
    if (resorts.length === items.length) {
      setResorts(newItems);
    } else {
      let result = [...resorts, ...newItems];
      setResorts(result);
    }
  };

  const clearType = (input) => {
    setResorts(items);
  };

  const handleChangeFeatured = (input) => {
    let newItems = [];
    if (input === "pool") {
      newItems = items.filter((item) => {
        return item.amenities.pool === true;
      });
    } else if (input === "wifi") {
      newItems = items.filter((item) => {
        return item.amenities.wifi === true;
      });
    } else if (input === "parking") {
      newItems = items.filter((item) => {
        return item.amenities.parking === true;
      });
    } else if (input === "restaurant") {
      newItems = items.filter((item) => {
        return item.amenities.restaurant === true;
      });
    } else if (input === "bar") {
      newItems = items.filter((item) => {
        return item.amenities.bar === true;
      });
    } else if (input === "spa") {
      newItems = items.filter((item) => {
        return item.amenities.spa === true;
      });
    } else if (input === "gym") {
      newItems = items.filter((item) => {
        return item.amenities.gym === true;
      });
    }
    if (resorts.length === items.length) {
      setResorts(newItems);
    } else {
      let result = [...resorts, ...newItems];
      setResorts(result);
    }
  };

  const clearFeatured = () => {
    setResorts(items);
  };

  const handleChangeName = (input) => {
    let newItems = items.filter((item) => {
      return item.title.includes(input);
    });
    if (input === "") {
      setResorts(items);
    } else {
      setResorts(newItems);
    }
  };

  const handleChangePrice = (input) => {
    let maxPrice = Number(input);
    let newItems = items.filter((item) => {
      return item.price <= Number(maxPrice);
    });

    if (maxPrice === 100) {
      setResorts(items);
    } else {
      setResorts(newItems);
    }
  };

  const sortByPrice = (input) => {
    if (input === "low") {
      let sortedItem = resorts.sort((a, b) => {
        return a.price - b.price;
      });
      setResorts(sortedItem);
    } else if (input === "high") {
      let sortedItem = resorts.sort((a, b) => {
        return b.price - a.price;
      });
      setResorts(sortedItem);
    }
  };

  const sortByStar = (input) => {
    if (input === "low") {
      let sortedItem = resorts.sort((a, b) => {
        return a.star - b.star;
      });
      setResorts(sortedItem);
    } else if (input === "high") {
      let sortedItem = resorts.sort((a, b) => {
        return b.star - a.star;
      });
      setResorts(sortedItem);
    }
  };

  return (
    <>
      <Container>
        
      {notFound !== "" ? ( <Row className="align-items-center justify-content-center"><Image className="property-not-found" src={img} alt="Property not found" /></Row>) : (
        <Row>
          <Col className="map">
            <Row>
              <Col className="leaf-map">
                <LeafletMap />
              </Col>
            </Row>
            <h5 className="padding-top">Narrow results</h5>
            {searchParams.get("type") ? (
              <p>
                {resorts.length} {searchParams.get("type").toLowerCase()}
                {"s"}
              </p>
            ) : (
              <p>{resorts.length} villas, hotels, departments</p>
            )}

            <hr />

            <Row>
              <Form action="">
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    <h5>Name Contains</h5>
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Property name"
                    value={itemName}
                    onChange={(event) => {
                      setItemName(event.target.value);
                      handleChangeName(event.target.value);
                    }}
                  />
                </Form.Group>
                <hr />

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Label>
                    <h5>
                      {searchParams.get("type")
                        ? "Featured Filters"
                        : "Property filters"}
                    </h5>
                  </Form.Label>
                  {searchParams.get("type") ? (
                    <Form.Check
                      type="checkbox"
                      label="Swimming Pool"
                      value="pool"
                      onChange={(event) => {
                        setPool(event.target.checked);
                        if (event.target.checked) {
                          handleChangeFeatured(event.target.value);
                        } else {
                          clearFeatured();
                        }
                      }}
                    />
                  ) : (
                    <Form.Check
                      type="checkbox"
                      label="Resorts"
                      value="Resort"
                      onChange={(event) => {
                        setResortType(event.target.checked);

                        if (event.target.checked) {
                          handleChangeType(event.target.value);
                        } else {
                          clearType(event.target.value);
                        }
                      }}
                    />
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {searchParams.get("type") ? (
                    <Form.Check
                      type="checkbox"
                      label="Free Wifi"
                      value="wifi"
                      onChange={(event) => {
                        setWifi(event.target.checked);
                        if (event.target.checked) {
                          handleChangeFeatured(event.target.value);
                        } else {
                          clearFeatured();
                        }
                      }}
                    />
                  ) : (
                    <Form.Check
                      type="checkbox"
                      label="Villas"
                      value="Villa"
                      onChange={(event) => {
                        setVillaType(event.target.checked);
                        if (event.target.checked) {
                          handleChangeType(event.target.value);
                        } else {
                          clearType(event.target.value);
                        }
                      }}
                    />
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {searchParams.get("type") ? (
                    <Form.Check
                      type="checkbox"
                      label="Free Parking"
                      value="parking"
                      onChange={(event) => {
                        setParking(event.target.checked);
                        if (event.target.checked) {
                          handleChangeFeatured(event.target.value);
                        } else {
                          clearFeatured();
                        }
                      }}
                    />
                  ) : (
                    <Form.Check
                      type="checkbox"
                      label="Hotels"
                      value="Hotel"
                      onChange={(event) => {
                        setHotelType(event.target.checked);
                        if (event.target.checked) {
                          handleChangeType(event.target.value);
                        } else {
                          clearType(event.target.value);
                        }
                      }}
                    />
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {searchParams.get("type") ? (
                    <Form.Check
                      type="checkbox"
                      label="Restaurant"
                      value="restaurant"
                      onChange={(event) => {
                        setRestaurant(event.target.checked);
                        if (event.target.checked) {
                          handleChangeFeatured(event.target.value);
                        } else {
                          clearFeatured();
                        }
                      }}
                    />
                  ) : (
                    <Form.Check
                      type="checkbox"
                      label="Condos"
                      value="Condo"
                      onChange={(event) => {
                        setCondoType(event.target.checked);
                        if (event.target.checked) {
                          handleChangeType(event.target.value);
                        } else {
                          clearType(event.target.value);
                        }
                      }}
                    />
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {searchParams.get("type") ? (
                    <Form.Check
                      type="checkbox"
                      label="Bar Club"
                      value="bar"
                      onChange={(event) => {
                        setBar(event.target.checked);
                        if (event.target.checked) {
                          handleChangeFeatured(event.target.value);
                        } else {
                          clearFeatured();
                        }
                      }}
                    />
                  ) : (
                    <Form.Check
                      type="checkbox"
                      label="Apartments"
                      value="Apartment"
                      onChange={(event) => {
                        setApartmentType(event.target.checked);
                        if (event.target.checked) {
                          handleChangeType(event.target.value);
                        } else {
                          clearType(event.target.value);
                        }
                      }}
                    />
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {searchParams.get("type") ? (
                    <Form.Check
                      type="checkbox"
                      label="Spa"
                      value="spa"
                      onChange={(event) => {
                        setSpa(event.target.checked);
                        if (event.target.checked) {
                          handleChangeFeatured(event.target.value);
                        } else {
                          clearFeatured();
                        }
                      }}
                    />
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {searchParams.get("type") ? (
                    <Form.Check
                      type="checkbox"
                      label="Gym"
                      value="gym"
                      onChange={(event) => {
                        setGym(event.target.checked);
                        if (event.target.checked) {
                          handleChangeFeatured(event.target.value);
                        } else {
                          clearFeatured();
                        }
                      }}
                    />
                  ) : (
                    ""
                  )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  {searchParams.get("type") ? (
                    <Form.Check
                      type="checkbox"
                      label="Bathtub"
                      value="bathtub"
                      onChange={(event) => {
                        setBathtub(event.target.checked);
                        if (event.target.checked) {
                          handleChangeFeatured(event.target.value);
                        } else {
                          clearFeatured();
                        }
                      }}
                    />
                  ) : (
                    ""
                  )}
                </Form.Group>
                <hr />
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>
                    <h5>Nightly Price</h5>
                  </Form.Label>
                  <p className="price-range">$100 CAD - $1000 CAD+</p>
                  <Form.Range
                    min={100}
                    max={3000}
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                      handleChangePrice(e.target.value);
                    }}
                  />
                  <p className="price-range">{value}</p>
                </Form.Group>
              </Form>
            </Row>
          </Col>
          <Col className="clear-padding">
            <Row className="justify-content-md-left">
              <Col className="sort-by">
                <h6>Sorted by</h6>
              </Col>
              <Col className="sort-by">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Star Rating
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={(e) => {
                        setSortStar("low");
                        sortByStar("low");
                      }}
                    >
                      {" "}
                      Star (Low to High)
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      onClick={(e) => {
                        setSortStar("high");
                        sortByStar("high");
                      }}
                    >
                      Star (High to Low)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
              <Col className="sort-by">
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    Price
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={(e) => {
                        setSortPrice("low");
                        sortByPrice("low");
                      }}
                    >
                      Price (Low to High)
                    </Dropdown.Item>
                    <Dropdown.Item
                      href="#"
                      onClick={(e) => {
                        setSortPrice("high");
                        sortByPrice("high");
                      }}
                    >
                      Price (High to Low)
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Col>
            </Row>
            <hr />
            {resorts.map((resort) => (
              <Item
                key={Math.random()}
                id={resort.id}
                title={resort.title}
                description={resort.description}
                type={resort.type}
                price={resort.price}
                image={resort.image}
                address={resort.address}
                bestSeller={resort.bestSeller}
                pool={resort.amenities.pool}
                wifi={resort.amenities.wifi}
                parking={resort.amenities.parking}
                bathtub={resort.amenities.bathtub}
                restaurant={resort.amenities.restaurant}
                breakfast={resort.amenities.breakfast}
                bar={resort.amenities.bar}
                spa={resort.amenities.spa}
                gym={resort.amenities.gym}
                rules={resort.rules}
                star={resort.star}
              />
            ))}
          </Col>
        </Row>       
        )}
      </Container>
    </>
  );
};

export default ItemListing;

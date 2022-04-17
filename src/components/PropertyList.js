import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Property from "./Property";

const PropertyList = () => {
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
    fetch("http://localhost:8080/api/items/properties?isFeatured=true") // fetch will load over and over again if it is not place in useEffect
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []); //to make sure the fetch just execute once

  return (
    <Container>
      <h2>Properties Type</h2>
      <Row className="justify-content-md-center">
        {items.map((item) => (
          <Col xs={6} md={3} sm={4} lg={2} key={item.id}>
            <Property key={item.id} type={item.type} image={item.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PropertyList;

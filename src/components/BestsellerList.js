import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import BestsellerItem from "./BestsellerItem";

const ResortList = () => {
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
    fetch(`http://localhost:8080/api/items/bestsellers?isBestseller=true`) 
      .then((response) => response.json())
      .then((data) => {
        let results = data;
        let top4 = results.slice(0, 4);
        setItems(top4);
      })
      .catch((err) => {
        console.log(`Error ${err}`);
      });
  }, []); //to make sure the fetch just execute once

  return (
    <>
      <Container >
        <h2>BestSeller Items</h2>
        <Row className="justify-content-md-center">
          {items.map((item) => (
            <Col xs={6} md={6} sm={6} lg={3} className="item-col" key={item.id}>
              <BestsellerItem
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ResortList;

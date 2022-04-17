import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import ViewAProperty from "./ViewAProperty";
import Image from "react-bootstrap/Image";
import img from "../assets/images/no-property-found.jpg";

const ViewAllProperties = () => {
  const [notFound, setNotFound] = useState("");
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
      amenities: {},
      rules: {},
      star: 0,
      comments: {},
    },
  ]);

  useEffect(() => {
    fetch(`http://localhost:8080/api/items`)
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setNotFound("");
      })
      .catch((err) => {
        console.log(`Error ${err}`);
        setNotFound("No result returned");
      });
  }, []);
  return (
    <>
      <Container >
        {notFound !== "" ? (
          <Row className="align-items-center justify-content-center">
            <Image
              className="property-not-found"
              src={img}
              alt="Property not found"
            />
          </Row>
        ) : (
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Property Id</th>
                <th>Title</th>
                <th>Type</th>
                <th>Address</th>
                <th>Price</th>
                <th>Bestseller</th>
                <th>Star</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
           
                {items.map((item) => (
                  <ViewAProperty
                    key={Math.random()}
                    id={item.id}
                    title={item.title}
                    description={item.description}
                    type={item.type}
                    price={item.price}
                    image={item.image}
                    address={item.address}
                    bestSeller={item.bestSeller}
                    pool={item.amenities.pool}
                    wifi={item.amenities.wifi}
                    parking={item.amenities.parking}
                    bathtub={item.amenities.bathtub}
                    restaurant={item.amenities.restaurant}
                    breakfast={item.amenities.breakfast}
                    bar={item.amenities.bar}
                    spa={item.amenities.spa}
                    gym={item.amenities.gym}
                    rules={item.rules}
                    star={item.star}
                  />
                ))}
             
            </tbody>
          </Table>
        )}
      </Container>
    </>
  );
};

export default ViewAllProperties;

import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BestsellerItem = ({ id, title, image, price }) => {
  return (
    <>
      <Card className="resort-card">
        <Card.Img variant="top" src={image[0]} alt={title + " images"} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{'$'}{price} per night</Card.Text>
          <Link to={`/properties/${id}`}>
            <Button variant="primary" className="detail">
              Detail
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default BestsellerItem;

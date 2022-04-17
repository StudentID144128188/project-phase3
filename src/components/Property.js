import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Property = ({ type, image }) => {
  return (
    <>
      <Link to={`/properties?type=${type}`} className="type-link">
        <Card className="type-card">
          <Card.Img variant="top" src={image[0]} alt={`${type}`} />
          <Card.Body className="type-name">
            <Card.Title>{type}{'s'}</Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default Property;

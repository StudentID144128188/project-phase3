import React from "react";
import ReactPlayer from "react-player";
import { Container, Row, Col } from "react-bootstrap";
import Resort from "../assets/videos/resort.mp4";
import Hotel from "../assets/videos/hotel.mp4";

const AdVideo = () => {
  return (
    <>
      <Container>
        <h2>Inspiration for your vacation</h2>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12} sm={12} lg={6}>
            <div className="player-wrapper">
              <ReactPlayer
                url={Resort}
                className="react-player"
                width="100%"
                height="100%"
                playing
                muted
                loop
              />
            </div>
          </Col>

          <Col xs={12} md={12} sm={12} lg={6}>
            <div className="player-wrapper">
              <ReactPlayer
                url={Hotel}
                className="react-player"
                width="100%"
                height="100%"
                playing
                muted
                loop
              />
            </div>
          </Col>
        </Row>
      </Container>


    </>
  );
};

export default AdVideo;

import React from "react";
import { Carousel, Row, Col, Container } from "react-bootstrap";

const CarouselSlides = () => {
  return (
    <Row className="mt-5">
      <Col style={{ padding: "2rem" }} className="mt-3">
        <div>
          <h2>Youth Excellence</h2>
          <p>
            At YTTS we believe in instilling good habits and strong community in
            junior athletes to condition long term success. Not only does Yukako
            take great care to improve the game of all her athletes; she also
            handles the tedious details involved with travel tournaments so
            athletes and their family can focus on the important things. With
            five years of experience in coaching and an uncompromising work
            ethic, Coach Yukako is driven to help young athletes achieve.
          </p>
        </div>
      </Col>
      <Col xs={12} md={6}>
        <Carousel
          interval={5000}
          controls={true}
          className="carousel-container"
        >
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_9652_2.jpg"
              alt="First slide"
              style={{ maxHeight: "800px", objectFit: "contain" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_0888.jpg"
              alt="Second slide"
              style={{ maxHeight: "800px", objectFit: "contain" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_4731.jpg"
              alt="Third slide"
              style={{ maxHeight: "800px", objectFit: "contain" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_4717.jpg"
              alt="Fourth slide"
              style={{ maxHeight: "800px", objectFit: "contain" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_9503.jpg"
              alt="Fifth slide"
              style={{ maxHeight: "800px", objectFit: "contain" }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_2940.jpg"
              alt="Fifth slide"
              style={{ maxHeight: "800px", objectFit: "contain" }}
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  );
};

export default CarouselSlides;

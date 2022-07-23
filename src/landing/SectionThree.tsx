import React from "react";
import { Carousel, Container } from "react-bootstrap";

const SectionThree = () => {
  return (
    <Container>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousel
          interval={5000}
          controls={true}
          className="mt-5"
          style={{ height: "700px", width: "500px" }}
        >
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_0888.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_4731.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_4717.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block img-fluid align-self-center"
              src="https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_9503.jpg"
              alt="Fourth slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default SectionThree;

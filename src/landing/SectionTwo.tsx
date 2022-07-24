import React, { RefAttributes } from "react";
import { Card, Col, Container, Ratio, Row } from "react-bootstrap";

const SectionTwo = () => {
  return (
    <Container>
      <section id="section-two" className="mt-5">
        <Row>
          <Col>
            <img style={{marginLeft: 'auto', marginRight:'auto', display:'block'}} 
            height={'650px'} width={'350px'}
            src='https://ytts-coaching.s3.us-east-2.amazonaws.com/IMG_3606.jpg'/>
          </Col>
          <Col>
          <Card>
            <Card.Header style={{backgroundColor:'#00A693'}}><h2>Coach Yukako Noi</h2></Card.Header>
            <Card.Body>
              <div style={{padding:'1rem'}}>
                <h2 className="display-4"></h2>
                <p>Graduated Florida State University {'(2017)'}</p>
                <p>&emsp;&emsp;-Sports Management - Major</p>
                <p>&emsp;&emsp;-Business - Minor</p>
                <p>Tennis coach at IMG academy {'(2017-2021)'}</p>
                <p>Tour coach for high performance junior players {'(2021-now)'}</p>
              </div>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        <div style={{marginTop:'2rem'}} className="ratio ratio-16x9">
          <iframe
            width="885"
            height="498"
            src="https://www.youtube.com/embed/9lYSIP1VsCQ"
            title="Senior Sit Down: Yukako Noi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </Container>
  );
};

export default SectionTwo;

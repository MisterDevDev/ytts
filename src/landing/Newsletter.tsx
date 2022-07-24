import React from "react";
import { Col, Form, Row, Container } from "react-bootstrap";

const Newsletter = () => {
    return(
        <section id="section-newsletter" className="bg-secondary py-5">
            <Container>
                <Form className="text-white">
                    <h2 className="display-4 text-center">Newsletter</h2>
					<p className="lead text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <Row>
                        <Col>
                            <Form.Label for='input-name' className="visually-hidden">Your Name:</Form.Label>
                            <Form.Control as='input' placeholder="Firstname Lastname" id="input-name"/>
                        </Col>
                        <Col>
                            <Form.Label for='input-email' className="visually-hidden">Your Email:</Form.Label>
                            <Form.Control type='email' placeholder="mail@example.com" id="input-email"/>
                        </Col>
                    </Row>
                    <div class="d-flex justify-content-between">
						<small class="form-text text-white w-75">You can unsubcribe from the mailing list at any time.</small>
						<button type="submit" class="btn btn-dark">Sign up</button>
					</div>
                </Form>
            </Container>
        </section>
    )
}

export default Newsletter
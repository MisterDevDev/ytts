import React from "react";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Reviews = () => {
  return (
    <section id="section-reviews" className="mt-5">
      <Row className="mb-3" style={{ padding: "0.75rem" }}>
        <h2>Reviews</h2>
        <Col xs={12} md={6} xl={3} className="gx-5 gy-3">
          <figure>
            <blockquote className="blockquote">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" />
                So awesome. Great person, beat hitting partner, kind, fun to
                travel with and always on top regarding information and
                organization. Couldn’t ask for a better travel coach!
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Chelsea <time dateTime="2020-09-01T12:00">(July 29 2022)</time>
            </figcaption>
          </figure>
        </Col>
        <Col xs={12} md={6} xl={3} className="gx-5 gy-3">
          <figure>
            <blockquote className="blockquote">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" />
                Yuki gives great feedback and is always ready to help me and her{" "}
                players! Had so much fun and learned a lot from her!
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Maddie <time dateTime="2020-09-01T12:00">(July 29 2022)</time>
            </figcaption>
          </figure>
        </Col>
        <Col xs={12} md={6} xl={3} className="gx-5 gy-3">
          <figure>
            <blockquote className="blockquote">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" />
                Good, she is very organized and she also maintains a great
                player to coach relationship because she is easy going and easy
                to talk to.
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Azuma <time dateTime="2020-09-01T12:00">(July 28 2022)</time>
            </figcaption>
          </figure>
        </Col>
        <Col xs={12} md={6} xl={3} className="gx-5 gy-3">
          <figure>
            <blockquote className="blockquote">
              <p>
                <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true" />
                Traveling with Yuki is super fun and full of learning. She's
                incredibly nice and never angry. She always monitors the
                schedule; she will never miss an entry, sign-in, or flight. I
                consider her the best traveling coach!
                <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true" />
              </p>
            </blockquote>
            <figcaption className="blockquote-footer">
              Mao <time dateTime="2020-09-01T12:00">(July 31 2022)</time>
            </figcaption>
          </figure>
        </Col>
      </Row>
    </section>
  );
};

export default Reviews;

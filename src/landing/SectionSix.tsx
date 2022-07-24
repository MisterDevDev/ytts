import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faQuoteLeft,
    faQuoteRight
} from '@fortawesome/free-solid-svg-icons'

const SectionSix = () => {

    return(
        <section id="section-reviews" className="mt-5">
            
            <Row style={{padding:'0.75rem'}}>
                <h2>Reviews</h2>
                <Col xs={12} md={6} xl={3} className='gx-5 gy-3'>
                    <figure>
                        <blockquote className='blockquote'>
                            <p>
                            <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Perspiciatis voluptates sint at! Laboriosam ducimus expedita 
                            reiciendis suscipit quibusdam ad ipsa distinctio voluptatem 
                            ullam adipisci id molestias, explicabo iusto atque.
                            <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Firstname Lastname
                            <time dateTime="2020-09-01T12:00">
                                (September 01 2020 12:00)
                            </time>
                        </figcaption>
                    </figure>
                </Col>
                <Col xs={12} md={6} xl={3} className='gx-5 gy-3'>
                    <figure>
                        <blockquote className='blockquote'>
                            <p>
                            <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Perspiciatis voluptates sint at! Laboriosam ducimus expedita 
                            reiciendis suscipit quibusdam ad ipsa distinctio voluptatem 
                            ullam adipisci id molestias, explicabo iusto atque.
                            <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Firstname Lastname
                            <time dateTime="2020-09-01T12:00">
                                (September 01 2020 12:00)
                            </time>
                        </figcaption>
                    </figure>
                </Col>
                <Col xs={12} md={6} xl={3} className='gx-5 gy-3'>
                    <figure>
                        <blockquote className='blockquote'>
                            <p>
                            <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Perspiciatis voluptates sint at! Laboriosam ducimus expedita 
                            reiciendis suscipit quibusdam ad ipsa distinctio voluptatem 
                            ullam adipisci id molestias, explicabo iusto atque.
                            <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Firstname Lastname
                            <time dateTime="2020-09-01T12:00">
                                (September 01 2020 12:00)
                            </time>
                        </figcaption>
                    </figure>
                </Col>
                <Col xs={12} md={6} xl={3} className='gx-5 gy-3'>
                    <figure>
                        <blockquote className='blockquote'>
                            <p>
                            <FontAwesomeIcon icon={faQuoteLeft} aria-hidden="true"/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Perspiciatis voluptates sint at! Laboriosam ducimus expedita 
                            reiciendis suscipit quibusdam ad ipsa distinctio voluptatem 
                            ullam adipisci id molestias, explicabo iusto atque.
                            <FontAwesomeIcon icon={faQuoteRight} aria-hidden="true"/>
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer">
                            Firstname Lastname
                            <time dateTime="2020-09-01T12:00">
                                (September 01 2020 12:00)
                            </time>
                        </figcaption>
                    </figure>
                </Col>
            </Row>
        </section>
    )
}

export default SectionSix
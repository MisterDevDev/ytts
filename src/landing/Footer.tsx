import React from "react";
import { Col, Container, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Inbox} from "react-bootstrap-icons";

const Footer = () => {
    return(
        <footer className="bg-light">
			<Container className="container py-3 py-sm-5">
				<Row>
					<Col xs={12} sm={6} lg={3}>
						<h6>Quick links</h6>
						<ul className="list-unstyled">
							<li><a href="#0">Home</a></li>
							<li><a href="#0">What's new?</a></li>
							<li><a href="#0">Support</a></li>
						</ul>
					</Col>
					<Col xs={12} sm={6} lg={3}>
						<h6>Information</h6>
						<ul className="list-unstyled">
							<li><a href="#0">About us</a></li>
							<li><a href="#0">Jobs</a></li>
							<li><a href="#0">Contact</a></li>
							<li><a href="#0">Partnership</a></li>
						</ul>
					</Col>
					<Col xs={12} sm={6} lg={3}>
						<h6>Follow us</h6>
						<ul className="list-unstyled">
							<li><a href="#0"><Facebook /> Facebook</a></li>
							<li><a href="#0"><Instagram /> Instagram</a></li>
							<li><a href="#0"><Twitter /> Twitter</a></li>
							<li><a href="#0"><Linkedin /> LinkedIn</a></li>
						</ul>
					</Col>
					<Col xs={12} sm={6} lg={3}>
						<h6>Mailing Address</h6>
						<address>
							<strong>YTTS, LLC</strong><br/>
							PO Box 2651<br/>
							Bonita Springs FL 34133<br/>
							<Phone /><span className="visually-hidden">Telephone:</span> <a href="tel:+12127363100">(212) 736-3100</a><br/>
							<Inbox /><span className="visually-hidden">Mail:</span> <a href="mailto:yttsllc@gmail.com">yttsllc@gmail.com</a>
						</address>
					</Col>
				</Row>
				<Row>
					<Col xs={12} sm={6} lg={9}>
						<ul className="list-inline">
							<li className="list-inline-item">&copy; 2022 YTTS, Inc.</li>
							<li className="list-inline-item">All rights reserved.</li>
							<li className="list-inline-item"><a href="#0" data-bs-toggle="modal" data-bs-target="#modal">Terms of use and privacy policy</a>.</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
    )
}

export default Footer
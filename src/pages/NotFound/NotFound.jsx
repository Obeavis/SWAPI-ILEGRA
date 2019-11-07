import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import stormtrooper from "../../assets/images/stormtrooper.png";
import "./NotFound.scss";

const NotFound = () => (
	<Container className="not-found">
		<Row>
			<Col lg={6} className="text-center text-lg-right">
				<h2 className="text-20 text-bold">404</h2>

				<p className="text-white text-12  text-uppercase">
					This is not the page you're looking for
				</p>
			</Col>
			<Col lg={6} className="text-center text-lg-left">
				<img
					alt="stormtrooper"
					src={stormtrooper}
					className="img-fluid"
				/>
			</Col>
		</Row>
	</Container>
)

export default NotFound;
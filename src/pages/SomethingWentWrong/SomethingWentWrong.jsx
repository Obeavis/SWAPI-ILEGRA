import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import somethingwentwrong from "../../assets/images/something-went-wrong.png";
import "./SomethingWentWrong.scss"

const SomethingWentWrong = () => (
	<Container className="something-went-wrong">
		<Row>
			<Col lg={6} className="text-center text-lg-right">
				<h2 className="text-20 text-bold">Ooops</h2>

				<p className="text-white text-12">
					something went wrong
				</p>
			</Col>
			<Col lg={6} className="text-center text-lg-left">
				<img
					alt="stormtrooper"
					src={somethingwentwrong}
					className="img-fluid"
				/>
			</Col>
		</Row>
	</Container>
)

export default SomethingWentWrong;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import films from "../../assets/images/all-films.jpg";
import people from "../../assets/images/all-people.jpg";
import starships from "../../assets/images/all-starships.jpg";
import vehicles from "../../assets/images/all-vehicles.jpg";
import species from "../../assets/images/all-species.jpg";
import planets from "../../assets/images/all-planets.jpg";
import "./RootSelect.scss";


const RootSelect = (props) => (
	<Container className="root-select">
		<Row className="justify-content-center">
			<Col xs={11} lg={6} xl={4} className="mb-4" onClick={() => props.history.push(`/films`)}>
				<div className="box">
					<img
						alt="Films"
						src={films}
						className="img-fluid"
					/>
					<span className="span-box">
						<span className="thumb-title text-bold text-center">
							Films
								</span>
					</span>
				</div>
			</Col>

			<Col xs={11} lg={6} xl={4} className="mb-4">
				<div className="box">
					<img
						alt="People"
						src={people}
						className="img-fluid"
					/>
					<span className="span-box">
						<span className="thumb-title text-bold text-center">
							People
								</span>
					</span>
				</div>
			</Col>

			<Col xs={11} lg={6} xl={4} className="mb-4" >
				<div className="box">
					<img
						alt=""
						src={starships}
						className="img-fluid"
					/>
					<span className="span-box">
						<span className="thumb-title text-bold text-center">
							Starships
								</span>
					</span>
				</div>
			</Col>
		</Row>

		<Row className="justify-content-center">
			<Col xs={11} lg={6} xl={4} className="mb-4">
				<div className="box">
					<img
						alt=""
						src={vehicles}
						className="img-fluid"
					/>
					<span className="span-box">
						<span className="thumb-title text-bold text-center">
							Vehicles
								</span>
					</span>
				</div>
			</Col>

			<Col xs={11} lg={6} xl={4} className="mb-4">
				<div className="box">
					<img
						alt=""
						src={species}
						className="img-fluid"
					/>
					<span className="span-box">
						<span className="thumb-title text-bold text-center">
							Species
								</span>
					</span>
				</div>
			</Col>
			
			<Col xs={11} lg={6} xl={4} className="mb-4">
				<div className="box">
					<img
						alt=""
						src={planets}
						className="img-fluid"
					/>
					<span className="span-box">
						<span className="thumb-title text-bold text-center">
							Planets
								</span>
					</span>
				</div>
			</Col>
		</Row>
	</Container>
);

export default withRouter(RootSelect);
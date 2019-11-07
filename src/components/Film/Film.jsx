import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { Col } from "react-bootstrap";
import Moment from 'react-moment';

const Film = (props) => (
	<Col lg={6} xl={4} className="mb-5" onClick={() => props.history.push(`/films/${props.film.episodeID}`)} >
		<div className="box-films box">
			<img
				alt={props.film.title}
				src={props.image}
				className="img-fluid"
			/>
			<span className="span-box">
				<span className="thumb-title text-bold text-center">{props.film.title}</span>
				<span className="thumb-date text-1 text-bold">
					<Moment format="LL">
						{new Date(props.film.releaseDate)}
					</Moment>
				</span>
			</span>
		</div>
	</Col>
);

Film.propTypes = {
	film: PropTypes.object
};

export default withRouter(Film);
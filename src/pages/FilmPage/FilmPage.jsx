import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NotFound from "../Not-Found/NotFound";
import SomethingWentWrong from "../SomethingWentWrong/SomethingWentWrong";
import BB8Loader from "../../components//BB8Loader/BB8Loader";
import StarWarsCrawlText from "../../components/StarWarsCrawlText/StarWarsCrawlText";


const FilmPage = (props) => {
	const [error, setError] = useState(false);

	useEffect(() => {
		const episode = parseInt(props.history.location.pathname.split('/')[2]);
		if (isNaN(episode)) {
			setError(true);
		} else {
			props.getFilm(episode);
		}
		// eslint-disable-next-line
	}, [props.history.location.pathname]);

	return (
		<div className="film-page">
			{error === true || props.film.filmNotFound === true ?
				<NotFound />
				: props.film.error === true ?
					<SomethingWentWrong />
					: Object.keys(props.film.film).length <= 0 ?
						<Container>
							<Row className="justify-content-center mt-5">
								<BB8Loader />
							</Row>
						</Container>
						:
						<Container>
							<Row>
								<Col className="StarWarsCrawlText">
									<StarWarsCrawlText film={props.film.film} />
								</Col>
							</Row>
						</Container>

			}
		</div>
	)
}
const mapStateToProps = state => ({
	film: state.film
});

const mapDispatchToProps = dispatch => {
	return {
		getFilm: (filmID) =>
			dispatch({
				type: "GET_FILM",
				filmID: filmID
			})
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(FilmPage)
);
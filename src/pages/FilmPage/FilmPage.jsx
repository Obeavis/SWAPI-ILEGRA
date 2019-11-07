import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import NotFound from "../NotFound/NotFound";
import SomethingWentWrong from "../SomethingWentWrong/SomethingWentWrong";
import BB8Loader from "../../components//BB8Loader/BB8Loader";
import StarWarsCrawlText from "../../components/StarWarsCrawlText/StarWarsCrawlText";


const FilmPage = (props) => {
	const [error, setError] = useState(false);
	const dispatch = useDispatch();

	useEffect(() => {
		const episode = parseInt(props.history.location.pathname.split('/')[2]);
		if (isNaN(episode)) {
			setError(true);
		} else {
			dispatch({
				type: "GET_FILM",
				filmID: episode
			});
		}
		// eslint-disable-next-line
	}, []);

	const film = useSelector(state => state.film);

	return (
		<div className="film-page">
			{film.error === true ?
				<SomethingWentWrong />
				: error === true || film.filmNotFound === true ?
					<NotFound />
					: film.film === null ?
						<Container>
							<Row className="justify-content-center mt-5">
								<BB8Loader/>
							</Row>
						</Container>
						: <Container>
							<Row>
								<Col className="StarWarsCrawlText">
									<StarWarsCrawlText film={film.film}/>
								</Col>
							</Row>
						</Container>

			}
		</div>
	)
}

export default withRouter(FilmPage);
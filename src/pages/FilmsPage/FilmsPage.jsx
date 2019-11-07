import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Films from "../../containers/Films/Films";
import SomethingWentWrong from "../SomethingWentWrong/SomethingWentWrong"
import BB8Loader from "../../components/BB8Loader/BB8Loader";

const FilmsPage = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch({ type: 'GET_ALL_FILMS' })
		// eslint-disable-next-line
	}, []);

	const allFilms = useSelector(state => state.allFilms);
	return (
		<div className="films">
			{allFilms.error === true ?
				<SomethingWentWrong />

				: allFilms.films === null ?
					<Container >
						<Row className="justify-content-center mt-5">
							<BB8Loader />
						</Row>
					</Container>
					: <Films films={allFilms.films} />
			}
		</div>
	)
}

export default withRouter(FilmsPage);
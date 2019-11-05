import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container, Row } from "react-bootstrap";
import Films from "../../containers/Films/Films";
import SomethingWentWrong from "../SomethingWentWrong/SomethingWentWrong"
import BB8Loader from "../../components/BB8Loader/BB8Loader";

const FilmsPage = (props) => {
	useEffect(() => {
		props.getAllFIlms();
		// eslint-disable-next-line
	}, [props.allFilms]);

	return (
		<div className="films">
			{props.allFilms.error === true ?

				<SomethingWentWrong />

				: Object.keys(props.allFilms.films).length <= 0 ?
					<Container>
						<Row className="justify-content-center mt-5">
							<BB8Loader />
						</Row>
					</Container>
					: <Films films={props.allFilms.films} />
			}
		</div>
	)
}


const mapStateToProps = state => ({
	allFilms: state.allFilms
});

const mapDispatchToProps = dispatch => {
	return {
		getAllFIlms: () =>
			dispatch({
				type: "GET_ALL_FILMS"
			})
	};
};

export default withRouter(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(FilmsPage)
);
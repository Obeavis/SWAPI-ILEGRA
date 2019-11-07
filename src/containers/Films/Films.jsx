import React from "react";
import PropTypes from "prop-types";
import { Container, Row } from "react-bootstrap";
import Film from "../../components/Film/Film";
import "./Films.scss";

function loadImage(idMovie) {
	try {
		return require(`../../assets/images/films/episode-${idMovie}.jpg`)
	} catch (error) {
		return require(`../../assets/images/no-image.png`)
	}
}

const Films = (props) => (
	<Container className="film-select">
		<Row>
			{props.films.map((film, i) => {
				return (
					<Film film={film} idMovie={i+1} image={loadImage(film.episodeID)} key={i}/>
				)
			})}
		</Row>
	</Container>
)

Films.propTypes = {
	Films: PropTypes.object
};
export default Films
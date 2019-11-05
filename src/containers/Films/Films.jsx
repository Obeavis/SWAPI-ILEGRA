import React from "react";
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
					<Film film={film} key={i} image={loadImage(film.episodeID)} />
				)
			})}
		</Row>
	</Container>
)

export default Films
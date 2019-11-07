import React from "react";
import PropTypes from "prop-types";
import Moment from 'react-moment';
import logo from "../../assets/images/star-wars-logo.png";
import "./StarWarsCrawlText.scss";

const StarWarsCrawlText = (props) => (
	<div className="star-wars-intro" key="aushauhsu">

		<p className="intro-text">
			A long time ago in a galaxy far, <br />
			far away...
        </p>

		<h2 className="main-logo">
			<img
				alt={props.film.title}
				src={logo}
			/>
		</h2>

		<div className="main-content">

			<div className="title-content">
				<p className="content-header">{`EPISODE ${props.film.episodeID}`} <br />
					{props.film.title}
				</p>
				<p className="content-body">
					{props.film.openingCrawl}
					<br /><br />
					<span>Direct by: {props.film.director}</span>
					<br /><br />
					<span>
						Release Date: <Moment format="LL">
							{new Date(props.film.releaseDate)}
						</Moment>
					</span>
				</p>

			</div>
		</div>
	</div>

);

StarWarsCrawlText.propTypes = {
	film: PropTypes.object
};

export default StarWarsCrawlText;
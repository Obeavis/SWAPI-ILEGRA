import React from "react";
import { withRouter } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import logo from "../../assets/images/star-wars-logo.png";
import "./Header.scss";

const Header = (props) => (
	<Navbar className="justify-content-center bg-primary header fixed-top">
		<Navbar.Brand>
			<img
				alt=""
				src={logo}
				width="150"
				height="100"
				className="img-fluid"
				onClick={() => props.history.push(`/main`)}
			/>
		</Navbar.Brand>

	</Navbar>
);

export default withRouter(Header);
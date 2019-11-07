import React from "react";
import { BrowserRouter, Route, Switch, Redirect, withRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Main from "../pages/Main/Main";
import FilmsPage from "../pages/FilmsPage/FilmsPage";
import FilmPage from "../pages/FilmPage/FilmPage";
import NotFound from "../pages/NotFound/NotFound";


const Routes = () => (
	<BrowserRouter>
		<Header />
		<div className="main">
			<Switch>
				<Redirect exact from="/" to="/main" />
				<Route
					path="/main"
					component={Main}
				/>
				<Route
					exact
					path="/films"
					component={FilmsPage}
				/>
				<Route
					path="/films/"
					component={FilmPage}
				/>
				<Route
					path="*"
					component={NotFound}
				/>
			</Switch>
		</div>
	</BrowserRouter>
)

export default withRouter(Routes);

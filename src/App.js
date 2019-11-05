import React from 'react';
import "./styles/main.scss";
import { BrowserRouter } from "react-router-dom";
import Routes from "./utils/Routes";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</div>
	);
}

export default App;

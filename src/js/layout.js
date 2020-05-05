import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Navbar } from "./component/navbar";
import { Toggle } from "./component/togglesection";
import { People } from "./views/people";
import { Vehicles } from "./views/vehicles";
import { Planets } from "./views/planets";
import { Single } from "./views/single";
import { Favorites } from "./views/favorites";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter>
				<ScrollToTop>
					<Navbar />
					<Toggle />
					<Switch>
						<Route exact path="/favorites" component={Favorites} />
						<Route exact path="/" component={Home} />
						<Route exact path="/people/page/:id" component={People} />
						<Route exact path="/vehicles/page/:id" component={Vehicles} />
						<Route exact path="/planets/page/:id" component={Planets} />
						<Route exact path="/:id" component={Single} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);

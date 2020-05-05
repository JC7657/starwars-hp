import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Toggle = () => {
	return (
		<div className="bottom-bar">
			<ul className="row section-toggle">
				<Link to="/people/page/1">
					<li className="char col toggle-option">People</li>
				</Link>
				<Link to="/vehicles/page/1">
					<li className="vehi col toggle-option">Vehicles</li>
				</Link>
				<Link to="/planets/page/1">
					<li className="plan col toggle-option">Planets</li>
				</Link>
			</ul>
		</div>
	);
};

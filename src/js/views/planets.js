import React, { useState, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { Page } from "../component/page";

export const Planets = () => {
	let pathArr = window.location.pathname.split("/");
	let currentPage = parseInt(pathArr[3]);
	const { store, actions } = useContext(Context);
	actions.setPlanets("https://swapi.co/api/planets/?page=" + currentPage);
	return (
		<div>
			<div className="card-container card-row row">
				{store.planets.map((item, i) => {
					return <Card className="col-3" key={i} index={i} name={item.name} />;
				})}
				;
			</div>
			<Page maxPage="7" />
		</div>
	);
};

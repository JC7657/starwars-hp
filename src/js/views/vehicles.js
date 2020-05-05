import React, { useState, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { Page } from "../component/page";

export const Vehicles = () => {
	let pathArr = window.location.pathname.split("/");
	let currentPage = parseInt(pathArr[3]);

	const { store, actions } = useContext(Context);
	actions.setVehicles("https://swapi.co/api/vehicles/?page=" + currentPage);

	return (
		<div>
			<div className="card-container card-row row">
				{store.vehicles.map((item, i) => {
					return <Card className="col-3" key={i} index={i} name={item.name} />;
				})}
				;
			</div>
			<Page maxPage="4" />
		</div>
	);
};

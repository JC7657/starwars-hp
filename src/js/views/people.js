import React, { useState, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { Page } from "../component/page";

export const People = () => {
	let pathArr = window.location.pathname.split("/");
	let currentPage = parseInt(pathArr[3]);
	const { store, actions } = useContext(Context);
	actions.setPeople("https://swapi.co/api/people/?page=" + currentPage);
	return (
		<div>
			<div className="card-container card-row row">
				{store.people.map((item, i) => {
					return <Card className="col-3" key={i} name={item.name} index={i} />;
				})}
				;
			</div>
			<Page maxPage="9" />
		</div>
	);
};

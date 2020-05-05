import React, { useState, useContext } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { Page } from "../component/page";

export const Favorites = () => {
	let pathArr = window.location.pathname.split("/");
	let currentPage = parseInt(pathArr[3]);
	const { store, actions } = useContext(Context);
	if (store.favorites == "") {
		return (
			<h2 className="welcome-home nofav">
				You dont have any favorites yet, add some by clicking <i className="far fa-star" />
			</h2>
		);
	} else {
		return (
			<div>
				<div className="card-container card-row row">
					{store.favorites.map((item, i) => {
						return <Card className="col-3" key={i} index={i} name={item.name} />;
					})}
					;
				</div>
			</div>
		);
	}
};

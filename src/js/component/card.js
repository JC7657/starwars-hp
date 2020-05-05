import React, { Component, useContext } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import getState from "../store/flux";

export const Card = props => {
	let singleURL = "/" + props.name.replace(/ /g, "_");
	const { store, actions } = useContext(Context);
	let handleStar = name => {
		if (store.favorites.map(a => a.name).includes(name)) {
			return <i className="fas fa-star" />;
		} else {
			return <i className="far fa-star" />;
		}
	};
	return (
		<div className="card">
			<Link to={singleURL}>
				<img
					className="card-img-top"
					src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081"
					alt="Card image cap"
				/>
			</Link>
			<div className="card-body">
				<Link to={singleURL}>
					<h5 className="card-title">{props.name}</h5>
				</Link>
				<Link to={singleURL}>
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore.
					</p>
				</Link>
				<br />
				<button
					onClick={() => {
						actions.setFavorites(props.index, props.name);
					}}
					className="add-fav">
					{handleStar(props.name)}
				</button>
			</div>
		</div>
	);
};
Card.propTypes = {
	name: PropTypes.string,
	index: PropTypes.number
};

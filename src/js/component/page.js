import React from "react";
import { Link } from "react-router-dom";

export const Page = props => {
	let pathArr = window.location.pathname.split("/");
	let currentPage = parseInt(pathArr[3]);
	let currentSection = pathArr[1];

	if (pathArr[3] === "1") {
		return (
			<div className="change-page">
				<p className="prev disabled">Previous Page</p>
				<Link to={"/" + currentSection + "/page/" + (currentPage + 1)}>
					<button className="next">Next Page</button>
				</Link>
			</div>
		);
	} else if (pathArr[3] === props.maxPage) {
		return (
			<div className="change-page">
				<Link to={"/" + currentSection + "/page/" + (currentPage - 1)}>
					<button className="prev">Previous Page</button>
				</Link>
				<p className="next disabled">Next Page</p>
			</div>
		);
	} else {
		return (
			<div className="change-page">
				<Link to={"/" + currentSection + "/page/" + (currentPage - 1)}>
					<button className="prev">Previous Page</button>
				</Link>
				<Link to={"/" + currentSection + "/page/" + (currentPage + 1)}>
					<button className="next">Next Page</button>
				</Link>
			</div>
		);
	}
};

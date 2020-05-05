import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = props => {
	const { store, actions } = useContext(Context);
	let convertedUrl = window.location.pathname.replace("/", "").replace(/_/g, " ");
	return (
		<div className="single-container media">
			<img
				src="https://images.squarespace-cdn.com/content/v1/5056f940e4b02b42cb31930f/1507391754360-ZMZR3VIWWNDCX6ONJ093/ke17ZwdGBToddI8pDm48kNvT88LknE-K9M4pGNO0Iqd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1USOFn4xF8vTWDNAUBm5ducQhX-V3oVjSmr829Rco4W2Uo49ZdOtO_QXox0_W7i2zEA/Placeholder+image.jpg?format=1500w"
				className="single-img align-self-center mr-3"
				alt="..."
			/>
			<div className="media-body">
				<div className="text-body">
					<h5 className="mt-0">{convertedUrl}</h5>
					<p>
						Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras
						purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi
						vulputate fringilla. Donec lacinia congue felis in faucibus.
					</p>
					<p className="mb-0">
						Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque
						penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					</p>
					<p>
						<i className="favstar far fa-star" />
					</p>
				</div>
			</div>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};

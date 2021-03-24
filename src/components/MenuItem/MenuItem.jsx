/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { withRouter } from 'react-router-dom';

import './MenuItem.scss';

const MenuItem = (props) => (
	<div
		className={`${props.size} menu-item`}
		onClick={() => {
			props.history.push(`${props.match.url}${props.linkUrl}`);
		}}
	>
		<div
			className="background-image"
			style={{
				backgroundImage: `url(${props.imageUrl})`,
			}}
		/>
		<div className="content">
			<h1 className="title">{props.title.toUpperCase()}</h1>
			<span className="subtitle">SHOP NOW</span>
		</div>
	</div>
);

export default withRouter(MenuItem);

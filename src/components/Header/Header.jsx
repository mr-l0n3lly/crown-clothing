/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';

import './Header.scss';

const Header = ({ currentUser }) => (
	<div className="header">
		<Link to="/" className="logo-container">
			<Logo className="logo" />
		</Link>
		<div className="options">
			<Link className="option" to="/shop">
				SHOP
			</Link>
			<Link className="option" to="/shop">
				CONTACT
			</Link>
			<Link className="option" to="/sign">
				{currentUser ? (
					// eslint-disable-next-line jsx-a11y/no-static-element-interactions
					<div
						className="option"
						// eslint-disable-next-line no-unused-vars
						onClick={(_e) => {
							auth.signOut();
						}}
					>
						SIGN OUT
					</div>
				) : (
					<Link className="option" to="/sign">
						SIGN IN
					</Link>
				)}
			</Link>
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);

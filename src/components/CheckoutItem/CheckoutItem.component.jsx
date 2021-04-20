/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

import { connect } from 'react-redux';
import { clearItemFromCart } from '../../redux/cart/cart.actions';

import './CheckoutItem.styles.scss';

// eslint-disable-next-line react/prop-types
const CheckoutItem = ({ cartItem, clearItem }) => {
	// eslint-disable-next-line react/prop-types
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<div className="arrow">&#10094;</div>
				<span className="value">{quantity}</span>
				<div className="arrow">&#10095;</div>
			</span>
			<span className="price">{price}</span>
			<div className="remove-button" onClick={() => clearItem(cartItem)}>
				&#10006;
			</div>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	clearItem: (item) => dispatch(clearItemFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);

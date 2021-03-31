import React from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem.component';

import './Cart.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// eslint-disable-next-line no-unused-vars,react/prop-types
const Cart = ({ cartItems, history, dispatch }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{/* eslint-disable-next-line react/prop-types */}
			{cartItems.length ? (
				// eslint-disable-next-line react/prop-types
				cartItems.map((item) => <CartItem key={item.id} item={item} />)
			) : (
				<span className="empty-message">Your cart is empty</span>
			)}
		</div>
		{/* eslint-disable-next-line react/prop-types */}
		<Button
			onClick={() => {
				// eslint-disable-next-line react/prop-types
				history.push('/checkout');
				dispatch(toggleCartHidden());
			}}
		>
			GO TO CHECKOUT
		</Button>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(Cart));

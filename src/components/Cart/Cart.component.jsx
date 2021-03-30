import React from 'react';

import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import Button from '../Button/Button';
import CartItem from '../CartItems/CartItem.component';

import './Cart.styles.scss';

// eslint-disable-next-line no-unused-vars,react/prop-types
const Cart = ({ cartItems }) => (
	<div className="cart-dropdown">
		<div className="cart-items">
			{
				// eslint-disable-next-line react/prop-types,array-callback-return
				cartItems.map((item) => (
					<CartItem key={item.id} item={item} />
				))
			}
		</div>
		<Button>GO TO CHECKOUT</Button>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(Cart);

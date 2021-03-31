import React from 'react';
import { connect } from 'react-redux';
import {
	selectCartItems,
	selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';

import './Checkout.styles.scss';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';

// eslint-disable-next-line react/prop-types
const Checkout = ({ cartItems, cartTotal }) => (
	<div className="checkout-page">
		<div className="checkout-header">
			<div className="header-block">
				<span>Product</span>
			</div>
			<div className="header-block">
				<span>Description</span>
			</div>
			<div className="header-block">
				<span>Quantity</span>
			</div>
			<div className="header-block">
				<span>Price</span>
			</div>
			<div className="header-block">
				<span>Remove</span>
			</div>
		</div>
		{
			// eslint-disable-next-line react/prop-types
			cartItems.map((cartItem) => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))
		}
		<div className="total">
			<span>TOTAL: {cartTotal}$</span>
		</div>
	</div>
);

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state),
	cartTotal: selectCartItemsTotal(state),
});

export default connect(mapStateToProps)(Checkout);

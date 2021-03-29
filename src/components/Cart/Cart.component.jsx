import React from 'react';
import Button from '../Button/Button';

import './Cart.styles.scss';

const Cart = () => (
	<div className="cart-dropdown">
		<div className="cart-items" />
		<Button>GO TO CHECKOUT</Button>
	</div>
);

export default Cart;

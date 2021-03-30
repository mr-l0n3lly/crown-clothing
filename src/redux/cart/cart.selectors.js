import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

// eslint-disable-next-line import/prefer-default-export
export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumulatedQuantity, cartItem) =>
				accumulatedQuantity + cartItem.quantity,
			0
		)
);

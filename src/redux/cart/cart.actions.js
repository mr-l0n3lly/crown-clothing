import cartActionTypes from './cart.types';

// eslint-disable-next-line import/prefer-default-export
export const toggleCartHidden = () => ({
	type: cartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
	type: cartActionTypes.ADD_ITEM,
	payload: item,
});

// const export removeItem = (item) => ({

// });

export const clearItemFromCart = (item) => ({
	type: cartActionTypes.CLEAR_ITEM_FROM_CART,
	payload: item,
});

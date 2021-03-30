import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import Button from '../Button/Button';
import './CollectionItem.scss';

// eslint-disable-next-line react/prop-types,no-shadow
const CollectionItem = ({ item, addItem }) => {
	// eslint-disable-next-line react/prop-types
	const { imageUrl, name, price } = item;
	return (
		<div className="collection-item">
			<div
				className="image"
				style={{
					backgroundImage: `url(${imageUrl})`,
				}}
			/>
			<div className="collection-footer">
				<span className="name">{name}</span>
				<span className="price">{price}</span>
			</div>
			<Button onClick={() => addItem(item)} inverted>
				Add to cart
			</Button>
		</div>
	);
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);

import React from 'react';

import ShopData from './Shop.data.js';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			collections: ShopData,
		};
	}

	render() {
		const { collections } = this.state;
		return (
			<div className="shop-page">
				{collections.map(({ id, ...otherData }) => (
					<PreviewCollection key={id} {...otherData} />
				))}
			</div>
		);
	}
}

export default ShopPage;

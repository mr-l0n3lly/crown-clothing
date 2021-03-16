import React from 'react';

import './PreviewCollection.scss';
import CollectionItem from '../CollectionItem/CollectionItem';

const PreviewCollection = ({ title, items }) => {
	return (
		<div className='preview-collection'>
			<h1 className='title'>{ title.toUpperCase() }</h1>
			<div className='preview'>
				{
					items
					.filter((item, index) => index < 4)
					.map(({ id, ...itemProps }) => {
						return (
							<CollectionItem key={ id } {...itemProps} />
						);
					})
				}
			</div>
		</div>
	);
}

export default PreviewCollection;
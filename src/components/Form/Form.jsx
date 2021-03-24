/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import './Form.scss';

// eslint-disable-next-line react/prop-types
const Form = ({ handleChange, label, ...otherProps }) => (
	<div className="group">
		<input className="form-input" onChange={handleChange} {...otherProps} />
		{label ? (
			// eslint-disable-next-line jsx-a11y/label-has-associated-control
			<label
				className={`${
					otherProps.value.length ? 'shrink' : ''
				} form-input-label`}
			>
				{label}
			</label>
		) : null}
	</div>
);

export default Form;

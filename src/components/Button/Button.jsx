import React from 'react';

import './Button.scss';

// eslint-disable-next-line react/prop-types
const Button = ({ children, isGoogleSignIn, ...otherProps }) => (
	// eslint-disable-next-line react/button-has-type
	<button
		className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
		// eslint-disable-next-line react/jsx-props-no-spreading
		{...otherProps}
	>
		{children}
	</button>
);

export default Button;

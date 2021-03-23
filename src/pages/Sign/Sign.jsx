import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp.component';
import './Sign.scss';

const Sign = () => (
	<div className="sign-in-and-sign-up">
		<SignIn />
		<SignUp />
	</div>
);

export default Sign;

import React from 'react';

import Form from '../Form/Form';
import Button from '../Button/Button';
import {signInWithGoogle} from "../../firebase/firebase.utils";

import './SignIn.scss';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className={ 'sign-in' }>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={ this.handleSubmit }>
                    <Form
                        type='email'
                        name={'email'}
                        value={ this.state.email }
                        handleChange={ this.handleChange }
                        label='email'
                        required
                    />
                    <Form
                        type="password"
                        name={'password'}
                        value={ this.state.password }
                        handleChange={ this.handleChange }
                        label='password'
                        required
                    />

                    <div className='buttons'>
                        <Button type='submit'>Sign In</Button>
                        <Button onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</Button>
                    </div>

                </form>
            </div>
        );
    }
}

export default SignIn;
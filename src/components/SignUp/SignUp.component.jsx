import React from 'react';

import Form from '../Form/Form';
import Button from "../Button/Button";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import './SignUp.style.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert('Password do not match');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={ this.handleSubmit }>
                    <Form
                        type='text'
                        name='displayName'
                        value={ displayName }
                        onChange={ this.handleChange }
                        label='Display name'
                        required
                    />
                    <Form
                        type='email'
                        name='email'
                        value={ email }
                        onChange={ this.handleChange }
                        label='Email'
                        required
                    />
                    <Form
                        type='password'
                        name='passwd'
                        value={ password }
                        onChange={ this.handleChange }
                        label='Password'
                        required
                    />
                    <Form
                        type='password'
                        name='passwdConfirm'
                        value={ confirmPassword }
                        onChange={ this.handleChange }
                        label='Confirm password'
                        required
                    />

                    <Button type='submit'>SIGN UP</Button>
                </form>
            </div>
        );
    }
}

export default SignUp;
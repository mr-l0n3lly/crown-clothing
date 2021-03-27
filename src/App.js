/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';
import Header from './components/Header/Header';
import Sign from './pages/Sign/Sign';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
	unsubscribeFromAuth = null;

	constructor(props) {
		super(props);

		this.state = {
			currentUser: null,
		};
	}

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = createUserProfileDocument(userAuth);

				(await userRef).onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
				});
			} else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Homepage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/sign" component={Sign} />
				</Switch>
			</div>
		);
	}
}

export default App;

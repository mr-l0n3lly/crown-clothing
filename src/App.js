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
	constructor() {
		super();

		this.state = {
			currentUser: null
		}
	}

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = createUserProfileDocument(userAuth);

				(await userRef).onSnapshot(snapshot => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data()
						}
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
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path='/' component={ Homepage } />
					<Route path='/shop' component={ ShopPage } />
					<Route path='/sign' component={ Sign } />
				</Switch>
			</div>
		);
	}
}

export default App;

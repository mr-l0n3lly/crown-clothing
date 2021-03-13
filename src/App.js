import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import ShopPage from './pages/Shop/Shop';

function App() {
  return (
    <div>
		<Switch>
			<Route exact path='/' component={ Homepage } />
			<Route path='/shop' component={ ShopPage } />
		</Switch>
    </div>
  );
}

export default App;

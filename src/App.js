import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import './App.css';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div>
		<Switch>
			<Route exact path='/' component={Homepage} />
		</Switch>
    </div>
  );
}

export default App;

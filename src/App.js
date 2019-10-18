import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/font/graphik/style.css';
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</Router>
	);
}

export default App;

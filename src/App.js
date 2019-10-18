import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import ContactUs from './pages/contactus';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/font/graphik/style.css';
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contactus" component={ContactUs} />
			</Switch>
		</Router>
	);
}

export default App;

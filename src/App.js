import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/home';
import ContactUs from './pages/contactus';
import Careers from './pages/careers';
import Platform from './pages/platform';
import Faq from './pages/faq';
import Developers from './pages/developers';
import AboutUs from './pages/aboutus';
import Dashboard from './pages/dashboard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/font/graphik/style.css';
function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/contactus" component={ContactUs} />
				<Route exact path="/careers" component={Careers} />
				<Route exact path="/platform" component={Platform} />
				<Route exact path="/developers" component={Developers} />
				<Route exact path="/faq" component={Faq} />
				<Route exact path="/aboutus" component={AboutUs} />
				<Route exact path="/dashboard" component={Dashboard} />
			</Switch>
		</Router>
	);
}

export default App;

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
import Assets from './pages/assets';
import Shortcuts from './pages/shortcuts';
import HowItWorks from './pages/howitworks';
import WarRoom from './pages/warroom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/font/graphik/style.css';
import NotFoundPage from './pages/404';
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
				<Route exact path="/about-us" component={AboutUs} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/assets" component={Assets} />
				<Route exact path="/shortcuts" component={Shortcuts} />
				<Route exact path="/how-it-works" component={HowItWorks} />
				<Route exact path="/warroom" component={WarRoom} />
				<Route component={NotFoundPage} />
			</Switch>
		</Router>
	);
}

export default App;

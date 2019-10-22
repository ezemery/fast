import React, { useState } from 'react';
import { SocialIcon } from 'react-social-icons';

import Header2 from '../../components/header2';
import Footer from '../../components/footer';
import Home from './home';
import Overview from './overview';
import Menu from './menu';

import './style.scss';

function Content(props) {
	const { parent, child, onMenuClicked } = props;
	switch (parent) {
		case '':
			return <Home onMenuClicked={e => onMenuClicked(e)}></Home>;
		case 'Overview':
			return <Overview {...props}></Overview>;
	}
}
function Developers() {
	const [category, setCategory] = useState({ parent: '', child: '' });
	return (
		<div className="developers-page">
			<Header2 buttonName="Setup Fast Checkout" mobileButtonName="Setup Fast Checkout"></Header2>
			<div className="developers-page-content">
				<Menu {...category} onMenuClicked={state => setCategory(state)}></Menu>
				<Content {...category} onMenuClicked={state => setCategory(state)}></Content>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default Developers;

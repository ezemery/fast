import React, { useState } from 'react';

import Header2 from '../../components/header2';
import Footer from '../../components/footer';
import Home from './home';
import Overview from './overview';
import Menu from './menu';

import './style.scss';

function Content(props) {
	const { parent, onMenuClicked } = props;
	switch (parent) {
		case '':
			return <Home onMenuClicked={e => onMenuClicked(e)}></Home>;
		case 'Overview':
			return <Overview {...props}></Overview>;
		default:
			break;
	}
}
function Developers() {
	const [category, setCategory] = useState({ parent: '', child: '' });
	return (
		<div className="developers-page">
			<Header2 buttonName="Fast Go" hasSubmenu={true}></Header2>
			<div className="developers-page-content">
				<Menu {...category} onMenuClicked={state => setCategory(state)}></Menu>
				<Content {...category} onMenuClicked={state => setCategory(state)}></Content>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default Developers;

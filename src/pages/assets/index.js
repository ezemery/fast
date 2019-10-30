import React, { useState } from 'react';

import Header2 from '../../components/header2';
import Footer from '../../components/footer';
import Logo from './logo';
import Colours from './colours';
import Typography from './typography';
import SideMenu from './menu';

import './style.scss';

function Content(props) {
	const { currentChild } = props;
	switch (currentChild) {
		case 'Logo':
			return <Logo></Logo>;
		case 'Colours':
			return <Colours></Colours>;
		case 'Typography':
			return <Typography></Typography>;
		default:
			return <Logo></Logo>;
	}
}
function Assets() {
	const [category, setCategory] = useState({ currentParent: 'BRAND GUIDELINES', currentChild: 'Logo' });
	return (
		<div className="assets-page">
			<Header2 buttonName="Fast Go" hasSubmenu={true}></Header2>
			<div className="assets-page-content">
				<SideMenu {...category} onMenuClicked={state => setCategory(state)}></SideMenu>
				<div className="assets-page-content-right">
					<Content {...category}></Content>
				</div>
			</div>
			<Footer></Footer>
		</div>
	);
}

export default Assets;

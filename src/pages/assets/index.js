import React, { useState } from 'react';
import Footer from '../../components/footer';
import Logo from './logo';
import Colours from './colours';
import Typography from './typography';
import Components from './components';
import Email from './email';
import SideMenu from './menu';

import './style.scss';
import Header from '../../components/header';

function Content(props) {
	const { currentChild, currentParent } = props;
	
	switch (currentParent) {
    case 'Logo':
      return <Logo></Logo>;
    case 'Brand Colors':
      return <Colours></Colours>;
    case 'Typography':
      return <Typography></Typography>;
    case 'Components':
      return <Components></Components>;
    case 'Email Template':
      return <Email></Email>;
    default:
      return <Logo></Logo>;
  }
}

function Assets() {
	const [category, setCategory] = useState({ currentParent: 'logo', currentChild: '' });
	return (
		<div className="assets-page">
			<Header themeType="2" buttonName="Fast Go" hasSubmenu={true}></Header>
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

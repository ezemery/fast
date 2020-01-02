import React, { useState } from 'react';
import Footer from '../footer';
import Logo from './logo';
import Colours from './colours';
import Typography from './typography';
import Components from './components';
import Email from './email';
import SideMenu from './menu';
import styled from 'styled-components'
const AssetStyle = styled.div`
.assets-page {
	&-content {
	  overflow: auto;
	  padding-top: 120px;
	  display: flex;
	  justify-content: center;
  
	  @media screen and (max-width: 600px) {
		display: block;
		  padding-top: 80px;
	  }
  
	  &-right {
		width: 880px;
		margin-left: 56px;
  
		@media screen and (max-width: 600px) {
		  margin-left: 25px;
		  margin-right: 25px;
		  width: auto;
		}
	  }
	}
  }`;
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
		<AssetStyle>
		<div className="assets-page">
			<Header themeType="2" buttonName="Go Fast" hasSubmenu={true}></Header>
			<div className="assets-page-content">
				<SideMenu {...category} onMenuClicked={state => setCategory(state)}></SideMenu>
				<div className="assets-page-content-right">
					<Content {...category}></Content>
				</div>
			</div>
			<Footer></Footer>
		</div>
		</AssetStyle>
	);
}

export default Assets;

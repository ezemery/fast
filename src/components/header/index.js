import React, { useState } from 'react';
import './style.scss';
import LogoWhite from '../../assets/img/logo_white.png';
import Hamburger from '../../assets/img/hamburger.png';
function Header() {
	let buttonName = 'Fast Go';
	return (
		<div className={'header'}>
			<div className={'header-container'}>
				<img className={'header-logo'} src={LogoWhite} />
				<div className={'header-menu'}>
					<a>How It Works</a>
					<a>Company</a>
					<a>For Business</a>
					<a>Help</a>
					<a>Fast Go</a>
				</div>
				<div className={'header-button'}>
					<div className="m-auto">{buttonName}</div>
				</div>
				<div className={'burger-button'}></div>
			</div>
		</div>
	);
}

export default Header;

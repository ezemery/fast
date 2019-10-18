import React, { useState, useEffect } from 'react';
import './style.scss';
import Logo from '../../assets/img/logo_gray.png';
import LogoMin from '../../assets/img/logo_min.png';
function Header2() {
	let buttonName = 'Go Fast';
	let mobileButtonName = 'Get Help';

	return (
		<div className={'header2'}>
			<div className={'header2-container'}>
				<img className={'header2-logo'} src={Logo} />
				<div className={'header2-menu'}>
					<a>How It Works</a>
					<a>Company</a>
					<a>For Business</a>
					<a>Help</a>
					<a>My Fast</a>
				</div>
				<div className={'header2-button'}>
					<div className="m-auto">{buttonName}</div>
				</div>
				<div className={'header2-mobile-button'}>{mobileButtonName}</div>

				<div className={'burger-button'}></div>
			</div>
		</div>
	);
}

export default Header2;

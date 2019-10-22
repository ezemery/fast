import React, { useState, useEffect } from 'react';
import './style.scss';
import Logo from '../../assets/img/logo_white.png';
import GrayLogo from '../../assets/img/logo_gray.png';
import LogoMin from '../../assets/img/logo_min.png';
function Header2(props) {
	let { type, buttonName, mobileButtonName } = props;

	return (
		<div
			className={'header2'}
			style={{ background: type == 'gray' ? '#363636' : 'white', color: type == 'gray' ? 'white' : '#363636' }}
		>
			<div className={'header2-container'}>
				<img className={'header2-logo'} src={type == 'gray' ? Logo : GrayLogo} />
				<div className={'header2-menu'}>
					<a>How It Works</a>
					<a>Company</a>
					<a>For Business</a>
					<a>Help</a>
				</div>
				<div
					className={'header2-button'}
					style={{
						background: type == 'gray' ? 'white' : '#363636',
						color: type == 'gray' ? '#363636' : 'white',
					}}
				>
					<div className="m-auto">{buttonName}</div>
				</div>
				<div className={'header2-mobile-button'}>{mobileButtonName}</div>

				<div className={'burger-button'}></div>
			</div>
		</div>
	);
}

export default Header2;

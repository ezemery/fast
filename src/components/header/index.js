import React, { useState, useEffect } from 'react';
import './style.scss';
import LogoWhite from '../../assets/img/logo_white.png';
import LogoMin from '../../assets/img/logo_min.png';
function Header() {
	let buttonName = 'Fast Go';
	let mobileButtonName = 'Install Fast';
	const [top, setTop] = useState(true);
	useEffect(() => {
		const eventHandler = e => {
			console.log('mouse move', e);
			e.clientY > 0 ? setTop(false) : setTop(true);
			setTop(false);
		};
		window.addEventListener('touchmove', eventHandler);

		return () => {
			window.removeEventListener('touchmove', eventHandler);
		};
	}, []);
	return (
		<div className={top ? 'header' : 'header white'}>
			<div className={top ? 'header-container' : 'header-container white'}>
				<img className={'header-logo'} src={top ? LogoWhite : LogoMin} />
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
				{top ? null : <div className={'header-mobile-button'}>{mobileButtonName}</div>}

				<div className={top ? 'burger-button' : 'burger-button white'}></div>
			</div>
		</div>
	);
}

export default Header;

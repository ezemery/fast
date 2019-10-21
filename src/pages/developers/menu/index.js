import React from 'react';
import { FaWindows, FaMobileAlt, FaStar, FaAlignLeft } from 'react-icons/fa';

import './style.scss';

function Menu(props) {
	const { parent, child, onMenuClicked } = props;
	const childMenuItems = [
		'Authentication',
		'Handling Errors',
		'Expanding Objects',
		'Idempotent Requests',
		'Request IDs',
	];
	return (
		<div className="developers-menu">
			<div className="developers-menu-heading">API DOCS</div>
			<div className={'developers-menu-item parent ' + (parent == 'Overview' && child === '' ? 'active' : '')}>
				<FaWindows size={13}></FaWindows>
				<span>Overview</span>
			</div>
			{childMenuItems.map(item => {
				return (
					<div
						key={item}
						className={
							'developers-menu-item child ' + (parent == 'Overview' && child === item ? 'active' : '')
						}
						onClick={() => {
							onMenuClicked({ parent: 'Overview', child: item });
						}}
					>
						{item}
					</div>
				);
			})}

			<div className="developers-menu-item parent">
				<FaAlignLeft size={13}></FaAlignLeft>
				<span>Api Reference</span>
			</div>
			<div className="developers-menu-item parent">
				<FaMobileAlt size={13}></FaMobileAlt>
				<span>My Fast Apps</span>
			</div>
			<div className="developers-menu-item parent">
				<FaStar size={13}></FaStar>
				<span>New Apps</span>
			</div>
		</div>
	);
}

export default Menu;

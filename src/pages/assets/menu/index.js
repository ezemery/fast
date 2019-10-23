import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';

import './style.scss';
const menu = (
	<Menu>
		<Menu.Item>BRAND GUIDELINES</Menu.Item>
		<Menu.Item>ASSETS LIBRARY</Menu.Item>
	</Menu>
);
const submenu = (
	<Menu>
		<Menu.Item>Logo</Menu.Item>
		<Menu.Item>Colours</Menu.Item>
		<Menu.Item>Typography</Menu.Item>
	</Menu>
);
const SubMenu = props => {
	const { text, children, currentParent, currentChild, onMenuClicked } = props;
	return (
		<div>
			<div className="assets-menu-heading"> {text}</div>
			{children.map(child => {
				return (
					<div
						key={child}
						className={
							'assets-menu-item  ' + (currentChild === child && currentParent === text ? 'active' : '')
						}
						onClick={() => {
							onMenuClicked({ currentParent: text, currentChild: child });
						}}
					>
						{child}
					</div>
				);
			})}
		</div>
	);
};
function SideMenu(props) {
	const { currentParent, currentChild } = props;
	const data = [
		{
			text: 'BRAND GUIDELINES',
			children: ['Logo', 'Colours', 'Font Families', 'Typography', 'Iconography', 'Buttons'],
		},
		{
			text: 'ASSETS LIBRARY',
			children: ['Templates', 'Forms', 'Illustrations', 'Videos', 'Imagery', 'Iconography'],
		},
	];
	return (
		<React.Fragment>
			<div className="assets-menu">
				{data.map(item => {
					return <SubMenu key={item.text} {...item} {...props}></SubMenu>;
				})}
			</div>
			<div className="assets-menu-mobile">
				<Dropdown overlay={menu}>
					<a className="assets-menu-mobile-item" href="#">
						{currentParent} <Icon type="caret-down" />
					</a>
				</Dropdown>
				<Dropdown overlay={submenu}>
					<a className="assets-menu-mobile-item" href="#">
						{currentChild} <Icon type="caret-down" />
					</a>
				</Dropdown>
			</div>
		</React.Fragment>
	);
}

export default SideMenu;
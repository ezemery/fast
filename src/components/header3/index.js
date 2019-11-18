import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import './style.scss';
import LogoGray from '../../assets/img/logo_gray.png';

const menu1 = (
	<Menu>
		<Menu.Item>
			<a>Shortcuts</a>
		</Menu.Item>
	</Menu>
);
const menu2 = (
	<Menu>
		<Menu.Item>
			<a>Business1</a>
		</Menu.Item>
		<Menu.Item>
			<a>Business2</a>
		</Menu.Item>
		<Menu.Item>
			<a>Business3</a>
		</Menu.Item>
	</Menu>
);
const menu3 = (
	<Menu>
		<Menu.Item>
			<a>Developers1</a>
		</Menu.Item>
		<Menu.Item>
			<a>Developers2</a>
		</Menu.Item>
		<Menu.Item>
			<a>Developers3</a>
		</Menu.Item>
	</Menu>
);
function Header3() {
	let buttonName = 'Install Fast';
	let mobileButtonName = 'Install Fast';

	return (
		<div className={'header3'}>
			<div className={'header3-container'}>
				<img className={'header3-logo'} src={LogoGray} />
				<div className={'header3-menu'}>
					<Dropdown overlay={menu1}>
						<a className="ant-dropdown-link" href="#">
							For Users <Icon type="down" />
						</a>
					</Dropdown>
					<Dropdown overlay={menu2}>
						<a className="ant-dropdown-link" href="#">
							For Business <Icon type="down" />
						</a>
					</Dropdown>
					<Dropdown overlay={menu3}>
						<a className="ant-dropdown-link" href="#">
							For Developers <Icon type="down" />
						</a>
					</Dropdown>

					<a>Warboard</a>
				</div>
				<div className={'header3-button'}>
					<div className="m-auto">{buttonName}</div>
				</div>

				<div className={'burger-button'}></div>
			</div>
		</div>
	);
}

export default Header3;

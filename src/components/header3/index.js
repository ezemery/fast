import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components'
import LogoGray from '../../assets/img/logo_gray.png';

const Header3Style = styled.div`
.header3 {
	position: fixed;
	height: 80px;
	background: white;
	color: #363636;
	display: flex;
	width: 100%;
	z-index: 99;
	top: 0;
	a {
	  color: #363636;
	}
  
	&-container {
	  min-width: 1000px;
	  margin: auto;
	  display: flex;
	}
  
	&-logo {
	  height: 30px;
	  margin: auto;
	  cursor: pointer;
	}
  
	&-menu {
	  display: flex;
	  margin: auto;
  
	  a {
		margin-right: 60px;
		cursor: pointer;
	  }
  
	  a:last-child {
		margin-right: 0;
	  }
	}
  
	&-button {
	  margin-left: auto;
	  width: 128px;
	  height: 48px;
	  background: #363636;
	  font-family: 'Graphik';
	  font-size: 16px;
	  line-height: 18px;
	  text-align: center;
	  color: #fff;
	  border: 1px solid #363636;
	  border-radius: 5px;
	  display: flex;
	  cursor: pointer;
  
	  &:hover {
		background: white;
		color: #363636;
	  }
	}
  
   
  
	.burger-button {
	  display: none;
	}
  }
  
  @media screen and (max-width: 600px) {
	.header3 {
	  @keyframes fadein {
		from {
		  opacity: 0;
		}
  
		to {
		  opacity: 1;
		}
	  }
  
	  &-container {
		min-width: auto;
		margin-left: 28px;
		display: flex;
		width: 100%;
	  }
  
	  &-container-white {
		margin-top: 28px;
	  }
  
	  &-logo {
		height: 30px;
		margin: 0;
		cursor: pointer;
		margin-top: auto;
		margin-bottom: auto;
	  }
  
	  &-menu {
		display: none;
	  }
  
	  &-button {
		font-size: 16px;
		line-height: 18px;
		padding: 9px 10px;
		margin-left: auto;
	  }
  
	  .burger-button {
		margin-left: 20px;
		margin-top: auto;
		margin-bottom: auto;
		margin-right: 20px;
		display: block;
		width: 30px;
		height: 20px;
		background: url('../../assets/img/hamburger_gray.png') no-repeat center center;
		background-size: 100% 100%;
	  }
	}
  }
`;

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
		<Header3Style>
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
		</Header3Style>
	);
}

export default Header3;

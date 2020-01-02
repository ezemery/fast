import React, {useState} from 'react';
import { MdClose, MdExpandMore } from 'react-icons/md';
import { Menu, Icon } from 'antd';
import { takeRight } from 'lodash';
import  Link from 'next/link';
import styled from 'styled-components'
const HamburgerMenuStyle = styled.div`
.hamburger-menu {
	visibility: hidden;
	-webkit-transition: opacity .35s, visibility .35s;
	transition: opacity .35s, visibility .35s;
	overflow: hidden;
	position: fixed;
	width: 100vw;
	height: 0;
	background: white;
	top: 0;
	left: 0;
  
	&.visible {
	  opacity: 1;
	  visibility: visible;
	  height: auto;
	  z-index: 1;
	  z-index: 99999;
	  padding-bottom: 70px;
	}
  
	&-header {
	  padding: 15px;
	  display: flex;
	}
  
	&-button {
	  margin-left: auto;
	}
  
	&-close {
	  margin-left: 10px;
	}
  
	&-overlay {
	  display: none;
  
	  &.visible {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: block;
		z-index: 9;
	  }
	}
  
	&-button {
	  color: white;
	  background: #2f2f2f;
	  border-radius: 5px;
	  font-family: 'Graphik';
	  font-style: normal;
	  font-weight: 500;
	  font-size: 16px;
	  line-height: 18px;
	  text-align: center;
	  padding: 13px 29px;
	}
  
	&-content {
	  color: #363636;
	  font-family: 'Graphik';
	  font-style: normal;
	  font-weight: 500;
	  font-size: 21px;
	  line-height: 23px;
	  display: grid;
  
	  .ant-menu-submenu-title,
	  .ant-menu-item, a {
		padding-bottom: 15px !important;
		height: 70px !important;
		font-size: 20px !important;
	  }
  
	  .ant-menu-item:hover,
	  .ant-menu-item-active,
	  .ant-menu:not(.ant-menu-inline) .ant-menu-submenu-open,
	  .ant-menu-submenu-active,
	  .ant-menu-submenu-selected,
	  .ant-menu-item-selected,
	  .ant-menu-submenu-title:hover {
		color: #7CB342 !important;
	  }
  
	  .ant-menu-submenu-arrow {
		width: 30px !important;
		top: 20% !important;
	  }
  
	  .ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::before {
		width: 12px !important;
		transform: rotate(-45deg) translateX(5px) !important;
	  }
  
	  .ant-menu-submenu-inline>.ant-menu-submenu-title .ant-menu-submenu-arrow::after {
		transform: rotate(45deg) translateX(-5px) !important;
		width: 12px !important;
	  }
  
	  .ant-menu-submenu-inline.ant-menu-submenu-active>.ant-menu-submenu-title .ant-menu-submenu-arrow {
		&::before,
		&::after {
		  background: linear-gradient(to right, #7CB342, #7CB342) !important;
		}
	  }
  
	  .ant-menu-submenu-inline.ant-menu-submenu-open>.ant-menu-submenu-title .ant-menu-submenu-arrow::before {
		transform: rotate(45deg) translateX(5px) !important;
		width: 12px !important;
		background: linear-gradient(to right, #7CB342, #7CB342) !important;
	  }
  
	  .ant-menu-submenu-inline.ant-menu-submenu-open>.ant-menu-submenu-title .ant-menu-submenu-arrow::after {
		transform: rotate(-45deg) translateX(-5px) !important;
		width: 12px !important;
		background: linear-gradient(to right, #7CB342, #7CB342) !important;
	  }
	}
  
	&-item {
	  padding: 20px 30px;
	  color: #363636;
	  display: flex;
  
	  &:hover {
		text-decoration: none;
	  }
  
	  &-button {
		margin-left: auto;
	  }
	}
  }
`;
const { SubMenu } = Menu;

function HamburgerMenu(props) {
	let { show, hide } = props;
	const items = [
    { text: 'How It Works', url: '/how-it-works', children: [] },
    {
      text: 'Company',
      url: '/#',
      children: [
        { text: 'About Us', url: '/about-us' },
        { text: 'Products', url: '/#' },
        { text: 'Careers', url: '/careers' },
        { text: 'Brands and Assets', url: '/assets' },
      ],
    },
    { text: 'For Business', url: '/platform', children: [] },
    { text: 'Help', url: '/faq', children: [] },
  ];
	const [openKeys, setOpenKeys] = useState([]);
	const onOpenChange = openKeys => {
		setOpenKeys(takeRight(openKeys, 1));
  };
	return (
	<HamburgerMenuStyle>
      <div className={`hamburger-menu ${show ? 'visible' : ''}`}>
        <div className="hamburger-menu-header">
          <div className="hamburger-menu-button">Go Fast</div>
          <div
            className="hamburger-menu-close"
						onClick={() => {
							setOpenKeys([]);
              hide();
            }}
          >
            <MdClose color="black" size={45} />
          </div>
        </div>
				<div className="hamburger-menu-content">
					<Menu
						mode="inline"
						openKeys={openKeys}
						onOpenChange={onOpenChange}
						style={{ width: '100%', fontSize: 30 }}
					>
						{
							items.map((item, indx) => {
								
								if (item.children.length > 0) {
									return (
										<SubMenu
											key={item.text}
											title={item.text}>
												{
												item.children.map(child => {
													return (
														<Menu.Item key={child.url}>
															<Link href={child.url}>{child.text}</Link>
														</Menu.Item>
														);
												})
											}
											</SubMenu>
										);
								} else {
									return (
											<Menu.Item key={item.url}>
												 <Link href={item.url}>{item.text}</Link>
											</Menu.Item>
									);
								}								
							})
						}
					</Menu>					
        </div>
      </div>
      <div className={`hamburger-menu-overlay ${show ? 'visible' : ''}`} onClick={()=>hide()}></div>
	</HamburgerMenuStyle>
  );
}

export default HamburgerMenu;

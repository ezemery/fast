import React, {useState} from 'react';
import { MdClose, MdExpandMore } from 'react-icons/md';
import { Menu, Icon } from 'antd';
import { takeRight } from 'lodash';
import { Link} from 'react-router-dom';
import './style.scss';
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
    <React.Fragment>
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
							items.map(item => {
								if (item.children.length > 0) {
									return 	<SubMenu
											key={item.text}
											title={item.text}
									>
										{
											item.children.map(child => {
												return (
							// <Link to={child.url} key={child.text}>{child.text}</Link>
                        <Menu.Item key={child.url} >
							 <Link to={child.url}> {child.text}</Link>
						</Menu.Item>
                        );
											})
										}
										</SubMenu>
									;
								} else {
									return <Menu.Item key={item.url}>
										 <Link to={item.url}> {item.text}</Link>
										</Menu.Item>;
								}								
							})
						}
					</Menu>					
        </div>
      </div>
      <div className={`hamburger-menu-overlay ${show ? 'visible' : ''}`} onClick={()=>hide()}></div>
    </React.Fragment>
  );
}

export default HamburgerMenu;

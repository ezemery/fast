import React, {useState, useEffect} from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { FaFont, FaHeart, FaPalette, FaEnvelope, FaLayerGroup } from 'react-icons/fa';
import './style.scss';
const { SubMenu } = Menu;

const menu = (
	<Menu>
		<Menu.Item>Logo</Menu.Item>
		<Menu.Item>Typography</Menu.Item>
		<Menu.Item>Brand Colours</Menu.Item>
		<Menu.Item>Components</Menu.Item>
		<Menu.Item>Email Template</Menu.Item>
	</Menu>
);
const submenu = (
	<Menu>
		<Menu.Item>Brand Logo</Menu.Item>
		<Menu.Item>Logo guidelines</Menu.Item>
	</Menu>
);
const DesktopMenu = props => {
	const { data, onMenuClicked } = props;
	return (
    <Menu
      defaultSelectedKeys={['logo']}
      defaultOpenKeys={['logo']}
      mode="inline"
		>
			{
				data.map((item) => {
					if (item.children.length === 0) {
						 return <Menu.Item
               key={item.text}
               onClick={() => {
                 onMenuClicked({ currentParent: item.text, currentChild: '' });
               }}
             >             
                 {item.img}
                 <span>{item.text}</span>            
             </Menu.Item>;
					} else {
						return  <SubMenu
							key={item.text}
							title={
								<span>
									{item.img}
									<span>{item.text}</span>
								</span>
							}
							onTitleClick={() => {
								onMenuClicked({ currentParent: item.text, currentChild: '' });
							}}
						>
							{
								item.children.map(child => {
									return (
                    <Menu.Item
                      key={child}
                      onClick={() => {
                        onMenuClicked({
                          currentParent: item.text,
                          currentChild: child,
                        });
                      }}
                    >
                      {child}
                    </Menu.Item>
                  ); 
								})
							}
						</SubMenu>
					}
				})
			}     
    </Menu>
  );
};
function SideMenu(props) {
	const { currentParent, currentChild } = props;
	const data = [
    {
      text: 'Logo',
      img: <FaHeart size={12} />,
      children: ['Brand Logo', 'Logo guidelines'],
    },
    {
      text: 'Typography',
			img: <FaFont size={12}/>,
      children: ['Typeface', 'Font sizes'],
    },
    {
      text: 'Brand Colors',
			img: <FaPalette size={12}/>,
      children: ['Primary colours', 'Secondary colours', 'Grey colours'],
    },
    {
      text: 'Components',
			img: <FaLayerGroup size={12}/>,
      children: [
        'Buttons',
        'Forms',
        'Header',
        'Footer',
        'Breadcrumbs',
        'Cards',
        'Code Picker',
      ],
    },
    {
      text: 'Email Template',
			img: <FaEnvelope size={12}/>,
      children: [],
    },
  ];
		const [top, setTop] = useState(true);
    useEffect(() => {
      const eventHandler = e => {
        console.log('mouse move', e);
        window.pageYOffset > 0 ? setTop(false) : setTop(true);
      };
      window.addEventListener('touchmove', eventHandler);
      return () => {
        window.removeEventListener('touchmove', eventHandler);
      };
    }, []);
    useEffect(() => {
      const eventHandler = e => {
        console.log('mouse move', e);
        window.pageYOffset > 0 ? setTop(false) : setTop(true);
      };
      window.addEventListener('scroll', eventHandler);
      return () => {
        window.removeEventListener('scroll', eventHandler);
      };
    }, []);
	return (
		<React.Fragment>
			<div className="assets-menu">
				 <DesktopMenu data={data} {...props}></DesktopMenu>
				
			</div>
			<div className={top ? "assets-menu-mobile" : "assets-menu-mobile scroll"}>
				<Dropdown overlay={menu}>
					<a className="assets-menu-mobile-item">
						<span>Logo</span> <span><Icon type="caret-down" /></span>
					</a>
				</Dropdown>
				<Dropdown overlay={submenu}>
					<a className="assets-menu-mobile-item" >
						<span>Brand Logo</span> <span><Icon type="caret-down" /></span>
					</a>
				</Dropdown>
			</div>
		</React.Fragment>
	);
}

export default SideMenu;

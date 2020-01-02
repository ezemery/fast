import React, {useState, useEffect} from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { FaFont, FaHeart, FaPalette, FaEnvelope, FaLayerGroup } from 'react-icons/fa';
import styled from 'styled-components'
const SideMenuStyle = styled.div`
.assets-menu {
  border-radius: 15px;
  width: 326px;
  text-align: left;
  padding: 15px;
  margin-bottom: 20px;

  .ant-menu {
    background: #F9FAFC;

    &-root {
      border: none;
      border-radius: 10px;
      padding: 20px;
      color: #2f2f2f;
      font-family: 'Graphik';
    }
  }


  .ant-menu-item:hover,
  .ant-menu-submenu-title:hover {
    color: #7CB342 !important;
  }

  .ant-menu-submenu-selected {
    color: #7CB342 !important;

    &:hover {
      color: white;
    }
  }

  .ant-menu-item-selected {
    background: #7CB342 !important;
    border-radius: 5px;
    color: white;

    &:after {
      border: none;
    }

    &:hover {
      color: white !important;
    }
  }

  .ant-menu-submenu-title .ant-menu-submenu-arrow::before,
  .ant-menu-submenu-title .ant-menu-submenu-arrow::after {
    width: 0;
  }

  .ant-menu-submenu-arrow {

    &::before,
    &::after {
      width: 0;
    }
  }

  .ant-menu-item svg,
  .ant-menu-submenu-title svg {
    margin-right: 10px;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }

  &-mobile {
    display: none;

    &.scroll {
      box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);
    }

    @media screen and (max-width: 600px) {
      background: #f9fafc;
      display: block;
      padding: 0;
      height: 53px;
      padding: 15px 25px;
      position: fixed;
      width: 100%;
      top: 75px;
      line-height: 16px;

      .assets-menu-mobile-item {
        margin-right: 20px;
        color: #363636;
        text-decoration: none;

        span {
          vertical-align: text-bottom;
        }

        &:first-child {
          color: #8d8d8d;
        }

        &:after {
          content: '';
          position: absolute;
          background: url('../../../assets/img/menu_mobile_split.png') no-repeat center center;
          background-size: 100% 100%;
          width: 11px;
          height: 26px;
          margin-left: 3px;
        }
      }
    }
  }

  &-heading {
    font-family: 'Graphik';
    font-size: 12px;
    line-height: 120%;
    color: #88d20f;
    margin-bottom: 14px;
    padding-left: 18px;
    padding-top: 25px;
  }

  &-item {
    padding: 8px 17px;
    font-family: 'Graphik';
    font-size: 14px;
    line-height: 25px;
    border-radius: 5px;
    width: 100%;
    color: #363636;
    cursor: pointer;

    span {
      margin-left: 10px;
    }

    &.active {
      background: #7cb342;
      color: white;
    }

    &:hover {
      background: #eff2f7;
      color: #363636;
    }

    &.child {
      margin-left: 31px;
      width: calc(100% - 31px);
    }
  }
}
`;
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
  
        window.pageYOffset > 0 ? setTop(false) : setTop(true);
      };
      window.addEventListener('touchmove', eventHandler);
      return () => {
        window.removeEventListener('touchmove', eventHandler);
      };
    }, []);
    useEffect(() => {
      const eventHandler = e => {
        window.pageYOffset > 0 ? setTop(false) : setTop(true);
      };
      window.addEventListener('scroll', eventHandler);
      return () => {
        window.removeEventListener('scroll', eventHandler);
      };
    }, []);
	return (
		<React.Fragment>
      <SideMenuStyle>
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
      </SideMenuStyle>
		</React.Fragment>
	);
}

export default SideMenu;

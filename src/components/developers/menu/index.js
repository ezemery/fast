import React, { useState, useEffect } from 'react';
import { FaWindows, FaMobileAlt, FaStar, FaAlignLeft } from 'react-icons/fa';
import { Popover, Icon } from 'antd';
import styled from 'styled-components'
const MenuStyle = styled.div`
.developers-menu {
	background: #f9fafc;
	border-radius: 10px;
	width: 286px;
	height: 444px;
	padding: 34px 24px 31px 25px;
  
  
  
	@media screen and (max-width: 600px) {
	  display: none;
	}
  
	&-popover {
	  display: grid;
	  width: 177px;
  
	  &-item {
		font-family: 'Graphik';
		font-size: 14px;
		line-height: 25px;
		color: #363636;
		width: 100%;
		padding: 5px;
		border-radius: 5px;
		padding-left: 15px;
  
		svg {
		  margin-right: 15px;
		}
  
		&:hover,
		&:active {
		  text-decoration: none;
		  background: #7cb342;
		  color: white;
		}
	  }
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
		z-index: 1;
		line-height: 16px;
  
		.developers-menu-mobile-item {
		  margin-right: 20px;
		  color: #363636;
		  text-decoration: none;
  
		  span {
			vertical-align: middle;
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

function Menu(props) {
	const { parent, child, onMenuClicked } = props;
	const [parentVisible, setParentVisible] = useState(false);
	const [childVisible, setChildVisible] = useState(false);
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
	const childMenuItems = [
		'Authentication',
		'Handling Errors',
		'Expanding Objects',
		'Idempotent Requests',
		'Request IDs',
	];
	const hideParent = () => {
		setParentVisible(false);
	};
	const parentMenu = (
		<div className="developers-menu-popover">
			<a
				className="developers-menu-popover-item"
				onClick={() => {
					hideParent();
				}}
				href="/#"
			>
				<FaWindows size={13} />
				API DOCS
			</a>
			<a
				className="developers-menu-popover-item"
				onClick={() => {
					hideParent();
				}}
				href="/#"
			>
				<FaAlignLeft size={13} />
				Api Reference
			</a>
			<a
				className="developers-menu-popover-item"
				onClick={() => {
					hideParent();
				}}
				href="/#"
			>
				<FaMobileAlt size={13} />
				My Fast Apps
			</a>
			<a
				className="developers-menu-popover-item"
				onClick={() => {
					hideParent();
				}}
				href="/#"
			>
				<FaStar size={13} />
				New Apps
			</a>
		</div>
	);
	const subMenu = (
		<div className="developers-menu-popover">
			<a className="developers-menu-popover-item" href="/#">
				Overview
			</a>
			<a className="developers-menu-popover-item" href="/#">
				Authentication
			</a>
			<a className="developers-menu-popover-item" href="/#">
				Handling Errors
			</a>
			<a className="developers-menu-popover-item" href="/#">
				Expanding Objects
			</a>
			<a className="developers-menu-popover-item" href="/#">
				Idempotent Requests
			</a>
			<a className="developers-menu-popover-item" href="/#">
				Request IDs
			</a>
		</div>
	);
	return (
    <React.Fragment>
		<MenuStyle>
      <div className="developers-menu">
        <div className="developers-menu-heading">API DOCS</div>
        <div
          className={
            'developers-menu-item parent ' +
            (parent === 'Overview' && child === '' ? 'active' : '')
          }
        >
          <FaWindows size={13}></FaWindows>
          <span>Overview</span>
        </div>
        {childMenuItems.map(item => {
          return (
            <div
              key={item}
              className={
                'developers-menu-item child ' +
                (parent === 'Overview' && child === item ? 'active' : '')
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
      <div
        className={
          top ? 'developers-menu-mobile' : 'developers-menu-mobile scroll'
        }
      >
        <Popover
          content={parentMenu}
          trigger="click"
          visible={parentVisible}
          placement="bottomLeft"
          onVisibleChange={e => {
            setParentVisible(e);
          }}
          arrowPointAtCenter
        >
          <a className="developers-menu-mobile-item" href="/#">
            <span>DEVELOPERS</span>
            <span>
              {' '}
              <Icon type="caret-down" />
            </span>
          </a>
        </Popover>

        <Popover
          content={subMenu}
          placement="bottomRight"
          trigger="click"
          visible={childVisible}
          onVisibleChange={e => {
            setChildVisible(e);
          }}
        >
          <a className="developers-menu-mobile-item" href="/#">
            <span>API DOCS</span>
            <span>
              {' '}
              <Icon type="caret-down" />
            </span>
          </a>
        </Popover>
      </div>
	  </MenuStyle>
    </React.Fragment>
  );
}

export default Menu;

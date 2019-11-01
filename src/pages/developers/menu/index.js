import React, { useState, useEffect } from 'react';
import { FaWindows, FaMobileAlt, FaStar, FaAlignLeft } from 'react-icons/fa';
import { Popover, Icon } from 'antd';

import './style.scss';

function Menu(props) {
	const { parent, child, onMenuClicked } = props;
	const [parentVisible, setParentVisible] = useState(false);
	const [childVisible, setChildVisible] = useState(false);
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
    </React.Fragment>
  );
}

export default Menu;

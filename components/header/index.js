import React, { useState, useEffect } from 'react';
import HamburgerMenu from '../hamburgermenu';
import { Menu, Icon } from 'antd';
import './style.scss';
import LogoWhite from '../../static/img/logo_white.png';
import GrayLogo from "../../static/img/logo_gray.png";
import LogoGray from '../../static/img/logo_gray.png';
import Link from 'next/link';
// import Logo from '../../pages/assets/logo';
const { SubMenu } = Menu;

function Header({themeType = "1", hasSubmenu, type, setup, buttonName = 'Go Fast'}) {
  const [top, setTop] = useState(true);
  const [showBurger, setShowBurger] = useState(false);
  const creatEvent = {
    eventHandler: () => {
      window.pageYOffset > 0 ? setTop(false) : setTop(true);
    },
    addEvent: (event, fn) => {
      window.addEventListener(event, fn);
    },
    removeEvent: (event, fn) => {
      window.removeEventListener(event, fn);
    }
  }
	useEffect(() => {
    creatEvent.addEvent('touchmove', creatEvent.eventHandler)
    creatEvent.addEvent('scroll', creatEvent.eventHandler)
		return () => {
      creatEvent.removeEvent('touchmove', creatEvent.eventHandler);
      creatEvent.removeEvent('scroll', creatEvent.eventHandler);
		};
  }, [creatEvent]);


  return (
      <React.Fragment>
      <div className={`${themeType === "1" ? `header ${top ? '' : 'white'}` : `header2 ${top ? '' : 'scroll'}${hasSubmenu ? "scroll-desktop" : ""}`}`}
          {...(themeType === "2" ? {style: {
            background: type === "gray" ? "#363636" : "white",
            color: type === "gray" ? "white" : "#363636"
          }} : {})}>

        <div className={`container d-flex ${top ? '' : 'white'}`}>
          <Link href="/">
            <a className="d-flex" style={{margin: 'auto auto auto 0'}}>
              <img
                className={'header-logo'}
                src={themeType === "1" ? (top ? LogoWhite : LogoGray) : (type === "gray" ? LogoWhite : GrayLogo)}
                alt="header logo"
              />
            </a>
          </Link>
          

          <div {...(themeType === "1" ? { className: (`header-menu ${top ? '' : 'white'}`)}: { className: (type === "gray" ? "header2-menu gray" : "header2-menu")})}>
         
            <Menu mode="horizontal">
                  <Menu.Item key="how-it-works">
                  <Link href="/howitworks"><a>How It Works</a></Link>
                  </Menu.Item>
                  <Menu.Item key="vevelopers" >
                  <Link href="/developers"><a>Developers</a></Link>
                  </Menu.Item>
                  <SubMenu
                    title={
                      <span className="submenu-title-wrapper">
                        Company
                      </span>
                    }
                  >
                    <Menu.ItemGroup>
                      <Menu.Item key="about-us">
                      <Link  href="/aboutus"><a>About Us</a></Link>
                      </Menu.Item>
                      <Menu.Item key="careers">
                      <Link  href="/careers"><a>Careers</a></Link>
                      </Menu.Item>
                      <Menu.Item key="assets">
                      <Link  href="/assets"><a>Assets</a></Link>
                      </Menu.Item>
                      <Menu.Item key="contactus">
                      <Link  href="/contactus"><a>Contact Us</a></Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                  <SubMenu
                    title={
                      <span className="submenu-title-wrapper">
                        Platform
                      </span>
                    }
                  >
                    <Menu.ItemGroup >
                      <Menu.Item key="platform-shopify">
                      <Link href="/platform-shopify"><a>Shopify</a></Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                  <Menu.Item key="faq">
                  <Link href="/faq"><a>Help</a></Link>
                  </Menu.Item>
              </Menu>
          
          </div>
          
          <div {...(themeType === "2" ? {className: (setup ? "header2-button setup" : `header2-button ${type === "gray" ? 'gray' : ''}`)} : {className: (`header-button ${top ? '' : 'white'}`)})}>
            <button className="m-auto btn-fast">{buttonName}</button>
          </div>
          <div
           {...(themeType === "2" ? {className: `burger-button ${top ? 'gray' : 'gray'}` } : {className: `burger-button ${top ? '' : 'white'}`})}
            onClick={() => setShowBurger(true)}
          ></div>
        </div>
      </div>
      
      <HamburgerMenu
        show={showBurger}
        hide={() => {
          setShowBurger(false);
        }}
      ></HamburgerMenu>
     </React.Fragment>
  );
}

export default Header;

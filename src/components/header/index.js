import React, { useState, useEffect } from 'react';
import './style.scss';
import HamburgerMenu from '../hamburgermenu';
import LogoWhite from '../../assets/img/logo_white.png';
import GrayLogo from "../../assets/img/logo_gray.png";
import LogoGray from '../../assets/img/logo_gray.png';
import { Link } from 'react-router-dom';
import Logo from '../../pages/assets/logo';
function Header({themeType = "1", hasSubmenu, type, setup, buttonName = 'Go Fast'}) {
  const [top, setTop] = useState(true);
  const [showBurger, setShowBurger] = useState(false)

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
          <Link to="/" className="d-flex" style={{margin: 'auto auto auto 0'}}>
            <img
              className={'header-logo'}
              src={themeType === "1" ? (top ? LogoWhite : LogoGray) : (type === "gray" ? LogoWhite : GrayLogo)}
              alt="header logo"
            />
          </Link>
          <div {...(themeType === "1" ? {className: (`header-menu ${top ? '' : 'white'}`)}: {className: (type === "gray" ? "header2-menu gray" : "header2-menu")})}>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/developers">Developers</Link>
            <div {...(themeType === "1" ? {className: (`dropdown ${top ? '' : 'white'}`)}: {className: (type === "gray" ? "dropdown gray" : "dropdown")})}>
              <button className="btn dropdown-toggle" type="button" id="dropdownCompanyButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Company
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownCompanyButton">
                <Link className="dropdown-item" to="/about-us">About Us</Link>
                <Link className="dropdown-item" to="/careers">Careers</Link>
                <Link className="dropdown-item" to="/assets">Assets</Link>
                <Link className="dropdown-item" to="/contactus">Contact Us</Link>
              </div>
            </div>
            <div {...(themeType === "1" ? {className: (`dropdown ${top ? '' : 'white'}`)}: {className: (type === "gray" ? "dropdown gray" : "dropdown")})}>
              <button className="btn dropdown-toggle" type="button" id="dropdownPlatformButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Platform
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownPlatformButton">
                <Link className="dropdown-item" to="/platform">Shopify</Link>
              </div>
            </div>
            
            <Link to="/faq">Help</Link>
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
      />
    </React.Fragment>
  );
}

export default Header;

import React, { useState, useEffect } from 'react';
import './style.scss';
import HamburgerMenu from '../hamburgermenu';
import LogoWhite from '../../assets/img/logo_white.png';
import LogoGray from '../../assets/img/logo_gray.png';
import { Link } from 'react-router-dom';
function Header() {
  let buttonName = 'Fast Go';
  
  const [top, setTop] = useState(true);
  const [showBurger, setShowBurger] = useState(false)
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
      <div className={top ? 'header' : 'header white'}>
        <div className={top ? 'header-container' : 'header-container white'}>
          <img
            className={'header-logo'}
            src={top ? LogoWhite : LogoGray}
            alt="header logo"
          />
          <div className={top ? 'header-menu' : 'header-menu white'}>
            <Link to="/how-it-works">How It Works</Link>
            <Link to="/developers">Company</Link>
            <Link to="/platform">For Business</Link>
            <Link to="/faq">Help</Link>
          </div>
          <div className={top ? 'header-button' : 'header-button white'}>
            <div className="m-auto">{buttonName}</div>
          </div>

          <div
            className={top ? 'burger-button' : 'burger-button white'}
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

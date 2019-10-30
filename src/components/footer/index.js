import React from 'react';
import './style.scss';
import LogoWhite from '../../assets/img/logo_white.png';
import ChatImg from '../../assets/img/chat.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import ReactCountryFlag from 'react-country-flag';

function Footer() {
	const languages = ['US(English)', 'UK(English)', 'Spanish', 'Portuguese'];
	return (
    <div className={'footer'}>
      <div className="footer-col-1">
        <div className="footer-col-1-1">
          <img src={LogoWhite} alt="footer logo"></img>
          <div>@2019 FAST</div>
          <div>San Francisco, California</div>
        </div>
        <div className="languages-select">
          <div>
            <ReactCountryFlag
              styleProps={{
                width: '32px',
                height: '15px',
              }}
              code={'US'}
              svg
            />
          </div>

          <Dropdown
            className="language-dropdown"
            controlClassName="language-dropdown-control"
            arrowClassName="language-dropdown-arrow"
            options={languages}
            value={'US(English)'}
          ></Dropdown>
        </div>
      </div>

      <div className="desktop-layout">
        <div className="footer-col-2">
          <div>Home</div>
          <div>How it works</div>
          <div>About Fast</div>
          <div>Business</div>
          <div>Developers</div>
        </div>
        <div className="footer-col-3">
          <div>Connect</div>
          <div>Linkedin</div>
          <div>Twitter</div>
          <div>GitHub</div>
          <div>Dribbble</div>
        </div>
      </div>
      <div className="mobile-layout">
        <div className="footer-col-2">
          <div>Company</div>
          <div>How it works</div>
          <div>About Fast</div>
          <div>Business</div>
          <div>Developers</div>
        </div>
        <div className="footer-col-3">
          <div>Connect</div>
          <div>Twitter</div>
          <div>Instagram</div>
          <div>Dribbble</div>
          <div>Github</div>
          <div>LinkedIn</div>
        </div>
      </div>
      <div className="footer-col-4">
        <div className="subscribe-text">
          <div>
            Subscribe to our weekly newletters to find out about our special
            offers
          </div>
        </div>

        <div className="subscribe-input">
          <div className="subscribe-mail">
            <input placeholder="Email addresses" />
          </div>
          <div className="subscribe-button">Subscribe</div>
        </div>
      </div>
      <div className="chat-button">      
        <img src={ChatImg} alt="chat"></img>
      </div>
    </div>
  );
}

export default Footer;

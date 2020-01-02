import React from "react";
import LogoWhite from "../../assets/img/logo_white.png";
import ChatImg from "../../assets/img/chat.png";
import dribbble from "../../assets/img/dribbble.svg";
import linkedin from "../../assets/img/linkedin.svg";
import twitter from "../../assets/img/twitter.svg";
import github from "../../assets/img/github.svg";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ReactCountryFlag from "react-country-flag";
import Link  from "next/link";
import './style.scss'
function Footer() {
  const languages = ["US(English)", "UK(English)", "Spanish", "Portuguese"];
  return (
    <div className="footer__background">
    <div className="footer container">
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
                width: "32px",
                height: "15px"
              }}
              code={"US"}
              svg
            />
          </div>

          <Dropdown
            className="language-dropdown"
            controlClassName="language-dropdown-control"
            arrowClassName="language-dropdown-arrow"
            options={languages}
            value={"US(English)"}
          ></Dropdown>
        </div>
      </div>

      <div className="desktop-layout">
        <div className="footer-col-2">
           <div>
            <Link href="/developers">Developers</Link>
          </div>
          <div>
            <Link href="/how-it-works">How it works</Link>
          </div>
        </div>
        <div className="footer-col-3">
          <h6>Company</h6>
          <div>
            <Link href="/about-us">About Fast</Link>
          </div>
          <div>
            <Link href="/careers">Careers</Link>
          </div>
          <div>
            <Link href="/assets">Brands and Assets</Link>
          </div>
        </div>
        <div className="footer-col-4">
          <h6>Help</h6>
          <div>
            <Link href="/contact-us">Contact Us</Link>
          </div>
          <div>
            <Link href="/faq">FAQs</Link>
          </div>
        </div>
      </div>
      <div className="mobile-layout">
        <div className="footer-col-2">
         <div>
            <Link href="/developers">Developers</Link>
          </div>
          <div>
            <Link href="/how-it-works">How it works</Link>
          </div>
          <div>
            <Link href="/contact-us">Contact Us</Link>
          </div>
          <div>
            <Link href="/faq">FAQs</Link>
          </div>
        </div>
        <div className="footer-col-3">
          <h6>Company</h6>
          <div>
            <Link href="/about-us">About Fast</Link>
          </div>
          <div>
            <Link href="/careers">Careers</Link>
          </div>
          <div>
            <Link href="/assets">Brands and Assets</Link>
          </div>
        </div>
      </div>
      <div className="footer-col-5">
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
        <div className="social-links">
          <a href="https://twitter.com/Fast" target="_blank"><img src={twitter} alt="twitter image"></img></a>
          <a href="" target="_blank"><img src={dribbble} alt="dribbble image"></img></a>
          <a href="https://www.linkedin.com/company/fast/" target="_blank"><img src={linkedin} alt="linkedin image"></img></a>
          <a href="https://github.com/fast-af" target="_blank"><img src={github} alt="github image"></img></a>
        </div>
      </div>
      <div className="chat-button">
        <img src={ChatImg} alt="chat"></img>
      </div>
    </div>
    </div>
  );
}

export default Footer;

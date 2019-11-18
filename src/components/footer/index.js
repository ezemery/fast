import React from "react";
import "./style.scss";
import LogoWhite from "../../assets/img/logo_white.png";
import ChatImg from "../../assets/img/chat.png";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
function Footer() {
  const languages = ["US(English)", "UK(English)", "Spanish", "Portuguese"];
  return (
    <div className={"footer"}>
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
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/how-it-works">How it works</Link>
          </div>
          <div>
            <Link to="/about-us">About Fast</Link>
          </div>
          <div>
            <Link to="/platform">Business</Link>
          </div>
          <div>
            <Link to="/dashboard">Developers</Link>
          </div>
        </div>
        <div className="footer-col-3">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/fast/"
            >
              Linkedin
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/fastdotco"
            >
              Twitter
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/fast-af"
            >
              Github
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-layout">
        <div className="footer-col-2">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/fast"
            >
              Dribbble
            </a>
          </div>
          <div>
            <Link to="/how-it-works">How it works</Link>
          </div>
          <div>
            <Link to="about-us">About Fast</Link>
          </div>
          <div>
            <Link to="platform">Business</Link>
          </div>
          <div>
            <Link to="/developers">Developers</Link>
          </div>
        </div>
        <div className="footer-col-3">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/fast/"
            >
              Linkedin
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/fastdotco"
            >
              Twitter
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/fast-af"
            >
              Github
            </a>
          </div>
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/fast"
            >
              Dribbble
            </a>
          </div>        </div>
      </div>
      <div className="mobile-layout">
        <div className="footer-col-2">
          <div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/fast"
            >
              Dribbble
            </a>
          </div>

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

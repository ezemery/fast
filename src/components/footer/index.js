import React from "react";
import styled from 'styled-components'
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
const FooterStyle = styled.div`
.footer__background{
  background: #363636;
  min-height: 393px;
}
.footer {

  color: white;
  display: flex;
  padding-top: 77px;
  @media screen and (max-width: 600px) {
    padding: 0px;
    display: block;
    min-height: 690px;
  }

  &-col-1 {
    @media screen and (max-width: 600px) {
      display: flex;
    }

    &-1 {
      font-family: 'Graphik';
      font-size: 16px;
      line-height: 25px;
      width: 120px;

      * {
        margin-top: 5px;
      }

      *:first-child {
        margin-bottom: 10px;
        width: 98px;
      }

      @media screen and (max-width: 600px) {
        width: 50%;
        padding: 25px;
        padding-right: 0;
        font-family: 'Graphik';
        font-size: 16px;
        line-height: 25px;
      }
    }

    .languages-select {
      height: 30px;
      display: none;

      @media screen and (max-width: 600px) {
        display: flex;
        margin-top: 47px;
        margin-right: 53px;
      }
    }

    .language-dropdown {
      font-size: 10px;
      line-height: 10px;
      background: #363636;
      color: white;
			width: 82px;

      &-control {
        font-size: 8px;
        line-height: 15px;
        background: #363636;
        color: white;
        border: none;
      }

      &-arrow {
        font-size: 4px;
        width: 5px;
      }
    }
  }

  &-col-2,
  &-col-3, &-col-4 {
    font-family: 'Graphik';

    * {
      margin-top: 21px;
    }

    *:first-child {
      margin-top: 0;
      color: #a7a7a7;
    }
  }

  &-col-2 {
    margin-left: auto;

    @media screen and (max-width: 600px) {
      margin-left: 0;

      *:nth-child(n + 2) {
        margin-top: 33px;
      }
    }
  }

  &-col-3 {
    margin-left: auto;
    @media screen and (max-width: 600px) {
      *:nth-child(n + 2) {
        margin-top: 27px;
      }
    }
  }

  &-col-4 {
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 600px) {
      *:nth-child(n + 2) {
        margin-top: 27px;
      }
    }
  }

  &-col-5 {
    margin-left: auto;
    width: 337px;

    @media screen and (max-width: 768px) and (min-width: 601px){
      margin: 0;
      width: 200px;

      .subscribe-text {
        line-height: 150% !important;
        width: 200px !important;
      }

      .subscribe-input {
        flex-direction: column;

        .subscribe-mail {
          padding-top: 5px !important;
          height: 35px !important;
        }
        .subscribe-button{
          margin-left: 0px !important;
          line-height: 35px !important;
          margin-top: 10px !important;
        }
      }
      
    }

    @media screen and (max-width: 600px) {
      // display: none;
      margin: 0;
      width: 100%;
      padding: 20px;
    }
    .social-links{
      margin-top: 20px;
      display: flex;
      a{
        margin-right: 20px;
      }
    }
    .subscribe-text {
      font-family: 'Graphik';
      font-size: 16px;
      line-height: 120%;
      width: 270px;
    }

    .subscribe-input {
      margin-top: 27px;
      display: flex;

      .subscribe-mail {
        background: #616161;
        padding-left: 25px;
        padding-top: 10px;
        height: 45px;
        border-radius: 3px;
        width: 220px;

        input {
          font-size: 12px;
          line-height: 126%;
          letter-spacing: 0.02em;
          color: #bfbfbf;
          background: transparent;
          outline: none;
          border: none;
          width: 180px;
        }
      }

      .subscribe-button {
        width: 100px;
        margin-left: 15px;
        background: #7cb342;
        border-radius: 4px;
        color: white;
        text-align: center;
        line-height: 45px;
        font-size: 12px;
        cursor: pointer;
      }

      .subscribe-button:hover {
        background-color: #94bf66;
      }
    }
  }

  .mobile-layout {
    display: none;

    @media screen and (max-width: 600px) {
      display: flex;
      padding: 25px;
    }
  }

  .desktop-layout {
    display: flex;
    margin-left: auto;
    width: 100%;
    @media screen and (max-width: 600px) {
      display: none;
    }
    @media screen and (max-width: 768px) and (min-width: 601px) {
     font-size: 14px;
    }
  }

  .chat-button {
    position: absolute;
    right: 71px;
    margin-top: 190px;
    cursor: pointer;
    img{
      width: 100%;
      height: 100%;
    }
    @media screen and (max-width: 600px) {
      display: none;
    }
    @media screen and (max-width: 768px) and (min-width: 601px){
      display: none;
    }
  }
}`;

function Footer() {
  const languages = ["US(English)", "UK(English)", "Spanish", "Portuguese"];
  return (
    <FooterStyle>
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
    </FooterStyle>
  );
}

export default Footer;

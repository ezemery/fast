import React, { useState, useEffect } from 'react';
import HamburgerMenu from '../hamburgermenu';
import { Menu, Icon } from 'antd';
import styled from 'styled-components'
import LogoWhite from '../../assets/img/logo_white.png';
import GrayLogo from "../../assets/img/logo_gray.png";
import LogoGray from '../../assets/img/logo_gray.png';
import  Link  from 'next/link';
const HeaderStyle = styled.div`
.header {
  position: absolute;
  height: 100px;
  background: transparent;
  color: white;
  display: flex;
  width: 100%;
  z-index: 99;
  font-family: 'Graphik';

  .ant-menu{
    background: transparent;
    font-size: 16px;
    color:#fff;
    font-weight: 500;

    &.ant-menu-horizontal{
      border-bottom: 0px;
      .ant-menu-item,.ant-menu-submenu{
        margin-right: 25px;
        @media screen and (max-width: 768px) and (min-width: 601px){
          margin-right: 0px;
        }
        cursor: pointer;
        a{
          color: white;
          &:hover {
            text-decoration: none;
            color: #363636;
          }
        }
        
      }
      .ant-menu-item{
        border-bottom: 0px;
        &.ant-menu-item-active{
          border-bottom: 0px;
        }
        &.ant-menu-item:last-child {
          margin-right: 0;
        }
      }
      .ant-menu-submenu{
         border-bottom: 0px;
        &.ant-menu-submenu-active{
          .ant-menu-submenu-title{
            color: #363636;
          }
          border-bottom: 0px;
        }
        .ant-menu{
          border-radius: 0px;
        }
      }
     
      
    }
  }

  
 

  &.white {
    position: fixed;
    top: 0px;
    background: white;
    color: #363636;
    height: 70px;
    -webkit-animation: fadein 1s;
    -moz-animation: fadein 1s;
    -ms-animation: fadein 1s;
    -o-animation: fadein 1s;
    animation: fadein 1s;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
    a {
      color: #363636;

      &:hover {
        color: #7cb342;
      }
    }
    .ant-menu{
      color: #363636;
      &.ant-menu-horizontal{
        .ant-menu-item,.ant-menu-submenu{
          cursor: pointer;
          a{
            color: #363636;
          }
          
        }
      }
    }
  }

  &-container {
    min-width: 1000px;
    margin: auto;
    display: flex;

  }

  &-logo {
    height: 24px;
    cursor: pointer;
  }

  &-menu {
    display: flex;
    margin: auto;

    .dropdown{
      margin-right: 60px;
      cursor: pointer;
      color: white;

      &.white {
        .dropdown-toggle{
            color: #363636;
    
            &:hover {
              color: #7cb342;
            }
        }
      }

      .dropdown-toggle{
          font-weight: 500;
          padding-top: 0px;
          cursor: pointer;
          color: white;

          &:hover {
            text-decoration: none;
            color: #363636;
          }
          &:focus {
            border: none;
            box-shadow: none;
          }
      }

      .dropdown-menu{
        border: none;
        a{
          color: #363636;
        }
      }
    }

    a {
      margin-right: 60px;
      cursor: pointer;
      color: white;

      &:hover {
        text-decoration: none;
        color: #363636;
      }
    }


    a:last-child {
      margin-right: 0;
    }
  }

  &-button {
    margin-left: auto;
    display: flex;
    transition: all 1s ease;
    cursor: pointer;
    button{
      font-family: 'Graphik';
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      transition: all 1s ease;
      padding: 13px 35px;
      font-weight: 700;
      color: #363636;
      background-color: #fff;
      border: none !important;
      border-radius: 5px !important;

      @media screen and (max-width: 768px) and (min-width: 601px){
       line-height: 14px;
      }
    }
    &.white {
      button{
        color: white;
        background: #363636;
      }
      

      &:hover {
        button{
           color: white;
          background: #363636;
        }
       
      }
    }

    &:hover {
      // background: white;
      // color: #363636;
    }
  }

  &-mobile-button {
    font-family: 'Graphik';
    font-size: 16px;
    line-height: 18px;
    padding: 10px;
    background: #363636;
    border: 1px solid #363636;
    border-radius: 5px;
  }


  .burger-button {
    display: none;
  }
}

.ant-menu-submenu-popup {
  border-radius: 0px !important;
}
.ant-menu-item-group-title{
  padding:0px !important;
}

.ant-menu-item-group-list{
  .ant-menu-item{
    padding: 0px !important;
  }
  .dropdown-item{
    text-align: left !important;
  }
}
@media screen and (max-width: 600px) {
  .header {
    &.white {
      background: white;
      height: 80px;
      position: fixed;
      z-index: 99999;
      height: 75px;
      -webkit-animation: fadein 1s;
      -moz-animation: fadein 1s;
      -ms-animation: fadein 1s;
      -o-animation: fadein 1s;
      animation: fadein 1s;
    }



    &-container {
      min-width: auto;
      margin-left: 28px;
      margin-top: 44px;
      display: flex;
      width: 100%;

      &.white {
        margin-top: auto;
        margin-bottom: auto;
        height: 48px;
      }
    }

    &-container-white {
      margin-top: 28px;
    }

    &-logo {
      height: 27px;
      margin-top: 10px;
      margin-left: 0;
      margin-right: 0;
      cursor: pointer;
    }

    &-menu {
      display: none;
    }



    &-button {
      margin-left: auto;
      margin-top: -5px;

      &.white {
        margin-top: 0;
      }
    }

    .burger-button {
      display: block;
      margin: auto 0px auto 16px;
      width: 30px;
      height: 20px;
      background: url('../../assets/img/hamburger.png') no-repeat center center;
      background-size: 100% 100%;

      &.white {
        background: url('../../assets/img/hamburger_gray.png') no-repeat center center;
        margin-left: 15px;
      }
    }
  }
}

@keyframes fadein {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


// Header 2

.header2 {
  height: 90px;
  background: white;
  color: #363636;
  display: flex;
  width: 100%;
  z-index: 99;
  position: fixed;

  
	
	&.scroll{
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.08);
    height: 75px !important;
    &.scroll-desktop{
      @media screen and (max-width: 600px){
        box-shadow: none;
        height: 75px !important;
      }
    }
  }
  &-container {
    min-width: 1000px;
    margin: auto;
    display: flex;
  }

  &-logo {
    height: 30px;
    margin: auto;
    cursor: pointer;
  }

  &-menu {
    display: flex;
    margin: auto;
    font-family: 'Graphik';
    font-size: 17px;
    line-height: 23px;

    .ant-menu{
      background: transparent;
      font-size: 16px;
      color: #363636;
      font-weight: 500;
  
      &.ant-menu-horizontal{
        border-bottom: 0px;
        .ant-menu-item,.ant-menu-submenu{
          margin-right: 25px;
          cursor: pointer;
          a{
            color: #363636;
            &:hover {
              text-decoration: none;
              color: #363636;
            }
          }
          
        }
        .ant-menu-item{
          border-bottom: 0px;
          &.ant-menu-item-active{
            border-bottom: 0px;
          }
          &.ant-menu-item:last-child {
            margin-right: 0;
          }
        }
        .ant-menu-submenu{
           border-bottom: 0px;
          &.ant-menu-submenu-active{
            .ant-menu-submenu-title{
              color: #363636;
            }
            border-bottom: 0px;
          }
          .ant-menu{
            border-radius: 0px;
          }
        }
       
        
      }
    }
  

    &.gray {
      background-color: transparent !important;
      .ant-menu{
        color: white;
        &.ant-menu-horizontal{
          .ant-menu-item,.ant-menu-submenu{
            cursor: pointer;
            a{
              color: white;
              &:hover {
                color: white;
              }
            }
            
          }

          .ant-menu-submenu{
            border-bottom: 0px;
           &.ant-menu-submenu-active{
             .ant-menu-submenu-title{
              color: white;
             }
           }
         }
        }
      }
    }
  }

  &-button {
    margin-left: auto;
    display: flex;
    transition: all 1s ease;
    margin: auto 0 auto 16px;
    cursor: pointer;

    &.gray {
      button{
        background: white !important;
        color: #363636 !important;
      }
    }
    button{
      font-family: 'Graphik';
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      transition: all 1s ease;
      padding: 13px 35px;
      color: #fff;
      background: #363636;
      font-family: 'Graphik';
      border: 1px solid #363636;
      border: none !important;
      border-radius: 5px !important;
    }
    &.white {
      button{
        color: white;
        background: #363636;
      }
      

      &:hover {
        button{
           color: white;
          background: #363636;
        }
       
      }
    }

    &:hover {
      // background: white;
      // color: #363636;
    }
  }


  &-mobile-button {
    font-family: 'Graphik';
    font-size: 14px;
    line-height: 18px;
    padding: 10px;
    background: #363636;
    color: white;
    border: 1px solid #363636;
    border-radius: 5px;
    display: none;

    @media screen and (max-width: 600px) {
      display: block;
    }
  }

  .burger-button {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .header2 {
    height: 75px;

    &-container {
      min-width: 320px;
      margin-left: 28px;
      margin-top: auto;
      margin-bottom: auto;
      display: flex;
      width: 100%;
      min-width: auto;
    }

    &-container-white {
      margin-top: 28px;
    }

    &-logo {
      height: 23px;
      margin: 0;
      cursor: pointer;
      margin-top: auto;
      margin-bottom: auto;
    }

    &-menu {
      display: none;
    }

    &-button {
      height: 36px;
      &.setup{
        font-size: 12px;
      }
    }

    &-mobile-button {
      margin-left: auto;
      margin-top: -5px;
    }

    .burger-button {
      display: block;
      margin: auto 0px auto 16px;
      width: 30px;
      height: 20px;
      background: url('../../assets/img/hamburger.png') no-repeat center center;
      background-size: 100% 100%;

      &.gray {
        background: url('../../assets/img/hamburger_gray.png') no-repeat center center;
      }
    }
  }
}
`;

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
      <HeaderStyle>
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
                  <Link href="/how-it-works">How It Works</Link>
                  </Menu.Item>
                  <Menu.Item key="vevelopers" >
                  <Link href="/developers">Developers</Link>
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
                      <Link  href="/about-us">About Us</Link>
                      </Menu.Item>
                      <Menu.Item key="careers">
                      <Link  href="/careers">Careers</Link>
                      </Menu.Item>
                      <Menu.Item key="assets">
                      <Link  href="/assets">Assets</Link>
                      </Menu.Item>
                      <Menu.Item key="contactus">
                      <Link  href="/contactus">Contact Us</Link>
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
                      <Menu.Item key="about-us">
                      <Link href="/platform">Shopify</Link>
                      </Menu.Item>
                    </Menu.ItemGroup>
                  </SubMenu>
                  <Menu.Item key="faq">
                  <Link href="/faq">Help</Link>
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
      </HeaderStyle>
  );
}

export default Header;

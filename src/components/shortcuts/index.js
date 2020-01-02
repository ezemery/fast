import React, {useState} from 'react';
import { Popover, Icon } from 'antd';

import Header3 from '../../components/header3';
import AmazonShortcut from '../../assets/img/amazon_shortcut.png';
import AppleShortcut from '../../assets/img/apple_shortcut.png';
import Hundred24Shortcut from '../../assets/img/24hundred_shortcut.png';
import IkeaShortcut from '../../assets/img/ikea_shortcut.png';
import MoreButton from '../../assets/img/more_button.png';
import {FaPlusCircle, FaCog, FaTrashAlt} from 'react-icons/fa';
import styled from 'styled-components';
const ShortcutStyle = styled.div`
.shortcuts-page {
  background: #f6f9f8;
  width: 100%;
  min-height: 100vh;
  overflow: auto;

  @media screen and (max-width: 600px) {
    overflow: initial;
  }

  .section {
    margin-top: 100px;
    padding-bottom: 0px;
    text-align: center;
    justify-content: center;
    padding: 37px 52px;
    margin-left: 30px;
    margin-right: 30px;
    background: white;
    margin-bottom: 20px;

    @media screen and (max-width: 600px) {
      margin-top: 165px;
      padding-top: 36px;
      padding-bottom: 0px;
      display: block;
      justify-content: left;
      margin-left: 0;
      margin-right: 0;
      padding-left: 0;
      padding-right: 0;
    }

    &-header {
      display: flex;
			margin-left: 20px;
      @media screen and (max-width: 600px) {}
    }

    &-title {
      font-size: 24px;
      line-height: 52px;
      color: rgba(132, 140, 153, 0.6);
      margin-left: 54px;
			cursor: pointer;
      @media screen and (max-width: 600px) {
        font-size: 16px;
        margin-left: auto;
        margin-right: 25px;
      }

      &.active {
        font-family: 'Graphik';
        font-size: 48px;
        line-height: 52px;
        color: #363636;
        margin-left: 54px;

        @media screen and (max-width: 600px) {
          font-size: 24px;
          margin-left: 25px;
          margin-right: auto;
        }
      }

    }

    &-search {
      margin-left: auto;
      border: 1px solid #C0CCDA;
      border-radius: 5px;
      padding: 12px 23px;

      @media screen and (max-width: 600px) {
        position: fixed;
        top: 80px;
        background: #f6f9f8;
        width: 100%;
        margin: 0;
        border: none;
        border-radius: 0;
        padding: 15px 20px;
      }

      &-container {
        @media screen and (max-width: 600px) {

          border: 1px solid #C0CCDA;
          border-radius: 5px;
          padding: 12px 15px;
          background: white;
        }

        i {
          vertical-align: middle;
          margin-left: 10px;
        }

        input {
          border: none;
          outline: none;

          @media screen and (max-width: 600px) {
            width: calc(100% - 36px);
          }
        }
      }
    }

    &-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-top: 90px;
      margin-bottom: 90px;
      margin-left: 25px;
      margin-right: 25px;

      @media screen and (max-width: 600px) {
        margin-top: 30px;
        margin-bottom: 30px;
      }

      .shortcut {
        width: 150px;
        margin: 40px;

        @media screen and (max-width: 600px) {
          width: 110px;
          margin: 20px;
        }

        &-img {
          img {
            @media screen and (max-width: 600px) {
              width: 110px;
              height: 110px;
            }
          }
        }

        &-action {
          cursor: pointer;
          width: 32px;

          @media screen and (max-width: 600px) {
            width: 24px;
          }

          img {
            width: 100%;
          }
        }

        &-text {
          margin-top: 20px;
          display: flex;
          justify-content: center;
          font-family: 'Graphik';
          font-size: 16px;
          line-height: 22px;

          @media screen and (max-width: 600px) {
            font-size: 12px;
          }

          span {
            margin-right: 20px;

            @media screen and (max-width: 600px) {
              margin-right: 10px;
            }
          }
        }
      }
    }

  }
}

.shortcut-menu {
  display: grid;

  a {
    margin-top: 5px;
    border-radius: 5px;
    padding: 3px;

    &:hover {
      color: #D21B0F !important;
      background: #FFF5F4 !important;
    }

    svg {
      margin-top: -2px;
      margin-right: 5px;
    }
  }
}
`;

function Shortcut(props) {
	const { img, text } = props;
	return (
    <div className="shortcut">
      <div className="shortcut-img">
        <img src={img} alt="logo" />
      </div>
      <div className="shortcut-text">
        <span>{text}</span>

        <Popover
          content={
            <div className="shortcut-menu">
              <a href="/#">
                <FaPlusCircle size={13} />
                Add New Email
              </a>
              <a href="/#">
                <FaCog size={13} />
                Shortcut Settings
              </a>
              <a href="/#">
                <FaTrashAlt size={13} />
                Delete Shortcut
              </a>
            </div>
          }
          trigger="click"
          placement="bottom"
          // visible={this.state.visible}
          // onVisibleChange={this.handleVisibleChange}
        >
          <div className="shortcut-action">
            <img src={MoreButton} alt="action" />
          </div>
        </Popover>
      </div>
    </div>
  );
}

function Shortcuts() {
	const data = [
			{
				text: 'Amazon HR',
				img: AmazonShortcut
			},
			{
				text: 'Apple',
				img: AppleShortcut
			},
			{
				text: '24 Hundred',
				img: Hundred24Shortcut
			},
			{
				text: 'Ikea',
				img: IkeaShortcut
			},
				{
				text: 'Apple',
				img: AppleShortcut
			},
			{
				text: 'Amazon HR',
				img: AmazonShortcut
			},
			{
				text: 'Apple',
				img: AppleShortcut
			},
			{
				text: '24 Hundred',
				img: Hundred24Shortcut
			},
			{
				text: 'Ikea',
				img: IkeaShortcut
			},
				{
				text: 'Apple',
				img: AppleShortcut
			},
		];
	
	const [category, setCategory] = useState('my');

		return (
      <ShortcutStyle>
      <div className="shortcuts-page">
        <Header3></Header3>
        <div className="section">
          <div className="section-header">
            <div
              className={`section-title ${category === 'my' ? 'active' : ''}`}
              onClick={() => {
                setCategory('my');
              }}
            >
              My Shortcuts
            </div>
            <div
              className={`section-title ${
                category === 'popular' ? 'active' : ''
              }`}
              onClick={() => {
                setCategory('popular');
              }}
            >
              Popular Shortcuts
            </div>
            <div className="section-search">
              <div className="section-search-container">
                <input placeholder="search shortcuts" />
                <Icon type="search" />
              </div>
            </div>
          </div>
          <div className="section-content">
            {data.map(item => {
              return <Shortcut {...item} />;
            })}
          </div>
        </div>
      </div>
      </ShortcutStyle>
    );
}

export default Shortcuts;

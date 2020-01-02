import React from 'react'
import {Icon} from 'antd'
import styled from 'styled-components'
const ComponentStyle = styled.div`
.assets-page-content-right {
  .components {
    &-heading {
      font-family: 'Graphik';
      font-size: 36px;
      line-height: 50px;
      color: #363636;
      text-align: left;
      padding-bottom: 20px;
      border-bottom: 1px solid #e2e2e2;

      @media screen and (max-width: 600px) {
        font-size: 24px;
        line-height: 50px;
        padding-bottom: 0;
        border: none;
        margin-top: 74px;
      }
    }

    &-content {
      margin-bottom: 95px;
    }

    &-section {
      margin-top: 40px;

      @media screen and (max-width: 600px) {
        margin-top: 10px;
      }

      &-title {
        font-family: 'Graphik';
        font-size: 24px;
        line-height: 50px;
        letter-spacing: 0.01em;
        color: #363636;
        margin-bottom: 10px;

        @media screen and (max-width: 600px) {
          font-size: 18px;
        }
      }

      &-desc {
        font-family: 'Graphik';
        font-size: 16px;
        line-height: 25px;
        color: #363636;
        margin-bottom: 15px;
        width: 100%;

        @media screen and (max-width: 600px) {
          font-size: 14px;
        }
      }
    }

    &-subsection {
      margin-top: 50px;

      &-title {
        font-family: 'Graphik';
        font-size: 21px;
        line-height: 23px;

        color: #676767;

        @media screen and (max-width: 600px) {
          font-size: 18px;
        }
      }

      &-content {
        margin-top: 15px;

        &-header {
          height: 100px;
          background: url('../../../assets/img/assets_header.png') no-repeat center center;
          background-size: 100%;

          @media screen and (max-width: 600px) {
            background: url('../../../assets/img/assets_header_mobile.png') no-repeat center center;
          }
        }

        &-footer {
          background: url('../../../assets/img/assets_footer.png') no-repeat center center;
          background-size: 100%;
          height: 250px;

          @media screen and (max-width: 600px) {
            height: 505px;
            width: 100%;
            background: url('../../../assets/img/assets_footer_mobile.png') no-repeat center center;
          }
        }

        &-bread {
          height: 100px;
          background: url('../../../assets/img/assets_bread.png') no-repeat center center;
          background-size: 100%;

          @media screen and (max-width: 600px) {
            height: 50px;
            width: 100%;
            background: url('../../../assets/img/assets_bread_mobile.png') no-repeat center center;
          }
        }

        &-code {
          height: 100px;
          background: url('../../../assets/img/assets_code.png') no-repeat center center;
          background-size: 100%;
          height: 250px;

          @media screen and (max-width: 600px) {
            height: 350px;
            width: 100%;
            background: url('../../../assets/img/assets_code_mobile.png') no-repeat center center;
          }
        }
      }
    }

    .card {
      background: #ffffff;
      border: 1px solid #e5e9f2;
      border-radius: 10px;
      padding: 25px 25px;
      width: 253px;
      height: 257px;
      margin: 21px;
      cursor: pointer;
      z-index: -1;

      @media screen and (max-width: 600px) {
        margin-left: auto;
        margin-right: auto;
      }

      &:hover {
        box-shadow: 0px 50px 70px rgba(0, 0, 0, 0.05);
      }

      &-img {
        width: 43px;
        height: 34px;
        color: #88d20f;
      }

      &-title {
        margin-top: 28px;
        font-family: 'Graphik';
        font-size: 18px;
        line-height: 20px;
        color: #2b4403;
      }

      &-desc {
        margin-top: 6px;
        font-family: 'Graphik';
        font-size: 16px;
        line-height: 25px;
        color: #3d3d3d;
      }
    }

    .button {
      font-family: 'Graphik';
      font-size: 16px;
      line-height: 18px;
      text-align: center;
      letter-spacing: 0.01em;
      color: #FFFFFF;
      padding: 11px 23px;
      background: #88D20F;
      border-radius: 3px;
      width: fit-content;
      height: fit-content;
      cursor: pointer;
      z-index: -1;

      &.xl {
        padding: 25px 89px;

        @media screen and (max-width: 600px) {
          margin: 0 0 0 30px;
        }
      }

      &.lg {
        padding: 15px 52px;
        margin-left: 30px;

        @media screen and (max-width: 600px) {
          margin: 30px 0 0 80px;
        }
      }

      &.md {
        padding: 11px 23px;
        margin-left: 30px;

        @media screen and (max-width: 600px) {
          margin: 30px 0 0 100px;
        }
      }

      &.sm {
        padding: 7px 23px;
        font-family: 'Graphik';
        font-size: 12px;
        line-height: 13px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.06em;
        color: #FFFFFF;
        margin-left: 30px;

        @media screen and (max-width: 600px) {
          margin: 30px 0 0 115px;
        }
      }

      &.white {
        border: 1px solid #88D20F;
        color: #88D20F;
        background: white;
      }

      &.inactive {
        background: #F9FAFC;
        border: 1px solid #C0CCDA;
        border-radius: 3px;
        font-family: 'Graphik';
        font-size: 16px;
        line-height: 18px;
        align-items: center;
        text-align: center;
        letter-spacing: 0.06em;
        color: #C0CCDA;
      }

      &.cancel {
        background: #FFFFFF;
        border: 1px solid #BF3100;
        box-sizing: border-box;
        border-radius: 3px;
        font-family: 'Graphik';
        font-size: 16px;
        line-height: 18px;
        align-items: center;
        text-align: center;
        letter-spacing: 0.06em;
        color: #BF3100;
      }

      &.secondary {
        width: 120px;
        text-align: center;
        cursor: pointer;
      }

      &.download,
      &.dropdown {
        padding-left: 15px;
        padding-right: 15px;
        display: flex;
        justify-content: space-between;

        &.white {
          border: 1px solid #C0CCDA;
          background: white;
          font-family: Graphik;
          font-size: 16px;
          line-height: 18px;
          text-align: center;
          letter-spacing: 0.06em;
          color: #575A65;
        }
      }
    }

    .label {
      font-family: 'Graphik';
      font-size: 12px;
      line-height: 13px;
      letter-spacing: 0.04em;
      color: #696969;
      margin-bottom: 10px;
    }

    .input {
      width: 320px;
      padding: 17px 20px;
      background: #FFFFFF;
      border: 1px solid #C0CCDA;
      border-radius: 4px;
      display: inline-grid;

      &-container {
        width: fit-content;
      }

      &-title {
        font-family: 'Graphik';
        font-size: 12px;
        line-height: 13px;
        letter-spacing: 0.04em;
        color: #696969;
        margin-bottom: 10px;
      }

      input {
        font-family: 'Graphik';
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.04em;
        color: #C0CCDA;
        border: none;

        &:focus {
          outline: none;
        }
      }


      &.focus {
        border: 1px solid #88D20F;
      }

      &.error {
        border: 1px solid #D80027;
      }

      &.find {
        display: flex;
        justify-content: space-between;

        input {
          width: 100%;
        }
      }
    }

    .button-dropdown {
      background: #FFFFFF;
      box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
      padding-top: 11px;
      padding-bottom: 11px;

      &-item {
        padding: 10px 35px;
        font-family: 'Graphik';
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.04em;
        background: white;
        color: #696969;

        &.active {
          background: #F8F8F8;
          color: #88D20F;
        }
      }
    }

    .input-url {
      display: flex;

      &-caption {
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
        background: #F9FAFC;
        border: 1px solid #D3DCE6;
        color: #C0CCDA;
        font-size: 14px;
        line-height: 15px;
        padding: 15px 18px;
      }

      &-content {
        padding: 10px;
        border: 1px solid #D3DCE6;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
        border-left: none;

        input {
          border: none;

          &:focus {
            outline: none;
          }
        }
      }
    }

    .textarea {
      width: 320px;
      padding: 17px 20px;
      background: #FFFFFF;
      border: 1px solid #C0CCDA;
      box-sizing: border-box;
      border-radius: 4px;

      textarea {
        border: none;
        outline: none;
        font-family: 'Graphik';
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.04em;
        width: 100%;
        height: 100%;
        color: #C0CCDA;
      }
    }
  }
}
`;
import { FaWindows, FaMobileAlt, FaStar, FaAlignLeft } from 'react-icons/fa';

function Card(props) {
  const { title, desc, onClick, img } = props;
  return (
    <div className="card" onClick={() => onClick()}>
      <div className="card-img">{img}</div>
      <div className="card-title">{title}</div>
      <div className="card-desc">{desc}</div>
    </div>
  );
}
export default function Components() {
  	const contents = [
      {
        img: <FaWindows size={28} />,
        title: 'Overview', 
        desc:
          'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
      },
      {
        img: <FaAlignLeft size={28} />,
        title: 'Api Reference',
        desc:
          'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
      },
      {
        img: <FaMobileAlt size={28} />,
        title: 'My Apps',
        desc:
          'Lorem ipsum dolor sit sit amet, consectetur dolor adipiscing elit, sed do sit.',
      },
    ];
  return (
    <ComponentStyle>
    <div className="components">
      <div className="components-heading">Components</div>
      <div className="components-content">
        <div className="components-section">
          <div className="components-section-title">Buttons</div>
          <div className="components-section-desc">
            Fast uses conventional HTTP response codes to indicate the success
            or failure of an API request.
          </div>
          <div className="components-subsection">
            <div className="components-subsection-title">Primary Buttons</div>
            <div className="components-subsection-content d-md-flex d-sm-block">
              <div className="button xl">Ex Large</div>
              <div className="button lg mt-md-auto ">Large</div>
              <div className="button md mt-md-auto ">Medium</div>
              <div className="button sm mt-md-auto ">Small</div>
            </div>
          </div>
          <div className="components-subsection">
            <div className="components-subsection-title">Secondary Buttons</div>
            <div className="components-subsection-content">
              <div className="d-flex flex-wrap">
                <div className="button secondary white mt-3">Button</div>
                <div className="button secondary ml-3 mt-3">Button</div>
                <div className="button secondary inactive ml-md-3 mt-3">
                  Button
                </div>
                <div className="button secondary cancel ml-3 mt-3">Button</div>
              </div>
              <div className="d-flex flex-wrap mt-3">
                <div className="button secondary dropdown mt-3">
                  <span>Button</span>                 
                  <Icon type="caret-down" />                
                </div>
                <div className="button secondary dropdown white ml-3 mt-3">
                  <span>Button</span>
                  <Icon type="caret-down" />
                </div>
                <div className="button secondary download ml-md-3 ml-sm-0 mt-3">
                  <Icon type="cloud-download" />
                  <span>Button</span>
                </div>
                <div className="button secondary download white ml-3 mt-3">
                  <Icon type="cloud-download" />
                  <span>Button</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="components-section">
          <div className="components-section-title">Forms</div>
          <div className="components-section-desc">
            Fast uses conventional HTTP response codes to indicate the success
            or failure of an API request.
          </div>
          <div className="components-subsection">
            <div className="components-subsection-title">Input Field</div>
            <div className="components-subsection-content">
              <div className="d-flex flex-wrap mt-3">
                <div className="mt-3">
                  <div className="input-container">
                    <div className="label">Input</div>
                    <div className="input">
                      <input placeholder="Placeholder Text (default)"></input>
                    </div>
                  </div>
                  <div className="input-container mt-3">
                    <div className="input find">
                      <input placeholder="Placeholder Text (default)"></input>
                      <Icon type="search" color="#575A65" />
                    </div>
                  </div>
                </div>
                <div className="input-container ml-md-5 ml-sm-0 mt-3">
                  <div className="label">Input(Focus)</div>
                  <div className="input focus">
                    <input placeholder="Placeholder Text (default)"></input>
                  </div>
                </div>
              </div>
              <div className="input-container mt-5">
                <div className="label">Input(Error)</div>
                <div className="input error">
                  <input placeholder="Placeholder Text (default)"></input>
                </div>
                <div className="text-danger">you did something wrong</div>
              </div>
            </div>
          </div>
          <div className="components-subsection">
            <div className="components-subsection-title">Text Area</div>
            <div className="components-subsection-content d-md-flex d-sm-block">
              <div className="input-container mt-3">
                <div className="label">Input Here</div>
                <div className="textarea">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Placeholder text"
                  ></textarea>
                </div>

                <div className="label mt-3">URL</div>
                <div className="input-url">
                  <div className="input-url-caption">http://</div>
                  <div className="input-url-content">
                    <input type="text" />
                  </div>
                </div>
              </div>
              <div className="input-container ml-md-5 ml-sm-0 mt-3">
                <div className="label">Dropdown</div>
                <div className="input find">
                  <input placeholder="Select"></input>
                  <Icon type="caret-down" color="#C0CCDA" />
                </div>
                <div className="button-dropdown mt-1">
                  <div className="button-dropdown-item">First Option</div>
                  <div className="button-dropdown-item active">
                    Second Option
                  </div>
                  <div className="button-dropdown-item">Third Option</div>
                  <div className="button-dropdown-item">Fourth Option</div>
                </div>
              </div>
            </div>
          </div>
          <div className="components-subsection">
            <div className="components-subsection-title">Header</div>
            <div className="components-subsection-desc">
              Fast uses conventional HTTP response codes to indicate the success
              or failure of an API request.
            </div>
            <div className="components-subsection-content">
              <div className="components-subsection-content-header"></div>
            </div>
          </div>
          <div className="components-subsection">
            <div className="components-subsection-title">Footer</div>
            <div className="components-subsection-desc">
              Fast uses conventional HTTP response codes to indicate the success
              or failure of an API request.
            </div>
            <div className="components-subsection-content">
              <div className="components-subsection-content-footer"></div>
            </div>
          </div>
          <div className="components-subsection">
            <div className="components-subsection-title">Bread Crumbs</div>
            <div className="components-subsection-desc">
              Fast uses conventional HTTP response codes to indicate the success
              or failure of an API request.
            </div>
            <div className="components-subsection-content">
              <div className="components-subsection-content-bread"></div>
            </div>
          </div>
          <div className="components-subsection">
            <div className="components-subsection-title">Cards</div>
            <div className="components-subsection-desc">
              Fast uses conventional HTTP response codes to indicate the success
              or failure of an API request.
            </div>
            <div className="components-subsection-content d-md-flex d-sm-block">
              {contents.map(content => {
                return (
                  <Card
                    key={content.title}
                    {...content}
                    onClick={() => {}}
                  ></Card>
                );
              })}
            </div>
          </div>
          <div className="components-subsection">
            <div className="components-subsection-title">Code Picker</div>
            <div className="components-subsection-desc">
              Fast uses conventional HTTP response codes to indicate the success
              or failure of an API request.
            </div>
            <div className="components-subsection-content">
              <div className="components-subsection-content-code"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ComponentStyle>
  );
}

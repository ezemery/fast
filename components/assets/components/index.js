import React from 'react'
import {Icon} from 'antd'
import './style.scss'
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
  );
}

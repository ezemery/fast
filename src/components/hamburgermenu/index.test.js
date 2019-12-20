import React from 'react';
import ReactDOM from 'react-dom';
import  HamburgerMenu from './';

it('Hamburger menu renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HamburgerMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
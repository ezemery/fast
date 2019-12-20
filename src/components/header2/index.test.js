import React from 'react';
import ReactDOM from 'react-dom';
import  Header2 from './';

it('Header2 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header2 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
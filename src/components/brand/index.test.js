import React from 'react';
import ReactDOM from 'react-dom';
import  Brand from './';

it('Brand renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Brand />, div);
  ReactDOM.unmountComponentAtNode(div);
});
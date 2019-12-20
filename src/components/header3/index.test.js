import React from 'react';
import ReactDOM from 'react-dom';
import  Header3 from './';

it('Header3 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header3 />, div);
  ReactDOM.unmountComponentAtNode(div);
});
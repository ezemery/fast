import React from 'react';
import ReactDOM from 'react-dom';
import  Testimonial from './';

it('Testimonial renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Testimonial />, div);
  ReactDOM.unmountComponentAtNode(div);
});
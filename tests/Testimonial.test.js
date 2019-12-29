import React from 'react';
import { shallow } from 'enzyme';
import  Testimonial from '../src/components/testimonial';


describe('<Testimonial />', () => {
    it('Testimonial renders without crashing', () => {
      const wrapper = shallow(<Testimonial />);
      expect(wrapper.exits(Testimonial));
    });
  
});
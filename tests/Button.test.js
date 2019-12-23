import React from 'react';
import { shallow } from 'enzyme';
import  Button from '../src/components/button';


describe('<Button />', () => {
    it('Button renders without crashing', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.exits(Button));
    });
  
});
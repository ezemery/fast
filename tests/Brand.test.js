import React from 'react';
import { shallow } from 'enzyme';
import  Brand from '../src/components/brand';


describe('<Brand />', () => {
    it('Brand renders without crashing', () => {
      const wrapper = shallow(<Brand />);
      expect(wrapper.exits(Brand));
    });
  
});
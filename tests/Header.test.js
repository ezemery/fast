import React from 'react';
import { shallow } from 'enzyme';
import  Header from '../src/components/header';


describe('<Header />', () => {
    it('Header renders without crashing', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper.exits(Header));
    });
  
});
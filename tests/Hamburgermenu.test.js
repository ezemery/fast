import React from 'react';
import { shallow } from 'enzyme';
import  HamburgerMenu from '../src/components/hamburgermenu';


describe('<HamburgerMenu />', () => {
    it('HamburgerMenu renders without crashing', () => {
      const wrapper = shallow(<HamburgerMenu />);
      expect(wrapper.exits(HamburgerMenu));
    });
  
});
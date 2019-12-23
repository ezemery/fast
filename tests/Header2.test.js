import React from 'react';
import { shallow } from 'enzyme';
import  Header2 from '../src/components/header2';


describe('<Header2 />', () => {
    it('Header2 renders without crashing', () => {
      const wrapper = shallow(<Header2 />);
      expect(wrapper.exits(Header2));
    });
  
});
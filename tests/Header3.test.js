import React from 'react';
import { shallow } from 'enzyme';
import  Header3 from '../src/components/header3';


describe('<Header3 />', () => {
    it('Header3 renders without crashing', () => {
      const wrapper = shallow(<Header3 />);
      expect(wrapper.exits(Header3));
    });
  
});

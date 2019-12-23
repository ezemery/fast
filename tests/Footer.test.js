import React from 'react';
import { shallow } from 'enzyme';
import  Footer from '../src/components/footer';

describe('<Footer />', () => {
    it('Footer renders without crashing', () => {
      const wrapper = shallow(<Footer />);
      expect(wrapper.exits(Footer));
    });
  
});
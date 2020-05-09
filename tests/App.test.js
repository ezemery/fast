import React from 'react';
import { shallow } from 'enzyme';
import  App from '../src/App';


describe('<App />', () => {
    it('App renders without crashing', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exits(App));
    });
  
});
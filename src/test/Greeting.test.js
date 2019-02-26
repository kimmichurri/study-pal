import React from 'react';
import Greeting from '../Greeting';
import { shallow } from 'enzyme';

describe('Greeting', () => {

    let wrapper;
  
    beforeEach(() => {
  
      wrapper = shallow(
        <Greeting />
      )
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
      });
});
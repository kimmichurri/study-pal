import React from 'react';
import Greeting from './Greeting.test';
import { shallow } from 'enzyme';


describe('Greeting', () => {
    let wrapper;
    
    it('renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })
})
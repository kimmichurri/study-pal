import React from 'react';
import Greeting from './Greeting.test';
import { shallow } from 'enzyme';


describe('Greeting', () => {

    
    it('should render greeting with snapshot', () => {
        const wrapper = shallow(
            <Greeting />
        )
        expect(wrapper).toMatchSnapshot();
    })
})
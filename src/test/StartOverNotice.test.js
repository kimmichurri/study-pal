import React from 'react';
import StartOverNotice from '../StartOverNotice';
import { shallow } from 'enzyme';

describe('StartOverNotice', () => {
    
    let wrapper;

    beforeEach(() => {
        
        wrapper = shallow(
            <StartOverNotice />
        )
    });

    it ('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
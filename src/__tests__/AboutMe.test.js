import React from 'react';
import { shallow } from 'enzyme';
import AboutMe from '../components/AboutMe.jsx';

describe('AboutMe', () => {
    it('renders without crashing', () => {
        const Page = shallow(<AboutMe />);
    });
});
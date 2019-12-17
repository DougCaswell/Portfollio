import React from 'react';
import { shallow } from 'enzyme';
import Home from '../components/Home.jsx';

describe('Home', () => {
    it('renders without crashing', () => {
        const Page = shallow(<Home />);
    });
});
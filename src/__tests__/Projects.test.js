import React from 'react';
import { shallow } from 'enzyme';
import Projects from '../components/Projects.jsx';

describe('Projects', () => {
    it('renders without crashing', () => {
        const Page = shallow(<Projects />);
    });
});
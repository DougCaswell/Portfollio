import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../components/Carousel.jsx';

describe('Home', () => {
    it('renders without crashing', () => {
        const Page = shallow(<Carousel slides={[{ path: 'test', name: 'test' }]} />);
    });
});
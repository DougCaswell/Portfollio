import React from 'react';
import { shallow } from 'enzyme';
import PageNotFound from '../components/PageNotFound.jsx';

describe('PageNotFound', () => {
    it('renders without crashing', () => {
        const Page = shallow(<PageNotFound />);
    });
});
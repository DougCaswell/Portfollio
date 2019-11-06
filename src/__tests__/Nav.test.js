import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Nav.jsx';

describe('NavBar', () => {
    let mountedNav;
    beforeEach(() => {
        mountedNav = shallow(<Nav />);
    });
    it('renders without crashing', () => {
        const NavBar = shallow(<Nav />);
    });
    it('renders 3 links', () => {
        const links = mountedNav.find('a');
        expect(links.length).toBe(3);
    });
});
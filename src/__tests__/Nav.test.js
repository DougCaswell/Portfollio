import React from 'react';
import { shallow, mount } from 'enzyme';
import Nav from '../components/Nav.jsx';
import { MemoryRouter } from 'react-router-dom';

describe('NavBar', () => {
    let mountedNav;
    beforeEach(() => {
        mountedNav = mount(
            <MemoryRouter>
                <Nav />
            </MemoryRouter>
        );
    });
    it('renders without crashing', () => {
        const NavBar = shallow(<Nav />);
    });
    it('renders 3 links', () => {
        const links = mountedNav.find('NavLink');
        expect(links.length).toBe(3);
    });
});
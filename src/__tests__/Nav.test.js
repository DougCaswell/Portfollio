import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../components/Nav.jsx';


it('renders Navbar without crashing', () => {
    const NavBar = shallow(<Nav />);
});
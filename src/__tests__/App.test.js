import React from 'react';
import { shallow } from 'enzyme';
import App from '../App.jsx';

describe('App', () => {
  let portfollio;
  beforeEach(() => {
    portfollio = shallow(<App />)
  })

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('contains Nav component', () => {
    const navComponent = portfollio.find('Nav');
    expect(navComponent.length).toBe(1);
  })
});

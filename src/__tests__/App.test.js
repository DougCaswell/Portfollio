import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../App.jsx';
import { MemoryRouter } from 'react-router';
import Home from '../components/Home.jsx';
import PageNotFound from '../components/PageNotFound.jsx';
import routes from '../routes.jsx';

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

describe('React-Router-Dom', () => {
  it('invalid path should redirect to 404', () => {
    const component = mount(<MemoryRouter
      initialEntries={["/three"]}
    >
      {routes}
    </MemoryRouter >);

    expect(component.find(Home)).toHaveLength(0);
    expect(component.find(PageNotFound)).toHaveLength(1);
  });

  it('path for home page directs to Home', () => {
    const component = mount(<MemoryRouter
      initialEntries={["/"]}
    >
      {routes}
    </MemoryRouter >);

    expect(component.find(Home)).toHaveLength(1);
    expect(component.find(PageNotFound)).toHaveLength(0);

  });
});

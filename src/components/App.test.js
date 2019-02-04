import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

it('renders without crashing', () => {
  const component = shallow(<App />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

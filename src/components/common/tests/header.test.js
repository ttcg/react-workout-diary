import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../header';

it('renders without crashing', () => {    

    const component = shallow(<Header />);

    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});
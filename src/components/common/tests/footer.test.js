import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from '../footer';

it('renders without crashing', () => {    

    const component = shallow(<Footer />);

    const tree = toJson(component);
    expect(tree).toMatchSnapshot();
});
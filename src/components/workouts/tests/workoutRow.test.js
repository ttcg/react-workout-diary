import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WorkoutRow from '../workoutRow';

it('renders without crashing', () => {
    const props = {
        showEdit: jest.fn(),
        handleDelete: jest.fn(),
        item: {
            "id": '38046275-fe56-414e-9c51-75e2fc84438e',
            "workoutType": "Running",
            "date": "2019-01-02",
            "calories": 340
        }
    };

    const component = shallow(<WorkoutRow {...props} i={1}  />);

    const tree = toJson(component);
    expect(tree).toMatchSnapshot();

    component.find('Button.testEdit').simulate('click');
    expect(props.showEdit).toHaveBeenCalledTimes(1);

    component.find('Button.testDelete').simulate('click');
    expect(props.handleDelete).toHaveBeenCalledTimes(1);
});
import React from 'react';
import { shallow } from 'enzyme';
import WorkoutRow from '../workoutRow';

it('renders without crashing', () => {
    const showEdit = jest.fn();
    const handleDelete = jest.fn();
    const item = {
        "id": '38046275-fe56-414e-9c51-75e2fc84438e',
        "workoutType": "Running",
        "date": "2019-01-02",
        "calories": 340
    }
    
    const component = shallow(<WorkoutRow i="1" item={item} handleDelete={handleDelete} showEdit={showEdit} />);
    
    component.find('Button.testEdit').simulate('click');
    expect(showEdit).toHaveBeenCalledTimes(1);

    component.find('Button.testDelete').simulate('click');
    expect(handleDelete).toHaveBeenCalledTimes(1);
});
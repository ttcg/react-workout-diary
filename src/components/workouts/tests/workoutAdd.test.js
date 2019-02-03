import React from 'react';
import { shallow } from 'enzyme';
import WorkoutAdd from '../workoutAdd';

it('renders without crashing', () => {
    const
        onChange = jest.fn(),
        onChangeDate = jest.fn(),
        onAddNew = jest.fn(),
        toggle = jest.fn(),
        item = {};

    const component = shallow(<WorkoutAdd
        toggle={toggle}
        modal={true}
        item={item}
        onChange={onChange}
        onChangeDate={onChangeDate}
        onAddNew={onAddNew} />);        

        component.find('Button[color="primary"]').simulate('click');
        expect(onAddNew).toHaveBeenCalledTimes(1);

        component.find('Button[color="secondary"]').simulate('click');
        expect(toggle).toHaveBeenCalledTimes(1);

    // component.find('Button').find({ color: 'primary' }).simulate('click');
    // expect(onAddNew).toHaveBeenCalledTimes(1);

    // component.find('Button').find({ color: 'secondary' }).simulate('click');
    // expect(toggle).toHaveBeenCalledTimes(1);
});
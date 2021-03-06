import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WorkoutAdd from '../workoutAdd';

it('renders without crashing', () => {
    const props = {
        onChange: jest.fn(),
        onChangeDate: jest.fn(),
        onAddNew: jest.fn(),
        toggle: jest.fn(),
        maxDate: new Date('2019-01-31'),
        item: { date: new Date('2019-01-02') }
    };    

    const component = shallow(<WorkoutAdd
        {...props}
        modal={true} />);        

        const tree = toJson(component);
        expect(tree).toMatchSnapshot();

        component.find('Button[color="primary"]').simulate('click');
        expect(props.onAddNew).toHaveBeenCalledTimes(1);

        component.find('Button[color="secondary"]').simulate('click');
        expect(props.toggle).toHaveBeenCalledTimes(1);

    // component.find('Button').find({ color: 'primary' }).simulate('click');
    // expect(onAddNew).toHaveBeenCalledTimes(1);

    // component.find('Button').find({ color: 'secondary' }).simulate('click');
    // expect(toggle).toHaveBeenCalledTimes(1);
});
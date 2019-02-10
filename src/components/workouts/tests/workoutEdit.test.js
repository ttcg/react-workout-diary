import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WorkoutEdit from '../workoutEdit';

it('renders without crashing', () => {
    const
        onChange = jest.fn(),
        onChangeDate = jest.fn(),
        onEdit = jest.fn(),
        toggle = jest.fn(),
        maxDate = new Date('2019-01-31'),
        item = { date: new Date('2019-01-02') };

    const component = shallow(<WorkoutEdit
        toggle={toggle}
        modal={true}
        item={item}
        maxDate={maxDate}
        onChange={onChange}
        onChangeDate={onChangeDate}
        onEdit={onEdit} />);        

        const tree = toJson(component);
        expect(tree).toMatchSnapshot();

        component.find('Button[color="primary"]').simulate('click');
        expect(onEdit).toHaveBeenCalledTimes(1);

        component.find('Button[color="secondary"]').simulate('click');
        expect(toggle).toHaveBeenCalledTimes(1);
});
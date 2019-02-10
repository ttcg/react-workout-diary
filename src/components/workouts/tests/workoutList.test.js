import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import WorkoutList from '../workoutList';

describe('WorkoutListTest', () => {
    it('renders without crashing', () => {
        const showEdit = jest.fn(),
            handleDelete = jest.fn(),
            items = [
                {
                    "id": '38046275-fe56-414e-9c51-75e2fc84438e',
                    "workoutType": "Running",
                    "date": "2019-01-02",
                    "calories": 340
                },
                {
                    "id": '28046275-fe56-414e-9c51-75e2fc84438f',
                    "workoutType": "Running",
                    "date": "2019-01-02",
                    "calories": 500
                }
            ]

        const component = shallow(<WorkoutList items={items} handleDelete={handleDelete} showEdit={showEdit} />);

        const tree = toJson(component);
        expect(tree).toMatchSnapshot();

        expect(component.find('WorkoutRow')).toHaveLength(items.length);
    });
});
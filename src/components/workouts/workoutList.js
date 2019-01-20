import React from 'react';
import {
    Table
} from 'reactstrap';
import WorkoutRow from './workoutRow';

const WorkoutList = ({items}) =>
    <Table striped>
        <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Type</th>
                <th>Calories</th>
            </tr>
        </thead>

        <tbody>
            {
                items.map((item, i) =>
                    <WorkoutRow item={item} i={i} />
                )
            }
        </tbody>
    </Table>

export default WorkoutList
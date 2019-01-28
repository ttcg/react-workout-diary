import React from 'react';
import {
    Table
} from 'reactstrap';
import WorkoutRow from './workoutRow';

const WorkoutList = ({items, showEdit, handleDelete}) =>
    <Table striped>
        <thead>
            <tr>
                <th>#</th>
                <th>Date</th>
                <th>Type</th>
                <th>Calories</th>
                <th></th>
            </tr>
        </thead>

        <tbody>
            {
                items.map((item, i) =>
                    <WorkoutRow 
                        key={i} 
                        item={item} 
                        i={i}
                        showEdit={showEdit}
                        handleDelete={handleDelete} />
                )
            }
        </tbody>
    </Table>

export default WorkoutList
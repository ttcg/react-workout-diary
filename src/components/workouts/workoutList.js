import React from 'react';
import {
    Table
} from 'reactstrap';
import PropTypes from 'prop-types';
import WorkoutRow from './workoutRow';

const propTypes = {
    showEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
}

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

WorkoutList.propTypes = propTypes;

export default WorkoutList;
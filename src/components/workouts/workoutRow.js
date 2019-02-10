import React from 'react';
import ReactMoment from 'react-moment';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const propTypes = {
    showEdit: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    i: PropTypes.number.isRequired,
    item: PropTypes.object.isRequired
}

const WorkoutRow = ({ item, i, showEdit, handleDelete }) =>
    <tr>
        <th scope="row">{++i}</th>
        <td><ReactMoment format="DD MMM YYYY">
            {item.date}
        </ReactMoment></td>
        <td>{item.workoutType}</td>
        <td>{item.calories}</td>
        <td>
            <Button className="testEdit" onClick={() => showEdit(item)} color="link">Edit</Button> |
            <Button className="testDelete" onClick={() => handleDelete(item.id)} color="link">Delete</Button></td>
    </tr>

WorkoutRow.propTypes = propTypes;

export default WorkoutRow;
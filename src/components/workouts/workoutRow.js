import React from 'react';
import Moment from 'react-moment';
import { Button } from 'reactstrap';

const WorkoutRow = ({ item, i, showEdit, handleDelete }) =>
    <tr>
        <th scope="row">{++i}</th>
        <td><Moment format="DD MMM YYYY" parse="DD/MM/YYYY">
            {item.date}
        </Moment></td>
        <td>{item.workoutType}</td>
        <td>{item.calories}</td>
        <td>
            <Button onClick={() => showEdit(item)} color="link">Edit</Button> |
            <Button onClick={() => handleDelete(item.id)} color="link">Delete</Button></td>
    </tr>

export default WorkoutRow;
import React from 'react';
import ReactMoment from 'react-moment';
import { Button } from 'reactstrap';

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

export default WorkoutRow;
import React from 'react';
import Moment from 'react-moment';

const WorkoutRow = ({item, i}) =>
    <tr key={i}>
        <th scope="row">{++i}</th>
        <td><Moment format="DD MMM YYYY" parse="DD/MM/YYYY">
            {item.date}
        </Moment></td>
        <td>{item.workoutType}</td>
        <td>{item.calories}</td>
    </tr>

export default WorkoutRow;
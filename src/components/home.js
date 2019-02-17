import React from 'react';
import { NavLink } from 'react-router-dom';

const Home = () =>
    <React.Fragment>
        <ul>
            <li><NavLink className="nav-link" activeClassName="active" to='/workoutsreact' exact>Workouts (react)</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="active" to='/workouts' exact>Workouts (react-redux)</NavLink></li>
        </ul>
        <ul>
            <li>Last workout</li>
            <li>Total workout in this month</li>
        </ul>
    </React.Fragment>

export default Home;

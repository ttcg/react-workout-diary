import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';
import { Constants } from '../../utilities'

export default function Header() {
    const [collapsed, setCollapsed] = useState(true);

    function toggleNavbar () {
        setCollapsed(!collapsed);
    }
    
    return (
        <Navbar dark expand="md" sticky="top" color="dark">
            <Link className="navbar-brand" to="/">React Workout Diary</Link>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to='/' exact>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to={Constants.Routes.WorkoutsApi} exact>Workouts (Api)</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to={Constants.Routes.WorkoutsSaga} exact>Workouts (Saga)</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to={Constants.Routes.Workouts} exact>Workouts (Redux)</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to={Constants.Routes.WorkoutsReact} exact>Workouts (React)</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink className="nav-link" activeClassName="active" to={Constants.Routes.About} exact>About</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}
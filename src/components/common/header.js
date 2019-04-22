import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';

import { NavLink, Link } from 'react-router-dom';
import { Constants } from '../../utilities'

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collapsed: true
        };
    }

    toggleNavbar = () => {
        this.setState(prevState => ({
            collapsed: !prevState.collapsed
        }));
    }

    render() {
        return (            
            <Navbar dark expand="md" sticky="top" color="dark">
                <Link className="navbar-brand" to="/">React Workout Diary</Link>
                <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                <Collapse isOpen={!this.state.collapsed} navbar>
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
};
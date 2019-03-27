import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { SignIn } from './signin';

const Home = () =>
    <React.Fragment>
        <ul>
            <li><NavLink className="nav-link" activeClassName="active" to='/workoutsreact' exact>Workouts (react)</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="active" to='/workouts' exact>Workouts (react-redux)</NavLink></li>
            <li><NavLink className="nav-link" activeClassName="active" to='/workoutsapi' exact>Workouts (redux &amp; Api)</NavLink></li>
        </ul>        
        <SignIn />
    </React.Fragment>

const mapStateToProps = (state) => {
    return { authentication: state.authentication };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

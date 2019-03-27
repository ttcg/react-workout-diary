import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from '../components/home/signIn';

export class homePage extends Component {

    onSubmit = values => {
        console.log(values)
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    <li><NavLink className="nav-link" activeClassName="active" to='/workoutsreact' exact>Workouts (react)</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName="active" to='/workouts' exact>Workouts (react-redux)</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName="active" to='/workoutsapi' exact>Workouts (redux &amp; Api)</NavLink></li>
                </ul>
                <SignIn onSubmit={this.onSubmit} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { authentication: state.authentication };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage)

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SignIn from '../components/home/signIn';
import { authenticateUser, clearAuthenticationMessage } from '../actions/authenticateApiActions'

export class homePage extends Component {

    onSubmit = values => {
        this.props.authenticate(values);
    }

    componentWillUnmount() {
        this.props.clearAuthenticationMessage();
    }

    render() {

        const { authentication } = this.props;

        return (
            <React.Fragment>
                <ul>
                    <li><NavLink className="nav-link" activeClassName="active" to='/workoutsreact' exact>Workouts (react)</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName="active" to='/workouts' exact>Workouts (react-redux)</NavLink></li>
                    <li><NavLink className="nav-link" activeClassName="active" to='/workoutsapi' exact>Workouts (redux &amp; Api)</NavLink></li>
                </ul>
                <p>
                    Api Service Url: <a href={process.env.REACT_APP_ServiceUrl} target="_blank" rel="noopener noreferrer">{process.env.REACT_APP_ServiceUrl}</a>
                </p>
                <SignIn 
                    onSubmit={this.onSubmit} 
                    currentUser={ authentication.currentUser } 
                    errorMessage={ authentication.error }
                    />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return { 
        authentication: state.authentication
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: data => dispatch(authenticateUser(data)),
        clearAuthenticationMessage: () => dispatch(clearAuthenticationMessage())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage)

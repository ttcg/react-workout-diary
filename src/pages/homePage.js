import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Col
} from 'reactstrap'
import SignIn from '../components/home/signIn';
import {
    authenticateUser,
    clearAuthenticationMessage,
    logOut
} from '../actions/authenticateApiActions'

export class homePage extends Component {

    onSubmit = values => {
        this.props.authenticate(values);
    }

    componentWillUnmount() {
        this.props.clearAuthenticationMessage();
    }

    render() {

        const { authentication, logOut } = this.props;

        return (
            <React.Fragment>
                <SignIn
                    onSubmit={this.onSubmit}
                    onLogOut={logOut}
                    currentUser={authentication.currentUser}
                    errorMessage={authentication.error}
                    isAuthenticating={authentication.isAuthenticating}
                />
                <Container>
                    <Row>
                        <Col md={{ size: 3, order: 1, offset: 0 }}>
                            <ul>
                                <li><NavLink className="nav-link" activeClassName="active" to='/workoutsreact' exact>Workouts (react)</NavLink></li>
                                <li><NavLink className="nav-link" activeClassName="active" to='/workouts' exact>Workouts (react-redux)</NavLink></li>
                                <li><NavLink className="nav-link" activeClassName="active" to='/workoutsapi' exact>Workouts (redux &amp; Api)</NavLink></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <p>
                    Api Service Url: <a href={process.env.REACT_APP_ServiceUrl} target="_blank" rel="noopener noreferrer">{process.env.REACT_APP_ServiceUrl}</a>
                </p>

            </React.Fragment >
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
        clearAuthenticationMessage: () => dispatch(clearAuthenticationMessage()),
        logOut: () => dispatch(logOut())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(homePage)

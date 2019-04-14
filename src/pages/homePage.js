import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
    Container,
    Row,
    Col,
    Button,
    Jumbotron
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
                <Jumbotron>
                <Container>
                    <SignIn
                        onSubmit={this.onSubmit}
                        onLogOut={logOut}
                        currentUser={authentication.currentUser}
                        errorMessage={authentication.error}
                        isAuthenticating={authentication.isAuthenticating}
                    />
                </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col md="4">
                            <h2>View Workouts</h2>
                            <p>You can view the page which calls .Net Core webapi to display the list of workouts.</p>
                            <p>
                                <Link to="/workoutsapi"><Button color="secondary">View Workouts &raquo;</Button></Link>
                            </p>
                        </Col>
                        <Col md="4">
                            <h2>Secure Page</h2>
                            <p>You will need to login first to browse to this Secure Page</p>
                            <p>
                                <Link to="/securepage"><Button color="secondary">Go to Secure Page &raquo;</Button></Link>
                            </p>
                        </Col>
                        <Col md="4">
                            <h2>About</h2>
                            <p>Please click the button to view the detail of this project.</p>
                            <p>
                                <Link to="/about"><Button color="secondary">View Details &raquo;</Button></Link>
                            </p>
                        </Col>
                    </Row>
                </Container>
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

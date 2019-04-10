import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import empty from 'is-empty'

const PrivateRoute = ({ component: Component, currentUser, ...rest }) => (
    <Route
        {...rest}
        render={props => {

            return (
                empty(currentUser)
                    ?
                    <Redirect to={{
                        pathname: 'unAuthorised',
                        state: { from: props.location }
                    }}
                    />
                    :
                    <Component {...props} />
            )
        }} />
);

const mapStateToProps = (state) => ({
    currentUser: state.authentication.currentUser
})

export default connect(mapStateToProps)(PrivateRoute);  
import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const unAuthorised = ({ location }) =>
    <Container>
        <Jumbotron>
            <FontAwesomeIcon
                icon="user-slash"
                size="5x" />
            <h1 className="display-3">Unauthorised Access.</h1>
            <p className="lead">
                Please <Link to="/">login</Link> first to access {' '}
                <span className="text-danger font-italic">
                    {location.state.from.pathname}
                </span>
            </p>
        </Jumbotron>
    </Container>

export default unAuthorised;
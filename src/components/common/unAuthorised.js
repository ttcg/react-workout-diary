import React from 'react'
import { Jumbotron, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const unAuthorised = () =>
    <Container>
        <Jumbotron>
            <FontAwesomeIcon
                icon="user-slash"
                size="5x" />
            <h1 className="display-3">Unauthorised Access.</h1>
            <p className="text-danger">Please <Link to="/">login</Link> first to access this page.</p>
        </Jumbotron>
    </Container>

export default unAuthorised;
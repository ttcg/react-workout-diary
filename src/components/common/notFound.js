import React from 'react';
import { Jumbotron, Container } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons'


const NotFound = ({ location }) =>
    <Container>
        <Jumbotron>
            <FontAwesomeIcon icon={faSearchMinus} size="5x" />
            <h1 className="display-3">404</h1>
            <p className="lead">
                Path not found:
                <span className="text-danger font-italic">{" "}
                    {location.pathname}
                </span>
            </p>
        </Jumbotron>
    </Container>

export default NotFound;
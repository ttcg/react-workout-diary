import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export class securePage extends Component {
    render() {
        const { user } = this.props;
        return (
            <Container>
                <Jumbotron>
                    <FontAwesomeIcon
                        className="text-success"
                        icon={['far', 'thumbs-up']}
                        size="5x" />
                    <h1 className="display-3">This is a secure page</h1>
                    <p className="lead">Welcome <span className="font-weight-bold">{user.userName}</span>!  You have successfully logged in.</p>
                </Jumbotron>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.authentication.currentUser
})

export default connect(mapStateToProps)(securePage)
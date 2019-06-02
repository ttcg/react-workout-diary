import React from 'react';
import {
    Container
} from 'reactstrap';
import ReactMoment from 'react-moment'

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <span className="text-muted">&copy; <ReactMoment format='YYYY' /> TTCG</span>
            </Container>
        </footer>
    );
}
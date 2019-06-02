import React from 'react';
import {
    Container
} from 'reactstrap';
import ReactMoment from 'react-moment'

const Footer = () =>
    <footer className="footer">
        <Container>            
            <span className="text-muted">&copy; <ReactMoment format='YYYY' /> TTCG</span>
        </Container>
    </footer>

export default Footer;
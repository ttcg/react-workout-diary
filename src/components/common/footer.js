import React from 'react';
import {
    Container
} from 'reactstrap';
import ReactMoment from 'react-moment'
import packageJson from '../../../package.json';

const Footer = () =>
    <footer className="footer">
        <Container>
            <span className="text-muted float-right">v {packageJson.version}</span>
            <span className="text-muted">&copy; <ReactMoment format='YYYY' /> TTCG</span>
        </Container>
    </footer>

export default Footer;
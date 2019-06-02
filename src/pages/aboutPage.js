import React from 'react';
import {
    Container,
    Button
} from 'reactstrap'
import { connect } from 'react-redux'
import { resetWorkouts } from '../actions/workoutApiActions'
import packageJson from '../../package.json';

class About extends React.PureComponent {
    render() {
        const { resetWorkouts } = this.props;
        return (
            <React.Fragment>
                <Container>
                    <h1>About</h1>
                    <p>Demo website which uses React and Redux technology.  It contains basic CRUD activities.</p>
                    <p>It uses the .Net Core services hosted on GCP and the service can be viewed <a href={process.env.REACT_APP_ServiceUrl} target="_blank" rel="noopener noreferrer">{process.env.REACT_APP_ServiceUrl}</a>.</p>
                    <p>This app uses the following libraries:</p>
                    <ul>
                        <li>Axios</li>
                        <li>React-Redux</li>
                        <li>React-Router</li>
                        <li>ReactStrap</li>
                        <li>Redux-Thunk</li>
                        <li>Formik</li>
                    </ul>
                    <p>Current version - <strong>{packageJson.version}</strong></p>
                    <p>The source code can be found on <a href="https://github.com/ttcg/react-workout-diary" target="_blank" rel="noopener noreferrer">github</a></p>
                </Container>
                <Container>
                    <h2>Api Data Reset</h2>
                    Click the button to reset the data in the Api. <Button color="danger" onClick={resetWorkouts}>Reset Data</Button>
                </Container>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = {
    resetWorkouts
}

export default connect(null, mapDispatchToProps)(About);
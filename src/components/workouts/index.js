import React, { Component } from 'react';
import {
    Container
} from 'reactstrap';

import WorkoutService from '../services/workoutservice';
import WorkoutList from './workoutList';

export default class Workouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    getData() {
        setTimeout(() => {
            this.setState({
                data: WorkoutService.getWorkouts()
            })
        }, 1)
    }

    componentDidMount() {
        this.getData();
    }

    addNew = (e) =>  {
        e.preventDefault();
        alert("Add a new workout");
    }

    render() {
        return (
            <Container>
                <h1>Workouts</h1>
                <a href="#" onClick={this.addNew}>Add New Workout</a>
                <WorkoutList items={this.state.data}/>
            </Container>
        )
    }
}
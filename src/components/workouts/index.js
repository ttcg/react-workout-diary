import React, { Component } from 'react';
import {
    Container, Button
} from 'reactstrap';

import WorkoutService from '../services/workoutService';
import WorkoutList from './workoutList';
import WorkoutAdd from './workoutAdd'

export default class Workouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            add: false
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

    toggle = () => {
        this.setState({
            add: !this.state.add
        });
    }

    showAddNew = () => this.toggle();

    render() {
        return (
            <Container>
                <h1>Workouts</h1>
                <Button onClick={this.showAddNew} color="link">Add New Workout</Button>
                <WorkoutList items={this.state.data} />
                <WorkoutAdd toggle={this.toggle} modal={this.state.add} />
            </Container>
        )
    }
}
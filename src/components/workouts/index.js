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
            add: false,
            dataItem: {}
        };
    }

    getInitialState() {
        return {
            date: '',
            workoutType: undefined,
            calories: ''
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
        this.setState({
            dataItem: this.getInitialState()
        })
    }

    toggle = () => {
        this.setState({
            add: !this.state.add
        });
    }

    showAddNew = () => this.toggle();

    updateItemState = event => {
        console.log(event);
		const field = event.target.name;
		let item = this.state.dataItem;
		item[field] = event.target.value;
		return this.setState({ dataItem: item });
	}

    render() {
        return (
            <Container>
                <h1>Workouts</h1>
                <Button onClick={this.showAddNew} color="link">Add New Workout</Button>
                <WorkoutList items={this.state.data} />
                <WorkoutAdd toggle={this.toggle} modal={this.state.add} item={this.state.dataItem} onChange={this.updateItemState} />
            </Container>
        )
    }
}
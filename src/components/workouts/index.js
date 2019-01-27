import React, { Component } from 'react';
import {
    Container, Button
} from 'reactstrap';
import Moment from 'moment';

import WorkoutService from '../services/workoutService';
import WorkoutList from './workoutList';
import WorkoutAdd from './workoutAdd';

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
            workoutType: 'Running',
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
        const field = event.target.name;
        let item = this.state.dataItem;

        item[field] = event.target.value;

        return this.setState({ dataItem: item });
    }

    handleAddNew = () => {
        let item = this.state.dataItem;
        item['id'] = this.state.dataItem.length + 1;
        item['date'] = Moment(item['date'], "YYYY-MM-DD").format('DD/MM/YYYY');

        this.setState((prevState) => {
            prevState.data.push(item);
            return {
                data: prevState.data,
                dataItem: this.getInitialState()
            };
        });

        this.toggle();
    }

    render() {
        return (
            <Container>
                <h1>Workouts</h1>
                <Button onClick={this.showAddNew} color="link">Add New Workout</Button>
                <WorkoutList items={this.state.data} />
                <WorkoutAdd
                    toggle={this.toggle}
                    modal={this.state.add}
                    item={this.state.dataItem}
                    onChange={this.updateItemState}
                    onAddNew={this.handleAddNew} />
            </Container>
        )
    }
}
import React, { Component } from 'react';
import {
    Container, Button
} from 'reactstrap';
import Moment from 'moment';
import uuid from 'uuid';

import WorkoutService from '../services/workoutService';
import WorkoutList from './workoutList';
import WorkoutAdd from './workoutAdd';
import WorkoutEdit from './workoutEdit';

export default class Workouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            add: false,
            edit: false,
            dataItem: {}
        };
    }

    getInitialState() {
        return {
            id: '',
            date: Moment().format('YYYY-MM-DD'),
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

    toggleAdd = () => {
        this.setState(prevState => ({
            add: !prevState.add
        }));
    }

    toggleEdit = () => {
        this.setState(prevState => ({
            edit: !prevState.edit
        }));
    }

    showAddNew = () => {
        this.toggleAdd();
        this.setState({
            dataItem: this.getInitialState()
        });
    }

    showEdit = (item) => {
        this.toggleEdit();
        this.setState({ dataItem: item });
    }

    updateItemState = event => {
        const field = event.target.name;
        let value = event.target.value;
        let item = this.state.dataItem;

        item[field] = value;

        return this.setState({ dataItem: item });
    }

    handleAddNew = () => {
        let item = this.state.dataItem;
        item['id'] = uuid.v4();

        this.setState({
            data: [...this.state.data, item], //this.state.data.concat(item)
            dataItem: this.getInitialState()
        });

        this.toggleAdd();
    }

    handleEdit = (id) => {
        let item = this.state.dataItem;

        const index = this.state.data.findIndex(item => item.id === id),
            newList = [...this.state.data];
        newList[index] = item;

        this.setState({
            data: newList,
            dataItem: this.getInitialState()
        });

        this.toggleEdit();
    }

    handleDelete = (id) => {
        if (window.confirm("Are you sure that you want to delete this item?")) {
            this.setState(prevState => ({
                data: prevState.data.filter(item => item.id !== id)
            }));
        }
    }

    render() {
        return (
            <Container>
                <h1>Workouts</h1>
                <Button onClick={this.showAddNew} color="link">Add New Workout</Button>
                <WorkoutList
                    items={this.state.data}
                    showEdit={this.showEdit}
                    handleDelete={this.handleDelete} />
                <WorkoutAdd
                    toggle={this.toggleAdd}
                    modal={this.state.add}
                    item={this.state.dataItem}
                    onChange={this.updateItemState}
                    onAddNew={this.handleAddNew} />
                <WorkoutEdit
                    toggle={this.toggleEdit}
                    modal={this.state.edit}
                    item={this.state.dataItem}
                    onChange={this.updateItemState}
                    onEdit={this.handleEdit} />
            </Container>
        )
    }
}
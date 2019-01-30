import React, { Component } from 'react';
import {
    Container, Button
} from 'reactstrap';
import uuid from 'uuid';

import WorkoutService from '../services/workoutService';
import WorkoutList from './workoutList';
import WorkoutAdd from './workoutAdd';
import WorkoutEdit from './workoutEdit';

export default class Workouts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataList: [],
            add: false,
            edit: false,
            dataItem: {}
        };
    }

    getInitialState() {
        return {
            id: '',
            date: new Date(),
            workoutType: 'Running',
            calories: ''
        };
    }

    getData() {
        setTimeout(() => {
            this.setState({
                dataList: WorkoutService.getWorkouts()
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
        this.setState({ dataItem: Object.assign({}, item) });
    }

    onChangeDate = date => {
        let item = this.state.dataItem;

        item['date'] = date;

        return this.setState({ dataItem: item });
    }

    updateItemState = event => {
        const field = event.target.name;
        const value = event.target.value;
        let item = this.state.dataItem;

        item[field] = value;

        return this.setState({ dataItem: item });
    }

    handleAddNew = () => {
        let item = this.state.dataItem;
        item['id'] = uuid.v4();

        this.setState({
            dataList: [...this.state.dataList, item], //this.state.data.concat(item)
            dataItem: this.getInitialState()
        });

        this.toggleAdd();
    }

    handleEdit = (id) => {
        const item = this.state.dataItem;
        const index = this.state.dataList.findIndex(item => item.id === id);
        let newList = [...this.state.dataList];
        newList[index] = item;

        this.setState({
            dataList: newList,
            dataItem: this.getInitialState()
        });

        this.toggleEdit();
    }

    handleDelete = (id) => {
        if (window.confirm("Are you sure that you want to delete this item?")) {
            this.setState(prevState => ({
                dataList: prevState.dataList.filter(item => item.id !== id)
            }));
        }
    }

    render() {
        return (
            <Container>
                <h1>Workouts</h1>
                <Button onClick={this.showAddNew} color="link">Add New Workout</Button>
                <WorkoutList
                    items={this.state.dataList}
                    showEdit={this.showEdit}
                    handleDelete={this.handleDelete} />
                {this.state.add &&
                    <WorkoutAdd
                        toggle={this.toggleAdd}
                        modal={this.state.add}
                        item={this.state.dataItem}
                        onChange={this.updateItemState}
                        onChangeDate={this.onChangeDate}
                        onAddNew={this.handleAddNew} />
                }
                {this.state.edit &&
                    <WorkoutEdit
                        toggle={this.toggleEdit}
                        modal={this.state.edit}
                        item={this.state.dataItem}
                        onChange={this.updateItemState}
                        onChangeDate={this.onChangeDate}
                        onEdit={this.handleEdit} />
                }
            </Container>
        )
    }
}
import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import uuid from 'uuid';
import Moment from 'moment';
import {
    Container, Button
} from 'reactstrap';

import {
    WorkoutList,
    WorkoutEditFormik,
    WorkoutAddFormik
} from '../components/workouts';

import {
    fetchWorkouts,
    deleteWorkout,
    addWorkout,
    editWorkout
} from '../actions/workoutApiActionsForSaga'

export class WorkoutListSagaPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            add: false,
            edit: false,
            dataItem: {}
        };
    }

    getItemInitialState() {
        return {
            id: '',
            date: new Date(),
            workoutType: 'Running',
            calories: ''
        };
    }

    componentDidMount() {
        this.props.fetchWorkouts();
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
            dataItem: this.getItemInitialState()
        });
    }

    showEdit = (item) => {
        this.toggleEdit();
        item.date = Moment(item.date).toDate()
        this.setState({ dataItem: Object.assign({}, item) });
    }

    onChangeDate = date => {
        let item = this.state.dataItem;

        item['date'] = date;

        return this.setState({ dataItem: item });
    }

    onChangeForm = event => {
        const field = event.target.name;
        const value = event.target.value;
        let item = this.state.dataItem;

        item[field] = value;

        return this.setState({ dataItem: item });
    }

    handleAddNew = () => {
        let item = this.state.dataItem;
        item['id'] = uuid.v4();

        //this.props.addWorkout(item);

        this.toggleAdd();
    }

    handleDelete = (id) => {
        if (window.confirm("Are you sure that you want to delete this item?")) {            
            this.props.deleteWorkout(id);
        }
    }

    handleEdit = () => {
        //this.props.editWorkout(this.state.dataItem)

        this.setState({
            dataItem: this.getItemInitialState()
        });

        this.toggleEdit();
    }

    render() {
        const {
            items
        } = this.props;
        return (
            <Container>
                <h1>Workouts (Redux-Saga)</h1>           
                <Button onClick={this.showAddNew} color="link">Add New Workout</Button>     
                <WorkoutList
                    items={items}
                    handleDelete={this.handleDelete}
                    showEdit={this.showEdit} />
                {this.state.add &&
                    <WorkoutAddFormik
                        toggle={this.toggleAdd}
                        modal={this.state.add}
                        onAddNew={this.handleAddNew} />
                }
                {this.state.edit &&
                    <WorkoutEditFormik
                        toggle={this.toggleEdit}
                        modal={this.state.edit}
                        item={this.state.dataItem}
                        onEdit={this.handleEdit} />
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state.workoutsFromApi.workouts };
};

const mapDispatchToProps = {
    fetchWorkouts: fetchWorkouts,
    deleteWorkout: id => deleteWorkout(id),
    addWorkout: item => addWorkout(item),
    editWorkout: item => editWorkout(item)
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutListSagaPage)

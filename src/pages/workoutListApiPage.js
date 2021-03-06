import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
    addWorkout,
    deleteWorkout,
    editWorkout,
    fetchWorkout
} from "../actions/workoutApiActions";

export class workoutListApiPage extends Component {

    static propTypes = {
        items: PropTypes.arrayOf(PropTypes.object).isRequired,
        addWorkout: PropTypes.func.isRequired,
        deleteWorkout: PropTypes.func.isRequired
    }

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
        this.props.fetchWorkout();
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
    }

    showEdit = (item) => {
        this.toggleEdit();
        item.date = Moment(item.date).toDate()
        this.setState({ dataItem: Object.assign({}, item) });
    }

    handleAddNew = (values) => {
        let item = values;
        item.id = uuid.v4();

        this.props.addWorkout(item);

        this.toggleAdd();
    }

    handleDelete = (id) => {
        if (window.confirm("Are you sure that you want to delete this item?"))
            this.props.deleteWorkout(id);
    }

    handleEdit = (values) => {
        this.props.editWorkout(values)

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
                <h1>Workouts (React-Redux with Api)</h1>
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

const mapDispatchToProps = (dispatch) => {
    return {
        addWorkout: item => dispatch(addWorkout(item)),
        deleteWorkout: id => dispatch(deleteWorkout(id)),
        editWorkout: item => dispatch(editWorkout(item)),
        fetchWorkout: () => dispatch(fetchWorkout())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(workoutListApiPage)

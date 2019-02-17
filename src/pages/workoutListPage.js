import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import {
    Container, Button
} from 'reactstrap';
import WorkoutList from '../components/workouts/workoutList';
import WorkoutAdd from '../components/workouts/workoutAdd';
//import WorkoutEdit from '../components/workouts/workoutEdit';
import { 
    addWorkout,
    deleteWorkout 
} from "../actions/index";

export class workoutListPage extends Component {
    
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
        //this.setState({ dataItem: Object.assign({}, item) });
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

        this.props.addWorkout(item);

        this.toggleAdd();
    }

    handleDelete = (id) => {
        if (window.confirm("Are you sure that you want to delete this item?")) {
            this.props.deleteWorkout(id)
        }
    }
    

    render() {
        const {
            items
        } = this.props;
        return (
            <Container>
                <h1>Workouts (React-Redux)</h1>
                <Button onClick={this.showAddNew} color="link">Add New Workout</Button>
                <WorkoutList 
                    items={items} 
                    handleDelete={this.handleDelete} 
                    showEdit={this.showEdit} />
                {this.state.add &&
                    <WorkoutAdd
                        toggle={this.toggleAdd}
                        modal={this.state.add}
                        item={this.state.dataItem}
                        onChange={this.onChangeForm}
                        onChangeDate={this.onChangeDate}
                        onAddNew={this.handleAddNew} />
                }
                {/* {this.state.edit &&
                    <WorkoutEdit
                        toggle={this.toggleEdit}
                        modal={this.state.edit}
                        item={this.state.dataItem}
                        onChange={this.updateItemState}
                        onChangeDate={this.onChangeDate}
                        onEdit={this.handleEdit} />
                } */}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return { items: state.workouts };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addWorkout: item => dispatch(addWorkout(item)),
        deleteWorkout: id => dispatch(deleteWorkout(id))
      };
}

export default connect(mapStateToProps, mapDispatchToProps)(workoutListPage)

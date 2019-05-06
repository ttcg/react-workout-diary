import React, { Component } from 'react'
import { connect } from 'react-redux'

import Moment from 'moment';
import {
    Button,
    Container
} from 'reactstrap';

import {
    WorkoutList,
    WorkoutEditFormikV2 as WorkoutEditFormik,
    WorkoutAddFormikV2 as WorkoutAddFormik
} from '../components/workouts';

import {
    fetchWorkouts,
    deleteWorkout,
    addWorkout,
    editWorkout,
    clearError
} from '../actions/workoutApiActionsForSaga'
import {
    closeModal,
    openModal
} from '../actions/modalActions'
import { Modal } from '../utilities/constants'
import { getModalOpenById } from '../reducers/modalSelectors'

export class WorkoutListSagaPage extends Component {

    componentDidMount() {
        this.props.fetchWorkouts();
    }

    toggleAdd = () => {
        if (this.props.isAddModalOpen) this.props.clearError();
        let toggleFunc = this.props.isAddModalOpen ? this.props.closeModal : this.props.openModal;
        toggleFunc(Modal.AddWorkout)
    }

    toggleEdit = () => {
        if (this.props.isEditModalOpen) this.props.clearError();
        let toggleFunc = this.props.isEditModalOpen ? this.props.closeModal : this.props.openModal;
        toggleFunc(Modal.EditWorkout)
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
        this.props.addWorkout(values);
    }

    handleDelete = (id) => {
        if (window.confirm("Are you sure that you want to delete this item?")) {
            this.props.deleteWorkout(id);
        }
    }

    handleEdit = (values) => {
        this.props.editWorkout(values);
    }

    render() {
        const {
            items,
            error,
            isSubmitting,
            isAddModalOpen,
            isEditModalOpen
        } = this.props;

        return (
            <Container>
                <h1>Workouts (Redux-Saga)</h1>
                <Button onClick={this.showAddNew} color="link">Add New Workout</Button>
                <WorkoutList
                    items={items}
                    handleDelete={this.handleDelete}
                    showEdit={this.showEdit} />
                {isAddModalOpen &&
                    <WorkoutAddFormik
                        toggle={this.toggleAdd}
                        modal={isAddModalOpen}
                        onAddNew={this.handleAddNew}
                        error={error}
                        isSubmitting={isSubmitting} />
                }
                {isEditModalOpen &&
                    <WorkoutEditFormik
                        toggle={this.toggleEdit}
                        modal={isEditModalOpen}
                        item={this.state.dataItem}
                        onEdit={this.handleEdit}
                        error={error}
                        isSubmitting={isSubmitting} />
                }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.workoutsFromApi.workouts,
        error: state.workoutsFromApi.error,
        isSubmitting: state.workoutsFromApi.isSubmitting,
        isEditModalOpen: getModalOpenById(state, Modal.EditWorkout),
        isAddModalOpen: getModalOpenById(state, Modal.AddWorkout),
    };
};

const mapDispatchToProps = {
    fetchWorkouts: fetchWorkouts,
    deleteWorkout: id => deleteWorkout(id),
    addWorkout: item => addWorkout(item),
    editWorkout: item => editWorkout(item),
    clearError: clearError,
    openModal: id => openModal(id),
    closeModal: id => closeModal(id)
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutListSagaPage)

import React, { Component } from 'react';
import {
    Modal, ModalBody, ModalHeader, ModalFooter, Button
    , Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class WorkoutEdit extends Component {

    static propTypes = {
        modal: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired,
        onChange: PropTypes.func.isRequired,
        onChangeDate: PropTypes.func.isRequired,
        onEdit: PropTypes.func.isRequired,
        item: PropTypes.object.isRequired,
        maxDate: PropTypes.instanceOf(Date)
    }

    static defaultProps = {
        maxDate: new Date()
    }

    render() {
        const {
            modal,
            toggle,
            item,
            onChange,
            onChangeDate,
            onEdit,
            maxDate } = this.props;
        return (
            <Modal isOpen={modal} toggle={toggle} centered>
                <ModalHeader toggle={toggle}>Edit Workout</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="Id">Id</Label>
                            <Input plaintext readOnly value={item.id} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Date">Date</Label><br />
                            <DatePicker
                                name="date"
                                id="Date"
                                className="form-control"
                                selected={item.date}
                                onChange={onChangeDate}
                                dateFormat="dd/MM/yyyy"
                                maxDate={maxDate}
                            /> 
                        </FormGroup>
                        <FormGroup>
                            <Label for="WorkoutType">Type</Label>
                            <Input
                                type="select"
                                name="workoutType"
                                onChange={onChange}
                                value={item.workoutType}
                                id="WorkoutType">
                                <option>Running</option>
                                <option>Cycling</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="Calories">Calories</Label>
                            <Input
                                type="number"
                                name="calories"
                                id="Calories"
                                value={item.calories}
                                onChange={onChange}
                                placeholder="Calories burnt"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => onEdit(item.id)}>Save</Button>{' '}
                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

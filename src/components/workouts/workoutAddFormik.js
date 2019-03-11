import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik'
import {
    Modal, ModalBody, ModalHeader, ModalFooter, Button, FormGroup, Label
} from 'reactstrap';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class workoutAddFormik extends Component {

    static propTypes = {
        modal: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired,
        onAddNew: PropTypes.func.isRequired,
        maxDate: PropTypes.instanceOf(Date)
    }

    static defaultProps = {
        maxDate: new Date()
    }

    render() {
        const {
            modal,
            toggle,
            onAddNew,
            maxDate } = this.props;

        return (
            <Formik
                initialValues={{
                    id: '',
                    date: new Date(),
                    workoutType: 'Running',
                    calories: ''
                }}
                onSubmit={(values) => { onAddNew(values); }}
                render={({ values, submitForm, setFieldValue }) => (
                    <Modal isOpen={modal} toggle={toggle} centered>
                        <ModalHeader toggle={toggle}>Add New Workout</ModalHeader>
                        <ModalBody>
                            <Form>
                                <FormGroup>
                                    <Label htmlFor="date">Date</Label><br />
                                    <DatePicker
                                        id="date"
                                        name="date"
                                        selected={values.date}
                                        className="form-control"
                                        dateFormat="dd/MM/yyyy"
                                        maxDate={maxDate}
                                        onChange={value => setFieldValue('date', value)}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="workoutType">Type</Label>
                                    <Field
                                        id="workoutType"
                                        name="workoutType"
                                        component="select"
                                        className="form-control">
                                        <option>Running</option>
                                        <option>Cycling</option>
                                    </Field>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="calories">Calories</Label>
                                    <Field
                                        id="calories"
                                        name="calories"
                                        type="number"
                                        placeholder="Calories burnt"
                                        className="form-control"
                                    />
                                </FormGroup>
                            </Form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" type="submit" onClick={submitForm}>Save</Button>{' '}
                            <Button color="secondary" onClick={toggle}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                )
                }
            />
        )
    }
}

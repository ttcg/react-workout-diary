import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import {
    Alert,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter,
    Button,
    FormGroup,
    Label
} from 'reactstrap';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker";
import uuid from 'uuid';
import * as yup from 'yup';
import Validations from '../constants/validations'
import "react-datepicker/dist/react-datepicker.css";

export default class workoutAddFormik extends Component {

    static propTypes = {
        modal: PropTypes.bool.isRequired,
        toggle: PropTypes.func.isRequired,
        onAddNew: PropTypes.func.isRequired,
        maxDate: PropTypes.instanceOf(Date),
        isSubmitting: PropTypes.bool.isRequired,
        error: PropTypes.object
    }

    static defaultProps = {
        maxDate: new Date()
    }

    render() {
        const {
            modal,
            toggle,
            onAddNew,
            maxDate,
            error,
            isSubmitting } = this.props;

        return (
            <Formik
                initialValues={{
                    id: uuid.v4(),
                    date: new Date(),
                    workoutType: 'Running',
                    calories: ''
                }}
                onSubmit={(values) => { 
                    onAddNew(values); 
                }}
                validationSchema={yup.object().shape({
                    calories: yup.number()
                        .positive()
                        .integer()
                        .required(Validations.Required),
                    date: yup
                        .date()
                        .default(() => (new Date()))
                        .typeError(Validations.Required)
                        .max(new Date(), Validations.DateNotInFuture)
                })}
                render={({
                    values,
                    submitForm,
                    setFieldValue }) => (
                        <Modal isOpen={modal} toggle={toggle} centered>
                            <ModalHeader toggle={toggle}>Add New Workout</ModalHeader>
                            <ModalBody>
                                {error &&
                                    <Alert color="danger">
                                        {error.statusText}
                                    </Alert>
                                }
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
                                        <ErrorMessage name="date" className="text-danger" component="p" />
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
                                        <ErrorMessage name="calories" className="text-danger" component="p" />
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" type="submit" onClick={submitForm} disabled={isSubmitting}>
                                    {isSubmitting ? 'Saving...' : 'Save'}
                                </Button>{' '}
                                <Button color="secondary" onClick={toggle}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    )
                }
            />
        )
    }
}

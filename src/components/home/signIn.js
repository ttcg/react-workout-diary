import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
    Button, Label, Alert
} from 'reactstrap';
import * as yup from 'yup';
import empty from 'is-empty'
import Validations from '../constants/validations'

export default class SignIn extends Component {
    render() {

        const {
            onSubmit,
            onLogOut,
            currentUser,
            errorMessage,
            isAuthenticating
        } = this.props;

        return (

            <React.Fragment>
                {empty(currentUser)
                    ?
                    <Formik
                        initialValues={{
                            email: 'ttcg@gmail.com',
                            password: 'ttcgreact',
                            rememberMe: false
                        }}
                        validationSchema={yup.object().shape({
                            email: yup.string().email()
                                .required(Validations.Required),
                            password: yup
                                .string()
                                .required(Validations.Required)
                                .min(8)
                        })}
                        onSubmit={(values) => {
                            onSubmit(values);
                        }}
                        render={({
                            submitForm }) => (
                                <div className="text-center">
                                    <Form className="form-signin">
                                        <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                                        {errorMessage &&
                                            <Alert color="danger">
                                                {errorMessage}
                                            </Alert>
                                        }
                                        <Label for="email" className="sr-only">Email address</Label>
                                        <Field
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email address" />
                                        <ErrorMessage name="email" className="text-danger" component="p" />
                                        <Label for="password" className="sr-only">Password</Label>
                                        <Field
                                            type="password"
                                            id="password"
                                            name="password"
                                            className="form-control"
                                            placeholder="Password" />
                                        <ErrorMessage name="password" className="text-danger" component="p" />
                                        {/* <div className="checkbox mb-3">
                                            <Label>
                                                <Field type="checkbox" name="rememberMe" /> Remember me </Label>
                                        </div> */}
                                        <Button color="primary" className="btn-block" onClick={submitForm} type="button" disabled={isAuthenticating}>Sign in</Button>
                                    </Form>
                                </div>)
                        }
                    />
                    :
                    <div className="text-center">
                        Welcome <b>{currentUser.userName}!</b>
                        <p><Button onClick={onLogOut} color="link">Click here to Sign out</Button></p>
                    </div>
                }
            </React.Fragment>
        )
    }
}
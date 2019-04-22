import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import {
    UnAuthorised
} from '../common';

import { WorkoutsReact } from '../../components/workouts';

import {
    HomePage,
    WorkoutListPage,
    WorkoutListApiPage,
    WorkoutListSagaPage,
    SecurePage,
    AboutPage
} from '../../pages';

import { PrivateRoute } from '../../hocs';
import { Constants } from '../../utilities';

export default class routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='(/|/home)' component={HomePage} />
                <Route path={Constants.Routes.Workouts} exact component={WorkoutListPage} />
                <Route path={Constants.Routes.WorkoutsApi} exact component={WorkoutListApiPage} />
                <Route path={Constants.Routes.WorkoutsReact} exact component={WorkoutsReact} />
                <Route path={Constants.Routes.WorkoutsSaga} exact component={WorkoutListSagaPage} />
                <Route path={Constants.Routes.Unauthorised} component={UnAuthorised} />
                <Route path={Constants.Routes.About} component={AboutPage} />                
                <PrivateRoute path={Constants.Routes.SecurePage} component={SecurePage} />
            </Switch>
        )
    }
}
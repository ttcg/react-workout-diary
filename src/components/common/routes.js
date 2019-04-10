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
    SecurePage
} from '../../pages';

import { PrivateRoute } from '../../hocs';

export default class routes extends Component {
    render() {
        return (
            <Switch>
                <Route path='(/|/home)' exact component={HomePage} />
                <Route path='/workouts' exact component={WorkoutListPage} />
                <Route path='/workoutsapi' exact component={WorkoutListApiPage} />
                <Route path='/workoutsreact' exact component={WorkoutsReact} />
                <Route path='/unauthorised' exact component={UnAuthorised} />
                <PrivateRoute path='/securepage' exact component={SecurePage} />
            </Switch>
        )
    }
}
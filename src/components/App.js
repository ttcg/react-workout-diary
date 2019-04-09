import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import es6Promise from 'es6-promise';
import es6ObjectAssign from 'es6-object-assign';
import { ToastContainer } from 'react-toastify';

import {
  Header,
  Footer,
  LoadingSpinner,
  UnAuthorised
} from './common';

import { WorkoutsReact } from '../components/workouts';

import {
  HomePage,
  WorkoutListPage,
  WorkoutListApiPage,
  SecurePage
} from '../pages';

import fontAwesome from './setupFontAwesome'

import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

fontAwesome.setup();
es6Promise.polyfill();
es6ObjectAssign.polyfill();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <div className="header">
            <Switch>
              <Route path='(/|/home)' exact component={HomePage} />
              <Route path='/workouts' exact component={WorkoutListPage} />
              <Route path='/workoutsapi' exact component={WorkoutListApiPage} />
              <Route path='/workoutsreact' exact component={WorkoutsReact} />
              <Route path='/unauthorised' exact component={UnAuthorised} />
              <Route path='/securepage' exact component={SecurePage} />
            </Switch>
          </div>
          <ToastContainer
            autoClose={3000}
          />
          {this.props.loading && <LoadingSpinner />}
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.ajaxStatus > 0
  }
}

export default connect(mapStateToProps)(App);
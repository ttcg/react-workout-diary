import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import es6Promise from 'es6-promise';
import es6ObjectAssign from 'es6-object-assign';
import { ToastContainer } from 'react-toastify';

import Header from './common/header';
import Footer from './common/footer';
import LoadingSpinner from "./common/loadingSpinner";
import HomePage from '../pages/homePage';
import WorkoutListReact from '../components/workouts/index';
import WorkoutListPage from '../pages/workoutListPage';
import workoutListApiPage from '../pages/workoutListApiPage';

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
          <Switch>
            <Route path='(/|/home)' exact component={HomePage} />
            <Route path='/workouts' exact component={WorkoutListPage} />
            <Route path='/workoutsapi' exact component={workoutListApiPage} />
            <Route path='/workoutsreact' exact component={WorkoutListReact} />
          </Switch>
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
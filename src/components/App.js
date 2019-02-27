import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import es6Promise from 'es6-promise';
import es6ObjectAssign from 'es6-object-assign';
import Header from './common/header';
import Footer from './common/footer';
import Home from './home.js';
import WorkoutListReact from '../components/workouts/index';
import WorkoutListPage from '../pages/workoutListPage';
import workoutListApiPage from '../pages/workoutListApiPage';

es6Promise.polyfill();
es6ObjectAssign.polyfill();

class App extends Component {
  render() {
    return (      
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <header className="App-header">

              <Switch>
                <Route path='(/|/home)' exact component={Home} />
                <Route path='/workouts' exact component={WorkoutListPage} />
                <Route path='/workoutsapi' exact component={workoutListApiPage} />
                <Route path='/workoutsreact' exact component={WorkoutListReact} />
              </Switch>

            </header>
            <Footer />
          </React.Fragment>
        </BrowserRouter>
    );
  }
}

export default App;

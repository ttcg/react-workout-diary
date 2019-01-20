import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './common/header';
import Home from './home.js';
import WorkoutListPage from './workouts/index.js';

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
						</Switch>

          </header>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

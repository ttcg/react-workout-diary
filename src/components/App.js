import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './common/header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <header className="App-header">

            <ul>
              <li>Last workout</li>
              <li>Total workout in this month</li>
            </ul>
          </header>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

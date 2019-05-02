import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import es6Promise from 'es6-promise';
import es6ObjectAssign from 'es6-object-assign';
import { ToastContainer } from 'react-toastify';

import {
	Header,
	Footer,
	Routes,
	LoadingSpinner
} from './common';

// import css
import './App.css';
import 'react-toastify/dist/ReactToastify.min.css';

// import custom js libraries
import fontAwesome from './setupFontAwesome'

// execute utility functions before application starts
fontAwesome.setup();
es6Promise.polyfill();
es6ObjectAssign.polyfill();

class App extends Component {
	render() {

		return (
			<BrowserRouter>
				<React.Fragment>
					<Header />
					<div className="content">
						<Routes />
					</div>
					<ToastContainer
						autoClose={2000}
					/>					
					<Footer />
					<LoadingSpinner />
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return {		
		authentication: state.authentication
	}
}

export default connect(mapStateToProps)(App);
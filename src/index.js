import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './components/App';
import store from "./store/index";

import 'bootstrap/dist/css/bootstrap.min.css';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
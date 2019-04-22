import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'

import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, logger, sagaMiddleware));
export default store;

sagaMiddleware.run(rootSaga);
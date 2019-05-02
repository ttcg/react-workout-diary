import { combineReducers } from 'redux';
import workouts from './workoutReducers';
import workoutsFromApi from './workoutApiReducers';
import ajaxStatus from './ajaxStatusReducer';
import authentication from './authenticationReducer';
import modal from './modalReducer';

export default combineReducers({
  workouts,
  workoutsFromApi,
  ajaxStatus,
  authentication,
  modal
})
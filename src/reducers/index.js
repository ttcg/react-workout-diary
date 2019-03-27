import { combineReducers } from 'redux';
import workouts from './workoutReducers';
import workoutsFromApi from './workoutApiReducers';
import ajaxStatus from './ajaxStatusReducer';
import authentication from './authenticationReducer';

export default combineReducers({
  workouts,
  workoutsFromApi,
  ajaxStatus,
  authentication
})
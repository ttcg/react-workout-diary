import { combineReducers } from 'redux';
import workouts from './workoutReducers';
import workoutsFromApi from './workoutApiReducers';
import ajaxStatus from './ajaxStatusReducer';

export default combineReducers({
  workouts,
  workoutsFromApi,
  ajaxStatus
})
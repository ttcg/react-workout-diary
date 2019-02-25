import { combineReducers } from 'redux';
import workouts from './workoutReducers';
import workoutsFromApi from './workoutApiReducers';

export default combineReducers({
  workouts,
  workoutsFromApi
})
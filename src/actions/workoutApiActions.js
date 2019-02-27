import * as actionTypes from "./actionTypes";
import WorkoutService from "../services/workoutService";

export const addWorkout = (payload) => ({ type: actionTypes.WORKOUT_API_ADD, payload });

export const deleteWorkout = (payload) => ({ type: actionTypes.WORKOUT_API_DELETE, payload });

export const editWorkout = (payload) => ({ type: actionTypes.WORKOUT_API_EDIT, payload });

export const fetchWorkoutSuccess = (payload) => ({ type: actionTypes.WORKOUT_API_FETCH_SUCCESS, payload });

export const fetchWorkout = () => {
    return function (dispatch) {        
        return WorkoutService.getAll().then(data => {
            dispatch(fetchWorkoutSuccess(data));
        });
    };
}
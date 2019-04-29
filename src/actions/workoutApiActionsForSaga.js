import * as actionTypes from "./actionTypes";

export const addWorkout = (item) => ({ type: actionTypes.WORKOUT_API_ADD_BEGIN, payload: item });

export const editWorkout = (item) => ({ type: actionTypes.WORKOUT_API_EDIT_BEGIN, payload: item });

export const deleteWorkout = (id) => ({ type: actionTypes.WORKOUT_API_DELETE_BEGIN, id: id });

export const fetchWorkouts = () => ({ type: actionTypes.WORKOUT_API_FETCH_BEGIN });

export const clearError = () => ({ type: actionTypes.WORKOUT_API_CLEAR_ERROR });
import * as actionTypes from "./actionTypes";

export const addWorkout = (payload) => ({ type: actionTypes.WORKOUT_API_ADD, payload });

export const deleteWorkout = (payload) => ({ type: actionTypes.WORKOUT_API_DELETE, payload });

export const editWorkout = (payload) => ({ type: actionTypes.WORKOUT_API_EDIT, payload });

export const fetchWorkout = () => ({ type: actionTypes.WORKOUT_API_FETCH });
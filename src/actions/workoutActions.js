import * as actionTypes from "./actionTypes";

export const addWorkout = (payload) => ({ type: actionTypes.WORKOUT_ADD, payload });

export const deleteWorkout = (payload) => ({ type: actionTypes.WORKOUT_DELETE, payload });

export const editWorkout = (payload) => ({ type: actionTypes.WORKOUT_EDIT, payload });
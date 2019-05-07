import * as actionTypes from "./actionTypes";
import { createRoutine } from 'redux-saga-routines';

export const WORKOUT_ADD = "WORKOUT_ADD";
export const WORKOUT_FETCH = "WORKOUT_FETCH";
export const WORKOUT_DELETE = "WORKOUT_DELETE";
export const WORKOUT_EDIT = "WORKOUT_EDIT";

export const addWorkout = createRoutine(WORKOUT_ADD);

export const fetchWorkouts = createRoutine(WORKOUT_FETCH);

export const editWorkout = createRoutine(WORKOUT_EDIT);

export const deleteWorkout = createRoutine(WORKOUT_DELETE);

export const clearError = () => ({ type: actionTypes.WORKOUT_API_CLEAR_ERROR });
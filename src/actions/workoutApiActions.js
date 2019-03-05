import * as actionTypes from "./actionTypes";
import WorkoutService from "../services/workoutService";
import { toast } from "react-toastify";

const addWorkoutSuccess = () => ({ type: actionTypes.WORKOUT_API_ADD_SUCCESS });

const deleteWorkoutSuccess = () => ({ type: actionTypes.WORKOUT_API_DELETE_SUCCESS });

const editWorkoutSuccess = () => ({ type: actionTypes.WORKOUT_API_EDIT_SUCCESS });

const fetchWorkoutSuccess = (payload) => ({ type: actionTypes.WORKOUT_API_FETCH_SUCCESS, payload });

export const fetchWorkout = () => {
    return function (dispatch) {        
        return WorkoutService.getAll().then(data => {
            dispatch(fetchWorkoutSuccess(data));
        });
    };
}

export const deleteWorkout = (id) => {
    return function (dispatch) {        
        return WorkoutService.remove(id).then(() => {
            dispatch(deleteWorkoutSuccess());
            toast.success("Item deleted successfully.");
            dispatch(fetchWorkout());
        });
    };
}

export const addWorkout = (payload) => {
    return function (dispatch) {        
        return WorkoutService.add(payload).then(() => {
            dispatch(addWorkoutSuccess());
            toast.success("Item added successfully.");
            dispatch(fetchWorkout());
        });
    };
}

export const editWorkout = (payload) => {
    return function (dispatch) {        
        return WorkoutService.update(payload.id, payload).then(() => {
            dispatch(editWorkoutSuccess());
            toast.success("Item updated successfully.");
            dispatch(fetchWorkout());
        });
    };
}
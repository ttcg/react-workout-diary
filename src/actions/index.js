import * as actionTypes from "./actionTypes";

export function addWorkout(payload) {
    return { type: actionTypes.WORKOUT_ADD, payload }
};

export function deleteWorkout(payload) {
    return { type: actionTypes.WORKOUT_DELETE, payload }
};
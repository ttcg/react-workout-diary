import {
    fetchWorkouts,
    addWorkout,
    editWorkout
} from '../actions/workoutApiActionsForSaga';
import {
    WORKOUT_API_CLEAR_ERROR,
} from "../actions/actionTypes";

const initialState = {
    workouts: [],
    error: null,
    isSubmitting: false
};

export default function exampleReducer(state = initialState, action) {
    switch (action.type) {
        case fetchWorkouts.SUCCESS: {
            return {
                ...state,
                workouts: action.payload,
                error: null
            };
        }
        case addWorkout.TRIGGER:
        case editWorkout.TRIGGER: {
            return {
                ...state,
                error: null,
                isSubmitting: true
            }
        }
        case addWorkout.SUCCESS:
        case editWorkout.SUCCESS: {
            return {
                ...state,
                error: null,
                isSubmitting: false
            }
        }
        case addWorkout.FAILURE:
        case editWorkout.FAILURE: {
            return {
                ...state,
                error: action.payload,
                isSubmitting: false
            }
        }
        case WORKOUT_API_CLEAR_ERROR: {
            return {
                ...state,
                error: null
            }
        }
        default:
            return state;
    }
}
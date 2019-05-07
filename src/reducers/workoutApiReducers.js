import {
	WORKOUT_API_FETCH_SUCCESS,
	WORKOUT_API_ADD_BEGIN,
	WORKOUT_API_ADD_SUCCESS,
	WORKOUT_API_ADD_ERROR,
	WORKOUT_API_EDIT_BEGIN,
	WORKOUT_API_EDIT_SUCCESS,
	WORKOUT_API_EDIT_ERROR,
} from "../actions/actionTypes";

const initialState = {
	workouts: [],
	error: null,
	isSubmitting: false
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case WORKOUT_API_FETCH_SUCCESS: {
			return {
				...state,
				workouts: action.payload,
				error: null
			};
		}
		case WORKOUT_API_EDIT_BEGIN:
		case WORKOUT_API_ADD_BEGIN: {
			return {
				...state,
				error: null,
				isSubmitting: true
			}
		}
		case WORKOUT_API_EDIT_SUCCESS:
		case WORKOUT_API_ADD_SUCCESS: {
			return {
				...state,
				error: null,
				isSubmitting: false
			}
		}
		case WORKOUT_API_EDIT_ERROR:
		case WORKOUT_API_ADD_ERROR: {
			return {
				...state,
				error: action.error,
				isSubmitting: false
			}
		}		
		default:
			return state;
	}
}
export default rootReducer;
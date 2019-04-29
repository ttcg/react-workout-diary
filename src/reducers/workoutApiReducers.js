import {
  WORKOUT_API_FETCH_SUCCESS,
  WORKOUT_API_ADD_ERROR,
  WORKOUT_API_CLEAR_ERROR
} from "../actions/actionTypes";

const initialState = {
  workouts: [],
  error: null
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
    case WORKOUT_API_ADD_ERROR: {
      return {
        ...state,
        error: action.error
      }
    }
    case WORKOUT_API_CLEAR_ERROR:{
      return {
        ...state,
        error: null
      }
    }
    default:
      return state;
  }
}
export default rootReducer;
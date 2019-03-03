import {
  WORKOUT_API_ADD_SUCCESS,
  WORKOUT_API_FETCH_SUCCESS,
  WORKOUT_API_DELETE_SUCCESS,
  WORKOUT_API_EDIT_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  workouts: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case WORKOUT_API_FETCH_SUCCESS: {
      return {
        ...state,
        workouts: action.payload
      };
    }
    case WORKOUT_API_DELETE_SUCCESS: {
      return {
        ...state,
        successfullydeleted: true
      };
    }
    case WORKOUT_API_ADD_SUCCESS: {
      return {
        ...state,
        successfullyadded: true
      };
    }
    case WORKOUT_API_EDIT_SUCCESS: {
      return {
        ...state,
        successfullyupdated: true
      };
    }
    default:
      return state;
  }
}
export default rootReducer;
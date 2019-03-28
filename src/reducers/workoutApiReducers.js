import {
  WORKOUT_API_FETCH_SUCCESS
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
    default:
      return state;
  }
}
export default rootReducer;
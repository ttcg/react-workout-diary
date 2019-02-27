import {
    WORKOUT_API_ADD,
    WORKOUT_API_FETCH_BEGIN,
    WORKOUT_API_FETCH_SUCCESS,
    WORKOUT_API_EDIT,
    WORKOUT_API_DELETE
  } from "../actions/actionTypes";
  
  const initialState = {
    workouts: []
  };
  
  function rootReducer(state = initialState, action) {
    switch (action.type) {
      case WORKOUT_API_ADD: {
        return Object.assign({}, state, {
          workouts: action.payload
        });
      }
      case WORKOUT_API_FETCH_SUCCESS: {
        return { ...state, 
          workouts: action.payload
        };
      }
    //   case WORKOUT_DELETE: {
    //     return Object.assign({}, state, {
    //       workouts: state.workouts.filter(item => item.id !== action.payload)
    //     });
    //   }
    //   case WORKOUT_EDIT: {
    //     let newList = [...state.workouts];
    //     const index = newList.findIndex(item => item.id === action.payload.id);      
    //     newList[index] = action.payload;
  
    //     return Object.assign({}, state, { workouts: newList});
    //   }
      default:
        return state;
    }
  }
  export default rootReducer;
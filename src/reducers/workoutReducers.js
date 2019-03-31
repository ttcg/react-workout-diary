import {
  WORKOUT_ADD,
  WORKOUT_FETCH,
  WORKOUT_EDIT,
  WORKOUT_DELETE
} from "../actions/actionTypes";

const initialState = {
  workouts: [
    {
      "id": '38046275-fe56-414e-9c51-75e2fc84438e',
      "workoutType": "Running",
      "date": "2019-01-02",
      "calories": 111
    },
    {
      "id": '6e8dbbc8-233f-41b1-ade3-ca568b35918c',
      "workoutType": "Cycling",
      "date": "2019-01-02",
      "calories": 100
    },
    {
      "id": '07e93c51-0a0b-448d-ae07-f098f74e3656',
      "workoutType": "Running",
      "date": "2019-01-05",
      "calories": 200
    },
    {
      "id": 'ea1c6c89-3b5e-4719-b6b7-7f181461406d',
      "workoutType": "Running",
      "date": "2019-01-07",
      "calories": 240
    }
  ]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case WORKOUT_ADD: {
      return {
        ...state,
        workouts: state.workouts.concat(action.payload)
      };
    }
    case WORKOUT_FETCH: {
      return {
        ...state,
        workouts: state.workouts
      };
    }
    case WORKOUT_DELETE: {
      return {
        ...state,
        workouts: state.workouts.filter(item => item.id !== action.payload)
      };
    }
    case WORKOUT_EDIT: {
      let newList = [...state.workouts];
      const index = newList.findIndex(item => item.id === action.payload.id);
      newList[index] = action.payload;

      return {
        ...state,
        workouts: newList
      };
    }
    default:
      return state;
  }
}
export default rootReducer;
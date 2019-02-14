import { ADD_WORKOUT } from "./actions/actionTypes";

const initialState = {
  workouts: [
    {
      "id": '38046275-fe56-414e-9c51-75e2fc84438e',
      "workoutType": "Running",
      "date": "2019-01-02",
      "calories": 340
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
  if (action.type === ADD_WORKOUT) {
    state = Object.assign({}, state, {
      workouts: state.workouts.concat(action.payload)
    });
  }

  return state;
};

export default rootReducer;
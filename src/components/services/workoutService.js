function getWorkouts () 
{
  return (
  [
    {
      "id": '38046275-fe56-414e-9c51-75e2fc84438e',
      "workoutType": "Running",
      "date": "02/01/2019",
      "calories": 340
    },
    {
      "id": '6e8dbbc8-233f-41b1-ade3-ca568b35918c',
      "workoutType": "Cycling",
      "date": "02/01/2019",
      "calories": 100
    },
    {
      "id": '07e93c51-0a0b-448d-ae07-f098f74e3656',
      "workoutType": "Running",
      "date": "05/01/2019",
      "calories": 200
    },
    {
      "id": 'ea1c6c89-3b5e-4719-b6b7-7f181461406d',
      "workoutType": "Running",
      "date": "07/01/2019",
      "calories": 240
    }
  ]);
}
const WorkoutService = {
  getWorkouts
}

export default WorkoutService;
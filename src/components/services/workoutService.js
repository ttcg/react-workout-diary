function getWorkouts () 
{
  return (
  [
    {
      "id": 1,
      "workoutType": "Running",
      "date": "02/01/2019",
      "calories": 340
    },
    {
      "id": 2,
      "workoutType": "Cycling",
      "date": "02/01/2019",
      "calories": 100
    },
    {
      "id": 3,
      "workoutType": "Running",
      "date": "05/01/2019",
      "calories": 200
    }
  ]);
}
const WorkoutService = {
  getWorkouts
}

export default WorkoutService;
import {
    call,
    put,
    //takeLatest,
    //delay
} from 'redux-saga/effects';
import { toast } from "react-toastify";
import { beginAjaxCall } from '../../actions/ajaxStatusActions'
import {
    fetchWorkouts,
    //addWorkout,
    //editWorkout,
    deleteWorkout
} from '../../actions/workoutApiActionsForSaga';
import { WorkoutService } from "../../services";
import {
    fetchWorkoutsSaga,
    deleteWorkoutSaga
} from '../workouts.saga'

describe('testing Workouts Sagas', () => {    

    const json = [
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
        }];

    test('should call fetchWorkoutsSaga function', () => {        

        const generator = fetchWorkoutsSaga();

        expect(generator.next().value).toEqual(put(beginAjaxCall()));

        expect(generator.next().value).toEqual(call(WorkoutService.getAll));

        expect(generator.next(json).value).toEqual(put(fetchWorkouts.success(json)));        
    });

    test('should call deleteWorkoutSaga function', () => {
        const id = 123;
        const action = {payload: id};
        const generator = deleteWorkoutSaga(action);

        expect(generator.next().value).toEqual(put(beginAjaxCall()));

        expect(generator.next(id).value).toEqual(call(WorkoutService.remove, id));

        expect(generator.next().value).toEqual(call(toast.success, "Item deleted successfully."));

        expect(generator.next().value).toEqual(put(deleteWorkout.success()));

        expect(generator.next().value).toEqual(call(fetchWorkoutsSaga));
    });
});
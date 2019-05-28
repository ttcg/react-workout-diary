import {
    call
} from 'redux-saga/effects';
import * as matchers from 'redux-saga-test-plan/matchers';
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import {
    fetchWorkouts,
    addWorkout,
    editWorkout,
    deleteWorkout
} from '../../actions/workoutApiActionsForSaga';
import { WorkoutService } from "../../services";
import {
    fetchWorkoutsSaga,
    deleteWorkoutSaga,
    addWorkoutSaga,
    editWorkoutSaga
} from '../workouts.saga'

describe('testing Workouts Sagas with redux-saga-test-plan', () => {

    const fakeJson = [
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

    const id = 123;
    const fakeDeletePayload = { payload: id };

    const fakeWorkoutPayload = {
        payload: {
            id: '6e8dbbc8-233f-41b1-ade3-ca568b35918c',
            date: '2019-05-27T18:10:35.282Z',
            workoutType: 'Running',
            calories: 100
        }
    };

    const errorToThrow = {
        statusText: 'custom Error Message'
    };

    const provideDelay = ({ fn }, next) =>  (fn.name === 'delayP') ? null : next();

    const provideDelayWithLog = ({ fn }, next) => {
        console.log(fn.name)
        return (fn.name === 'delayP') ? null : next();
    }

    it('should call fetchWorkoutsSaga function', () => {
        return expectSaga(fetchWorkoutsSaga)
            .provide([
                [call(WorkoutService.getAll), fakeJson]
            ])
            .put(fetchWorkouts.success(fakeJson))
            .run();
    });

    it('should call deleteWorkoutSaga function', () => {
        return expectSaga(deleteWorkoutSaga, fakeDeletePayload)
            .provide([
                [matchers.call.fn(WorkoutService.remove), null],
                [matchers.call.fn(fetchWorkoutsSaga), null]
            ])
            .call(WorkoutService.remove, id)
            .put(deleteWorkout.success())
            .call(fetchWorkoutsSaga)
            .run();
    });

    it('can throw error in deleteWorkoutSaga function', () => {
        return expectSaga(deleteWorkoutSaga, fakeDeletePayload)
            .provide([
                [matchers.call.fn(WorkoutService.remove), throwError(errorToThrow)]
            ])
            .call(WorkoutService.remove, id)
            .put(deleteWorkout.failure({ errorMessage: errorToThrow.statusText }))
            .run();
    });

    it('should call addWorkoutSaga function', () => {
        return expectSaga(addWorkoutSaga, fakeWorkoutPayload)
            .provide([
                { call: provideDelay },
                [matchers.call.fn(WorkoutService.add), null],
                [matchers.call.fn(fetchWorkoutsSaga), null]
            ])
            .call(WorkoutService.add, fakeWorkoutPayload.payload)
            .put(addWorkout.success())
            .call(fetchWorkoutsSaga)
            .run();
    });

    it('can throw an error in addWorkoutSaga function', () => {
        return expectSaga(addWorkoutSaga, fakeWorkoutPayload)
            .provide([
                { call: provideDelay },
                [matchers.call.fn(WorkoutService.add), throwError(errorToThrow)]
            ])
            .call(WorkoutService.add, fakeWorkoutPayload.payload)
            .put(addWorkout.failure({ errorMessage: errorToThrow.statusText }))
            .run();
    });

    it('should call editWorkoutSaga function', () => {
        return expectSaga(editWorkoutSaga, fakeWorkoutPayload)
            .provide([
                [matchers.call.fn(WorkoutService.update), null],
                [matchers.call.fn(fetchWorkoutsSaga), null]
            ])
            .call(WorkoutService.update, fakeWorkoutPayload.payload.id, fakeWorkoutPayload.payload)
            .put(editWorkout.success())
            .call(fetchWorkoutsSaga)
            .run();
    });

    it('can throw an error in editWorkoutSaga function', () => {
        return expectSaga(editWorkoutSaga, fakeWorkoutPayload)
            .provide([
                [matchers.call.fn(WorkoutService.update), throwError(errorToThrow)]
            ])
            .call(WorkoutService.update, fakeWorkoutPayload.payload.id, fakeWorkoutPayload.payload)
            .put(editWorkout.failure({ errorMessage: errorToThrow.statusText }))
            .run();
    });
});
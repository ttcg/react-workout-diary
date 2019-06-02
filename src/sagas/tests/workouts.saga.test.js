import {
    call,
    put
} from 'redux-saga/effects';
import { toast } from "react-toastify";
import { beginAjaxCall } from '../../actions/ajaxStatusActions'
import { closeModal } from '../../actions/modalActions'
import { Modal } from '../../utilities/constants'
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

    const id = 123;
    const fakeDeletePayload = { payload: id };

    const fakeWorkoutPayload = {
        payload: {
            id: '6e8dbbc8-233f-41b1-ade3-ca568b35918c',
            date: '2019-05-27T18:10:35.282Z',
            workoutType: 'Running',
            calories: 999
        }
    };

    const errorToThrow = {
        statusText: 'custom Error Message'
    };

    test('should call fetchWorkoutsSaga function', () => {

        const generator = fetchWorkoutsSaga();

        expect(generator.next().value).toEqual(put(beginAjaxCall()));

        expect(generator.next().value).toEqual(call(WorkoutService.getAll));

        expect(generator.next(json).value).toEqual(put(fetchWorkouts.success(json)));
    });

    test('should call deleteWorkoutSaga function', () => {
       
        const generator = deleteWorkoutSaga(fakeDeletePayload);

        expect(generator.next().value).toEqual(put(beginAjaxCall()));

        expect(generator.next(id).value).toEqual(call(WorkoutService.remove, id));

        expect(generator.next().value).toEqual(call(toast.success, "Item deleted successfully."));

        expect(generator.next().value).toEqual(put(deleteWorkout.success()));

        expect(generator.next().value).toEqual(call(fetchWorkoutsSaga));
    });

    test('can throw error in deleteWorkoutSaga function', () => {
        const generator = deleteWorkoutSaga(fakeDeletePayload);

        expect(generator.next().value).toEqual(put(beginAjaxCall()));

        expect(generator.next(id).value).toEqual(call(WorkoutService.remove, id));

        expect(generator.throw(errorToThrow).value).toEqual(put(deleteWorkout.failure({ errorMessage: errorToThrow.statusText })));

        expect(generator.next().value).toEqual(call(toast.error, "Error occured.  Please try again."));
    });

    test('should call addWorkoutSaga function', () => {
       
        const generator = addWorkoutSaga(fakeWorkoutPayload);

        expect(generator.next().value).toEqual(put(beginAjaxCall()));

        generator.next(); // delay

        expect(generator.next().value).toEqual(call(WorkoutService.add, fakeWorkoutPayload.payload));

        expect(generator.next().value).toEqual(call(toast.success, "Item added successfully."));

        expect(generator.next().value).toEqual(put(closeModal(Modal.AddWorkout)));

        expect(generator.next().value).toEqual(put(addWorkout.success()));

        expect(generator.next().value).toEqual(call(fetchWorkoutsSaga));
    });

    test('can throw error in addWorkoutSaga function', () => {
       
        const generator = addWorkoutSaga(fakeWorkoutPayload);

        expect(generator.next().value).toEqual(put(beginAjaxCall()));

        generator.next(); // delay

        expect(generator.next().value).toEqual(call(WorkoutService.add, fakeWorkoutPayload.payload));

        expect(generator.throw(errorToThrow).value).toEqual(put(addWorkout.failure({ errorMessage: errorToThrow.statusText })));

        expect(generator.next().value).toEqual(call(toast.error, "Error occured.  Please try again."));
    });

    test('should call editWorkoutSaga function', () => {
       
        const generator = editWorkoutSaga(fakeWorkoutPayload);

        expect(generator.next().value).toEqual(put(beginAjaxCall()));

        expect(generator.next().value).toEqual(call(WorkoutService.update, fakeWorkoutPayload.payload.id, fakeWorkoutPayload.payload));

        expect(generator.next().value).toEqual(call(toast.success, "Item updated successfully."));

        expect(generator.next().value).toEqual(put(closeModal(Modal.EditWorkout)));

        expect(generator.next().value).toEqual(put(editWorkout.success()));

        expect(generator.next().value).toEqual(call(fetchWorkoutsSaga));
    });

    test('can throw error in editWorkoutSaga function', () => {
       
        const generator = editWorkoutSaga(fakeWorkoutPayload);

        expect(generator.next().value).toEqual(put(beginAjaxCall()));

        expect(generator.next().value).toEqual(call(WorkoutService.update, fakeWorkoutPayload.payload.id, fakeWorkoutPayload.payload));

        expect(generator.throw(errorToThrow).value).toEqual(put(editWorkout.failure({ errorMessage: errorToThrow.statusText })));

        expect(generator.next().value).toEqual(call(toast.error, "Error occured.  Please try again."));
    });
});
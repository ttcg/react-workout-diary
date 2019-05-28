import {
    call,
    put,
    takeLatest,
    delay
} from 'redux-saga/effects';
import { toast } from "react-toastify";
import { WorkoutService } from "../services";
import { beginAjaxCall } from '../actions/ajaxStatusActions'
import { closeModal } from '../actions/modalActions'
import { Modal } from '../utilities/constants'
import {
    fetchWorkouts,
    addWorkout,
    editWorkout,
    deleteWorkout
} from '../actions/workoutApiActionsForSaga';

export function* fetchWorkoutsSaga() {
    yield put(beginAjaxCall());

    var json = yield call(WorkoutService.getAll);

    yield put(fetchWorkouts.success(json));
}

export function* deleteWorkoutSaga({ payload: id }) {
    try {
        yield put(beginAjaxCall());
        yield call(WorkoutService.remove, id);

        yield call(toast.success, "Item deleted successfully.");

        yield put(deleteWorkout.success());
        yield call(fetchWorkoutsSaga);
    }
    catch (error) {
        yield put(deleteWorkout.failure({ errorMessage: error.statusText }));
        yield call(toast.error, "Error occured.  Please try again.");
    }
}

export function* addWorkoutSaga({ payload }) {
    try {
        yield put(beginAjaxCall());

        // throw error intentionally for calories lower than 50
        if (payload.calories < 50)
            payload.calories = '';

        yield delay(1000);
        yield call(WorkoutService.add, payload);

        yield call(toast.success, "Item added successfully.");
        yield put(closeModal(Modal.AddWorkout));
        yield put(addWorkout.success());
        yield call(fetchWorkoutsSaga);
    }
    catch (error) {
        yield put(addWorkout.failure({ errorMessage: error.statusText }));
        yield call(toast.error, "Error occured.  Please try again.");
    }
}

export function* editWorkoutSaga({ payload }) {
    try {
        yield put(beginAjaxCall());
        yield call(WorkoutService.update, payload.id, payload);

        yield call(toast.success, "Item updated successfully.");
        yield put(closeModal(Modal.EditWorkout));
        yield put(editWorkout.success());
        yield call(fetchWorkoutsSaga);
    }
    catch (error) {
        yield put(editWorkout.failure({ errorMessage: error.statusText }));
        yield call(toast.error, "Error occured.  Please try again.");
    }
}

export default function* watcherSaga() {
    yield takeLatest(fetchWorkouts.TRIGGER, fetchWorkoutsSaga);
    yield takeLatest(deleteWorkout.TRIGGER, deleteWorkoutSaga);
    yield takeLatest(addWorkout.TRIGGER, addWorkoutSaga);
    yield takeLatest(editWorkout.TRIGGER, editWorkoutSaga);
}
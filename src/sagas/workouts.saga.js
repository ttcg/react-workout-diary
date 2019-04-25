import {
    call,
    put,
    takeLatest
} from 'redux-saga/effects';
import { toast } from "react-toastify";
import * as actionTypes from "../actions/actionTypes";
import { WorkoutService } from "../services";
import { beginAjaxCall } from '../actions/ajaxStatusActions'

function* fetchWorkoutsSaga() {
    yield put(beginAjaxCall());

    var json = yield call(WorkoutService.getAll);

    yield put({ type: actionTypes.WORKOUT_API_FETCH_SUCCESS, payload: json })
}

function* deleteWorkoutSaga({ id }) {
    try {
        yield put(beginAjaxCall());

        yield call(WorkoutService.remove, id);

        yield call(toast.success, "Item deleted successfully.");

        yield put({ type: actionTypes.WORKOUT_API_DELETE_SUCCESS });
        yield call(fetchWorkoutsSaga);
    }
    catch (error) {
        yield put({ type: actionTypes.WORKOUT_API_DELETE_ERROR, error });
        yield call(toast.error, "Error occured.  Please try again.");
    }
}

function* addWorkoutSaga({ payload }) {
    try {
        yield put(beginAjaxCall());
        yield call(WorkoutService.add, payload);

        yield call(toast.success, "Item added successfully.");
        yield put({ type: actionTypes.WORKOUT_API_ADD_SUCCESS });
        yield call(fetchWorkoutsSaga);
    }
    catch (error) {
        yield put({ type: actionTypes.WORKOUT_API_ADD_ERROR, error });
        yield call(toast.error, "Error occured.  Please try again.");
    }
}

function* editWorkoutSaga({ payload }) {
    try {
        yield put(beginAjaxCall());
        yield call(WorkoutService.update, payload.id, payload);

        yield call(toast.success, "Item updated successfully.");
        yield put({ type: actionTypes.WORKOUT_API_EDIT_SUCCESS });
        yield call(fetchWorkoutsSaga);
    }
    catch (error) {
        yield put({ type: actionTypes.WORKOUT_API_EDIT_ERROR, error });
        yield call(toast.error, "Error occured.  Please try again.");
    }
}

export default function* watcherSaga() {
    yield takeLatest(actionTypes.WORKOUT_API_FETCH_BEGIN, fetchWorkoutsSaga);
    yield takeLatest(actionTypes.WORKOUT_API_DELETE_BEGIN, deleteWorkoutSaga);
    yield takeLatest(actionTypes.WORKOUT_API_ADD_BEGIN, addWorkoutSaga);
    yield takeLatest(actionTypes.WORKOUT_API_EDIT_BEGIN, editWorkoutSaga);
}
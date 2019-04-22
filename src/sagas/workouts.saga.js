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
    yield put(beginAjaxCall());

    yield call(WorkoutService.remove, id);

    yield call(toast.success, "Item deleted successfully.");

    yield put({ type: actionTypes.WORKOUT_API_DELETE_SUCCESS });
    yield call(fetchWorkoutsSaga);
}

export default function* workoutsSaga() {
    yield takeLatest(actionTypes.WORKOUT_API_FETCH_BEGIN, fetchWorkoutsSaga);
    yield takeLatest(actionTypes.WORKOUT_API_DELETE_BEGIN, deleteWorkoutSaga);
}
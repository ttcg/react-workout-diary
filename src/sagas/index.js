import { all } from 'redux-saga/effects';
import { default as WorkoutsSagas } from './workouts.saga'

export default function* rootSaga() {
    yield all([
        WorkoutsSagas()
    ])
}
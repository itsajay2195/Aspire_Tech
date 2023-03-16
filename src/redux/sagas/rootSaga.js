import { all } from 'redux-saga/effects';
import { watchFetchUser } from './userSaga';

export default function* rootSaga() {
  yield all([
    watchFetchUser(),
    // Add more sagas here if needed
  ]);
}
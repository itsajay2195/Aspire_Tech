import { all } from 'redux-saga/effects';
import { watchFetchUser } from './userSaga';
import { watchHandleSetUserWeeklyLimit } from './WeeklyLimitSaga';

export default function* rootSaga() {
  yield all([
    watchFetchUser(),
    watchHandleSetUserWeeklyLimit()
    // Add more sagas here if needed
  ]);
}
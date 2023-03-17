import { all } from 'redux-saga/effects';
import { watchFetchUser } from './userSaga';
import { watchHandleSetUserWeeklyLimit, watchHandleResetWeeklyLimit } from './WeeklyLimitSaga';
import { watchFetchUserPayments } from './paymentSaga';

export default function* rootSaga() {
  yield all([
    watchFetchUser(),
    watchHandleSetUserWeeklyLimit(),
    watchHandleResetWeeklyLimit(),
    watchFetchUserPayments(),
    // Add more sagas here if needed
  ]);
}
import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUserPayments } from '../../services/Payments';
import {SET_USER_PAYMENTS} from '../actions/ActionConstants'
import { setLoading, setUserPaymentInfoAction, setUserInfoFailure  } from '../../redux/actions/UserActions';

function* handleFetchUserPayments() {
  try {
    setLoading(true)
    const user = yield call(fetchUserPayments);
    yield put(setUserPaymentInfoAction(user));
  } catch (error) {
    yield put(setUserInfoFailure());
  }
}

export function* watchFetchUserPayments() {
  yield takeLatest(SET_USER_PAYMENTS, handleFetchUserPayments);
}

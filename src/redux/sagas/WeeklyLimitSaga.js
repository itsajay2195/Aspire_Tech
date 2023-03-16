import { call, put, takeLatest } from 'redux-saga/effects';
import { setWeeklyLimitService } from '../../services/WeekltLimitService';
import {SET_WEEKLY_SPENDING_LIMIT} from '../actions/ActionConstants'
import { setLoading, setUserInfo, setUserInfoFailure  } from '../../redux/actions/UserActions';

function* handleSetUserWeeklyLimit(postData) {
  try {
    setLoading(true)
    const user = yield call(setWeeklyLimitService,postData);
    yield put(setUserInfo(user));
  } catch (error) {
    yield put(setUserInfoFailure());
  }
}

export function* watchHandleSetUserWeeklyLimit() {
  yield takeLatest(SET_WEEKLY_SPENDING_LIMIT, handleSetUserWeeklyLimit);
}

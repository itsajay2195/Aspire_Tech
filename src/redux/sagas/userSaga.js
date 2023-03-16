import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchUser } from '../../services/UserService';
import {SET_USER_INFO_REQUEST} from '../actions/ActionConstants'
import { setLoading, setUserInfo, setUserInfoFailure  } from '../../redux/actions/UserActions';

function* handleFetchUser() {
  try {
    setLoading(true)
    const user = yield call(fetchUser);
    yield put(setUserInfo(user));
  } catch (error) {
    yield put(setUserInfoFailure());
  }
}

export function* watchFetchUser() {
  yield takeLatest(SET_USER_INFO_REQUEST, handleFetchUser);
}

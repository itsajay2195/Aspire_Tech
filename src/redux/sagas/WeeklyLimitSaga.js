import { call, put, takeLatest } from 'redux-saga/effects';
import { setWeeklyLimitService,resetWeeklyLimitService } from '../../services/WeekltLimitService';
import {SET_WEEKLY_SPENDING_LIMIT,RESET_WEEKLY_LIMIT} from '../actions/ActionConstants'
import { setLoading, setUserInfo, setUserInfoFailure  } from '../../redux/actions/UserActions';
import NavigationService from '../../utils/NavigationService';
import { DEBIT_CARD_SCREEN_BOTTOM_NAV } from '../../constants/ScreenNames';


function* handleSetUserWeeklyLimit(postData) {
  try {
    yield put(setLoading(true));
    const user = yield call(setWeeklyLimitService,postData);
    yield put(setUserInfo(user));
    yield call(NavigationService.navigate, DEBIT_CARD_SCREEN_BOTTOM_NAV);
  } catch (error) {
    yield put(setUserInfoFailure());
  }
}

function* handleResetWeeklyLimitService(){
  try {
    yield put(setLoading(true));
    const user = yield call(resetWeeklyLimitService);
    yield put(setUserInfo(user));
  } catch (error) {
    yield put(setUserInfoFailure());
  }
}

export function* watchHandleSetUserWeeklyLimit() {
  yield takeLatest(SET_WEEKLY_SPENDING_LIMIT, handleSetUserWeeklyLimit);
}

export function* watchHandleResetWeeklyLimit() {
  yield takeLatest(RESET_WEEKLY_LIMIT, handleResetWeeklyLimitService);
}

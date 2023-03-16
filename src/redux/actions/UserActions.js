import {SET_LOADING,SET_USER_INFO, SET_WEEKLY_SPENDING_LIMIT, SET_MENU_INFO, SET_EXPENSE_INFO, SET_AMOUNT_SPENT, SET_WEEKLY_LIMIT_TOGGLED, SET_USER_INFO_FAILURE, SET_USER_INFO_REQUEST} from './ActionConstants'

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setUserInfoRequest = ()=>({
  type:SET_USER_INFO_REQUEST
})

export const setUserInfo = (payload) => {
  return {
  type: SET_USER_INFO,
  payload,
}};

export const setUserInfoFailure = ()=>({
  type:SET_USER_INFO_FAILURE,
})

export const setWeeklySpendingLimitAction = (payload) => ({
  type: SET_WEEKLY_SPENDING_LIMIT,
  payload,
});

export const setMenuInfo = (index, value) => ({
  type: SET_MENU_INFO,
  payload: { index, value },
});

export const setExpenseInfo = (payload) => ({
  type: SET_EXPENSE_INFO,
  payload,
});

export const setAmountSpent = (payload) => ({
  type: SET_AMOUNT_SPENT,
  payload,
});

export const setWeeklyLimitToggled = (payload) => ({
  type: SET_WEEKLY_LIMIT_TOGGLED,
  payload,
});

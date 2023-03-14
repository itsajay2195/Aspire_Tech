import {SET_LOADING,SET_USER_INFO, SET_SPENDING_LIMIT, SET_MENU_INFO, SET_EXPENSE_INFO, SET_AMOUNT_SPENT, SET_WEEKLY_LIMIT_TOGGLED} from './ActionConstants'

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setUserInfo = (payload) => ({
  type: SET_USER_INFO,
  payload,
});

export const setSpendingLimit = (payload) => ({
  type: SET_SPENDING_LIMIT,
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

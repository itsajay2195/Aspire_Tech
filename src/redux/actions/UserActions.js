import {
  SET_LOADING,
  SET_USER_INFO,
  SET_WEEKLY_SPENDING_LIMIT,
  RESET_WEEKLY_LIMIT,
  SET_USER_PAYMENTS,
  SET_AMOUNT_SPENT,
  SET_WEEKLY_LIMIT_TOGGLED,
  SET_USER_INFO_FAILURE,
  SET_USER_INFO_REQUEST,
  SET_USER_PAYMENTS_REQUEST
} from "./ActionConstants";

export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const setUserInfoRequest = () => ({
  type: SET_USER_INFO_REQUEST,
});

export const setUserInfo = (payload) => {
  return {
    type: SET_USER_INFO,
    payload,
  };
};

export const setUserInfoFailure = () => ({
  type: SET_USER_INFO_FAILURE,
});

export const setWeeklySpendingLimitAction = (payload) => {
  return{
  type: SET_WEEKLY_SPENDING_LIMIT,
  payload,
}};

export const setUserPaymentInfoRequest = (payload) => {
  return{
  type: SET_USER_PAYMENTS_REQUEST,
  payload,
}};

export const setUserPaymentInfoAction = (payload) => {
  return{
  type: SET_USER_PAYMENTS,
  payload,
}};


export const setAmountSpent = (payload) => ({
  type: SET_AMOUNT_SPENT,
  payload,
});

export const setWeeklyLimitToggled = (payload) => ({
  type: SET_WEEKLY_LIMIT_TOGGLED,
  payload,
});

export const resetWeeklyLimit = () => ({
  type: RESET_WEEKLY_LIMIT,
});

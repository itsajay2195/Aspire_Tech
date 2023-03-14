import {
  SET_LOADING,
  SET_USER_INFO,
  SET_SPENDING_LIMIT,
  SET_MENU_INFO,
  SET_EXPENSE_INFO,
  SET_AMOUNT_SPENT,
  SET_WEEKLY_LIMIT_TOGGLED,
} from "./ActionConstants";

const initialState = {
  loading: false,
  error: false,
  userInfo: null,
  spendingLimit: null,
  amountSpent: null,
  weeklyLimitToggled: null,
  expenseInfo: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
        loading: false,
      };
    case SET_SPENDING_LIMIT:
      return {
        ...state,
        spendingLimit: action.payload,
      };
    case SET_MENU_INFO:
      return {
        ...state,
        menuInfo: state.menuInfo.map((item, index) =>
          index === action.payload.index
            ? { ...item, isToggled: action.payload.value }
            : item
        ),
      };
    case SET_EXPENSE_INFO:
      return {
        ...state,
        expenseInfo: action.payload,
        loading: false,
      };
    case SET_AMOUNT_SPENT:
      return {
        ...state,
        amountSpent: action.payload,
      };
    case SET_WEEKLY_LIMIT_TOGGLED:
      return {
        ...state,
        weeklyLimitToggled: action.payload,
      };
    default:
      return state;
  }
};


export default userReducer;
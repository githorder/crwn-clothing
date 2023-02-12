import { USER_ACTIONS_TYPES } from './user.types';

const INIT_STATE = {
  currentUser: null,
  error: null,
  isLoading: false,
};

export const userReducer = (state = INIT_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTIONS_TYPES.SIGN_IN_SUCCESS:
    case USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTIONS_TYPES.SIGN_IN_FAILED:
    case USER_ACTIONS_TYPES.SIGN_OUT_FAILED:
    case USER_ACTIONS_TYPES.SIGN_UP_FAILED:
      return { ...state, error: payload };
    default:
      return state;
  }
};

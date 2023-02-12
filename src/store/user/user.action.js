import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTIONS_TYPES } from './user.types';

export const signupStart = (name, email, password) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_START, { name, email, password });

export const signupSuccess = (user) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, user);

export const signupFailed = (error) =>
  createAction(USER_ACTIONS_TYPES.SIGN_UP_FAILED, error);

export const signinSuccess = (user) =>
  createAction(USER_ACTIONS_TYPES.SIGN_IN_SUCCESS, user);

export const signinFailed = (error) =>
  createAction(USER_ACTIONS_TYPES.SIGN_IN_FAILED, error);

export const checkUserSession = () =>
  createAction(USER_ACTIONS_TYPES.CHECK_USER_SESSION);

export const googleSigninStart = () =>
  createAction(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START);

export const emailSigninStart = (email, password) =>
  createAction(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const signOutStart = () =>
  createAction(USER_ACTIONS_TYPES.SIGN_OUT_START);

export const signOutSucess = () =>
  createAction(USER_ACTIONS_TYPES.SIGN_OUT_SUCCESS, null);

export const signOutFailed = (error) =>
  createAction(USER_ACTIONS_TYPES.SIGN_OUT_FAILED, error);

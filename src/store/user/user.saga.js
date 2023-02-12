import { takeLatest, call, put, all } from 'redux-saga/effects';

import { USER_ACTIONS_TYPES } from './user.types';

import {
  signinSuccess,
  signinFailed,
  signupSuccess,
  signupFailed,
  signOutSucess,
  signOutFailed,
} from './user.action';

import {
  getCurrentUser,
  createUserFromAuth,
  createUserAuthWithEmaiAndPassword,
  signInUserWithEmailAndPassword,
  signInGoogleWithRedirect,
  signOutUser,
} from '../../utils/firebase/firebase.utils';

export function* getUserSnapshotFromAuth(userAuth) {
  try {
    const userSnapshot = yield call(createUserFromAuth, userAuth);
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getUserSnapshotFromAuth, userAuth);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* signinWithEmail(action) {
  const { email, password } = action.payload;

  try {
    const userCredentials = yield signInUserWithEmailAndPassword(
      email,
      password
    );
    yield call(getUserSnapshotFromAuth, userCredentials.user);
  } catch (error) {
    yield put(signinFailed(error));
    alert('User not found');
  }
}

export function* signinWithGoogle() {
  try {
    yield signInGoogleWithRedirect();
  } catch (error) {
    yield put(signinFailed(error));
    alert('Could not signin with google');
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSucess());
  } catch (error) {
    yield put(signOutFailed(error));
    alert('Could not sign out user');
  }
}

export function* signup(action) {
  const { name, email, password } = action.payload;

  try {
    const { user } = yield call(
      createUserAuthWithEmaiAndPassword,
      email,
      password
    );
    yield put(signupSuccess({ ...user, displayName: name }));
  } catch (error) {
    yield put(signupFailed(error));
  }
}

export function* signInAfterSignUp(action) {
  try {
    yield call(getUserSnapshotFromAuth, action.payload);
  } catch (error) {
    yield put(signinFailed(error));
  }
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTIONS_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSigninStart() {
  yield takeLatest(USER_ACTIONS_TYPES.EMAIL_SIGN_IN_START, signinWithEmail);
}

export function* onGoogleSigninStart() {
  yield takeLatest(USER_ACTIONS_TYPES.GOOGLE_SIGN_IN_START, signinWithGoogle);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignupStart() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_START, signup);
}

export function* onSignupSuccess() {
  yield takeLatest(USER_ACTIONS_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onEmailSigninStart),
    call(onGoogleSigninStart),
    call(onSignupStart),
    call(onSignupSuccess),
    call(onSignOutStart),
  ]);
}

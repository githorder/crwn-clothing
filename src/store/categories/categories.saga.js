import { call, takeLatest, put, all } from 'redux-saga/effects';

import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { setCategoriesSuccess, setCategorieFailed } from './categories.action';

import { CATEGORIES_ACTION_TYPES } from './categories.types';

export function* setCategoriesAsync() {
  try {
    const categoriesArr = yield call(getCategoriesAndDocuments);
    yield put(setCategoriesSuccess(categoriesArr));
  } catch (err) {
    yield put(setCategorieFailed(err));
  }
}

export function* onSetCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START,
    setCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onSetCategories)]);
}

import { createAction } from '../../utils/reducer/reducer.utils';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';

import { CATEGORIES_ACTION_TYPES } from './categories.types';

const setCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START);

const setCategoriesSuccess = (categoriesArr) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categoriesArr);

const setCategorieFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, error);

export const setCategoriesAsync = () => async (dispatch) => {
  dispatch(setCategoriesStart());

  try {
    const categoriesArr = await getCategoriesAndDocuments();
    dispatch(setCategoriesSuccess(categoriesArr));
  } catch (err) {
    dispatch(setCategorieFailed(err));
  }
};

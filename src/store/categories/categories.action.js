import { createAction } from '../../utils/reducer/reducer.utils';

import { CATEGORIES_ACTION_TYPES } from './categories.types';

export const setCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_START);

export const setCategoriesSuccess = (categoriesArr) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_SUCCESS, categoriesArr);

export const setCategorieFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_FAILED, error);

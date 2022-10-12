import { CART_ACTION_TYPES } from './cart.types';

const INIT_STATE = {
  cartItems: [],
  isDropdownOpen: false,
};

export const cartReducer = (state = INIT_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        cartItems: payload,
      };
    case CART_ACTION_TYPES.SET_DROPDOWN_OPEN:
      return {
        ...state,
        isDropdownOpen: payload,
      };
    default:
      return state;
  }
};

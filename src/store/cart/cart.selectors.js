import { createSelector } from 'reselect';

const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.cartItems
);

export const selectDropdownOpen = createSelector(
  [selectCartReducer],
  (cartSlice) => cartSlice.isDropdownOpen
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((sum, { quantity }) => sum + quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, { quantity, price }) => total + quantity * price, 0)
);

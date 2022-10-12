import { createAction } from '../../utils/reducer/reducer.utils';
import { CART_ACTION_TYPES } from './cart.types';

const addCartItem = (cartItems, productToAdd) => {
  const isProductInCart =
    cartItems.length && cartItems.some(({ id }) => id === productToAdd.id);

  if (!isProductInCart) {
    const newCartItem = { ...productToAdd, quantity: 1 };
    return [...cartItems, newCartItem];
  }

  return cartItems.map((cartItem) =>
    cartItem.id === productToAdd.id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
};

export const setDropdownOpen = (isOpen) =>
  createAction(CART_ACTION_TYPES.SET_DROPDOWN_OPEN, isOpen);

export const addItemToCart = (cartItems, productToAdd) => {
  const updatedCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const removeItemFromCart = (cartItems, id) => {
  const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const decrementQuantity = (cartItems, id) => {
  const updatedCartItems = cartItems
    .map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    )
    .filter(({ quantity }) => quantity > 0);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

export const incrementQuantity = (cartItems, id) => {
  const updatedCartItems = cartItems.map((cartItem) =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity + 1 }
      : cartItem
  );
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, updatedCartItems);
};

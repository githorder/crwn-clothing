import { createContext, useReducer } from 'react';

import { createAction } from '../utils/reducer/reducer.utils';

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

export const CartContext = createContext({
  isDropdownOpen: false,
  cartItems: [],
  cartCount: 0,
  total: 0,
  setIsDropdownOpen: () => null,
  addItemToCart: () => null,
  decrementQuantity: () => null,
  incrementQuantity: () => null,
  removeItemFromCart: () => null,
});

export const CART_ACTIONS = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_DROPDOWN_OPEN: 'SET_DROPDOWN_OPEN',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTIONS.SET_DROPDOWN_OPEN:
      return {
        ...state,
        isDropdownOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} error in cart reducer`);
  }
};

const INIT_STATE = {
  cartItems: [],
  isDropdownOpen: false,
  cartCount: 0,
  total: 0,
};

export const CartProvider = ({ children }) => {
  const [{ cartItems, isDropdownOpen, cartCount, total }, dispatch] =
    useReducer(cartReducer, INIT_STATE);

  const setIsDropdownOpen = (isOpen) =>
    dispatch(createAction(CART_ACTIONS.SET_DROPDOWN_OPEN, isOpen));

  const updateCartItemsReducer = (updatedCartItems) => {
    const newCartCount = updatedCartItems.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
    const newTotal = updatedCartItems.reduce(
      (total, { quantity, price }) => total + quantity * price,
      0
    );

    dispatch(
      createAction(CART_ACTIONS.SET_CART_ITEMS, {
        total: newTotal,
        cartCount: newCartCount,
        cartItems: updatedCartItems,
      })
    );
  };

  const addItemToCart = (productToAdd) => {
    const updatedCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemsReducer(updatedCartItems);
  };

  const removeItemFromCart = (id) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== id);
    updateCartItemsReducer(updatedCartItems);
  };

  const decrementQuantity = (id) => {
    const updatedCartItems = cartItems
      .map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
      .filter(({ quantity }) => quantity > 0);
    updateCartItemsReducer(updatedCartItems);
  };

  const incrementQuantity = (id) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
    updateCartItemsReducer(updatedCartItems);
  };

  const value = {
    isDropdownOpen,
    cartItems,
    cartCount,
    total,
    addItemToCart,
    setIsDropdownOpen,
    decrementQuantity,
    incrementQuantity,
    removeItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

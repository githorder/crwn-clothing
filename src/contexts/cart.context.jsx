import { createContext, useState, useEffect } from 'react';

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
  setIsDropdownOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  addItemToCart: () => null,
  cartCount: 0,
  setCartCount: () => null,
});

export const CartProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  const value = {
    isDropdownOpen,
    setIsDropdownOpen,
    cartItems,
    addItemToCart,
    cartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

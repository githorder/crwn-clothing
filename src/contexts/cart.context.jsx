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
  cartItems: [],
  cartCount: 0,
  total: 0,
  setIsDropdownOpen: () => null,
  addItemToCart: () => null,
  decrementQuantity: () => null,
  incrementQuantity: () => null,
  removeItemFromCart: () => null,
});

export const CartProvider = ({ children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);

  const addItemToCart = (productToAdd) =>
    setCartItems(addCartItem(cartItems, productToAdd));

  const removeItemFromCart = (id) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
  };

  const decrementQuantity = (id) => {
    setCartItems(
      cartItems
        .map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter(({ quantity }) => quantity > 0)
    );
  };

  const incrementQuantity = (id) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
    const newTotal = cartItems.reduce(
      (total, { quantity, price }) => total + quantity * price,
      0
    );
    setCartCount(newCartCount);
    setTotal(newTotal);
  }, [cartItems]);

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

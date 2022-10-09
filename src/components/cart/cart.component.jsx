import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartContainer, CartIcon, ItemCount } from './cart.styles';

import CartDropdown from '../cartDropdown/cartDropdown.component';

const Cart = () => {
  const { setIsDropdownOpen, isDropdownOpen, cartCount } =
    useContext(CartContext);

  const openDropdownHandler = () => setIsDropdownOpen(true);

  const closeDropdownHandler = () => setIsDropdownOpen(false);

  return (
    <CartContainer
      onMouseLeave={closeDropdownHandler}
      onMouseEnter={openDropdownHandler}
    >
      <CartIcon />
      <ItemCount>{cartCount}</ItemCount>
      {isDropdownOpen && <CartDropdown />}
    </CartContainer>
  );
};

export default Cart;

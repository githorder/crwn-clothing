import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './cart.styles.scss';

import { ReactComponent as CartIcon } from '../../assets/cart.svg';

import CartDropdown from '../cartDropdown/cartDropdown.component';

const Cart = () => {
  const { setIsDropdownOpen, isDropdownOpen, cartCount } =
    useContext(CartContext);

  // const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const openDropdownHandler = () => setIsDropdownOpen(true);

  const closeDropdownHandler = () => setIsDropdownOpen(false);

  return (
    <div
      onMouseLeave={closeDropdownHandler}
      onMouseEnter={openDropdownHandler}
      className="cart-icon-container"
    >
      <CartIcon className="cart-icon" />
      <span className="item-count">{cartCount}</span>
      {isDropdownOpen && <CartDropdown />}
    </div>
  );
};

export default Cart;

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './cart.styles.scss';

import { ReactComponent as CartIcon } from '../../assets/cart.svg';

const Cart = () => {
  const { setIsDropdownOpen, isDropdownOpen } = useContext(CartContext);

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <div onClick={toggleDropdown} className="cart-icon-container">
      <CartIcon className="cart-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default Cart;

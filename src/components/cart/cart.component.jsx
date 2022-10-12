import { useDispatch, useSelector } from 'react-redux';

import {
  selectCartCount,
  selectDropdownOpen,
} from '../../store/cart/cart.selectors';
import { setDropdownOpen } from '../../store/cart/cart.action';

import { CartContainer, CartIcon, ItemCount } from './cart.styles';

import CartDropdown from '../cartDropdown/cartDropdown.component';

const Cart = () => {
  const dispatch = useDispatch();
  const isDropdownOpen = useSelector(selectDropdownOpen);
  const cartCount = useSelector(selectCartCount);

  const openDropdownHandler = () => dispatch(setDropdownOpen(true));

  const closeDropdownHandler = () => dispatch(setDropdownOpen(false));

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

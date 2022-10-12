import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selectors';

import Button from '../button/button.component';

import {
  CartDropdownContainer,
  CartItems,
  EmptyCartIconContainer,
  EmptyCartIcon,
} from './cartDropdown.styles';

import CartItem from '../cartItem/cartItem.component';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate('/checkout');

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map(({ id, ...itemProps }) => (
            <CartItem key={id} {...itemProps} />
          ))
        ) : (
          <EmptyCartIconContainer>
            <EmptyCartIcon />
          </EmptyCartIconContainer>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;

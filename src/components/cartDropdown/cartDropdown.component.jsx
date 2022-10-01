import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import './cartDropdown.styles.scss';

import { ReactComponent as EmptyCart } from '../../assets/emptyCart.svg';

import Button from '../button/button.component';
import CartItem from '../cartItem/cartItem.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate('/checkout');

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(({ id, ...itemProps }) => (
            <CartItem key={id} {...itemProps} />
          ))
        ) : (
          <div className="empty-cart-container">
            <EmptyCart />
          </div>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

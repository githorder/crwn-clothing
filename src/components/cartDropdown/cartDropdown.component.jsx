import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import './cartDropdown.styles.scss';
import cartEmpty from '../../assets/emptyCart.jpg';

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
          <>
            <span className="empty-message">The cart is empty</span>
            <div className="empty-cart-container">
              <img src={cartEmpty} alt="empty cart" />
            </div>
          </>
        )}
      </div>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

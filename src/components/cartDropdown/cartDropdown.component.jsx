import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './cartDropdown.styles.scss';

import Button from '../button/button.component';
import CartItem from '../cartItem/cartItem.component';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(({ id, ...itemProps }) => (
            <CartItem key={id} {...itemProps} />
          ))
        ) : (
          <span className="empty-message">The cart is empty</span>
        )}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;

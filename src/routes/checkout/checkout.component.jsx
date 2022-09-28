import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';

import './checkout.styles.scss';

const headerBlocks = ['Product', 'Name', 'Quantity', 'Price', 'Remove'];

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {headerBlocks.map((text, id) => (
          <div key={id} className="header-block">
            {text}
          </div>
        ))}
      </div>
      {cartItems.map(({ ...otherProps }) => (
        <CheckoutItem key={otherProps.id} {...otherProps} />
      ))}
      <span className="total">Total: ${total}</span>
    </div>
  );
};

export default Checkout;

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkoutItem.styles.scss';

const CheckoutItem = ({ id, imageUrl, name, quantity, price }) => {
  const { incrementQuantity, decrementQuantity, removeItemFromCart } =
    useContext(CartContext);

  const increaseCheckoutItemHandler = () => incrementQuantity(id);

  const decreaseCheckoutItemHandler = () => decrementQuantity(id);

  const removeCheckoutItemHandler = () => removeItemFromCart(id);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img alt={`${name}`} src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={decreaseCheckoutItemHandler} className="arrow">
          &#60;
        </div>
        <div className="value">{quantity}</div>
        <span onClick={increaseCheckoutItemHandler} className="arrow">
          &#62;
        </span>
      </span>
      <span className="price">{price}</span>
      <div onClick={removeCheckoutItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;

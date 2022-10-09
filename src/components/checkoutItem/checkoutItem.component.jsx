import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  NameText,
  QuantityBox,
  ArrowIcon,
  ValueText,
  PriceText,
  RemoveBtn,
} from './checkoutItem.styles.js';

const CheckoutItem = ({ id, imageUrl, name, quantity, price }) => {
  const { incrementQuantity, decrementQuantity, removeItemFromCart } =
    useContext(CartContext);

  const increaseCheckoutItemHandler = () => incrementQuantity(id);

  const decreaseCheckoutItemHandler = () => decrementQuantity(id);

  const removeCheckoutItemHandler = () => removeItemFromCart(id);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Image alt={`${name}`} src={imageUrl} />
      </ImageContainer>
      <NameText>{name}</NameText>
      <QuantityBox>
        <ArrowIcon onClick={decreaseCheckoutItemHandler}>&#60;</ArrowIcon>
        <ValueText>{quantity}</ValueText>
        <ArrowIcon onClick={increaseCheckoutItemHandler}>&#62;</ArrowIcon>
      </QuantityBox>
      <PriceText>${price}</PriceText>
      <RemoveBtn onClick={removeCheckoutItemHandler}>&#10005;</RemoveBtn>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;

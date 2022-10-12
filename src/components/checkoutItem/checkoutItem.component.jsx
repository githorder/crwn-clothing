import { useSelector, useDispatch } from 'react-redux';

import { incrementQuantity, decrementQuantity, removeItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selectors';

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
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const increaseCheckoutItemHandler = () => dispatch(incrementQuantity(cartItems, id));

  const decreaseCheckoutItemHandler = () => dispatch(decrementQuantity(cartItems, id));

  const removeCheckoutItemHandler = () => dispatch(removeItemFromCart(cartItems, id));

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

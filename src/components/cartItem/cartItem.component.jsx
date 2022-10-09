import {
  CartItemContainer,
  ItemImage,
  ItemDetails,
  ItemName,
  ItemCost,
} from './cartItem.styles';

const CartItem = ({ quantity, imageUrl, name, price }) => {
  return (
    <CartItemContainer>
      <ItemImage src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemCost>
          {quantity} X ${price}
        </ItemCost>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;

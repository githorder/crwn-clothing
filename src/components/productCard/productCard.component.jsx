import { useSelector, useDispatch } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selectors';

import { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCardContainer,
  ProductButton,
  ProductFooter,
  ProductImage,
  ProductName,
  ProductPrice,
} from './productCard.styles';

const ProductCard = ({ id, name, imageUrl, price }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductHandler = () => {
    dispatch(addItemToCart(cartItems, { id, name, imageUrl, price }));
  };

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <ProductName>{name}</ProductName>
        <ProductPrice>${price}</ProductPrice>
      </ProductFooter>
      <ProductButton
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductHandler}
      >
        Add to Cart
      </ProductButton>
    </ProductCardContainer>
  );
};

export default ProductCard;

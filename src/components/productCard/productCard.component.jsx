import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

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
  const { addItemToCart } = useContext(CartContext);

  const addProductHandler = () => {
    addItemToCart({ id, name, imageUrl, price });
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

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalText,
} from './checkout.styles';

const headerBlocks = ['Product', 'Name', 'Quantity', 'Price', 'Remove'];

const Checkout = () => {
  const { cartItems, total } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {headerBlocks.map((text, id) => (
          <HeaderBlock key={id}>{text}</HeaderBlock>
        ))}
      </CheckoutHeader>
      {cartItems.map(({ ...otherProps }) => (
        <CheckoutItem key={otherProps.id} {...otherProps} />
      ))}
      <TotalText>Total: ${total}</TotalText>
    </CheckoutContainer>
  );
};

export default Checkout;

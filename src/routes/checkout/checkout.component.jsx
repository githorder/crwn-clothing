import { useSelector } from 'react-redux';

import {
  selectCartTotal,
  selectCartItems,
} from '../../store/cart/cart.selectors';

import CheckoutItem from '../../components/checkoutItem/checkoutItem.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  TotalText,
} from './checkout.styles';

const headerBlocks = ['Product', 'Name', 'Quantity', 'Price', 'Remove'];

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

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
      <TotalText>Total: ${cartTotal}</TotalText>
    </CheckoutContainer>
  );
};

export default Checkout;

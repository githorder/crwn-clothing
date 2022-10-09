import styled from 'styled-components';

import { ReactComponent as CartIconSvg } from '../../assets/cart.svg';

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;
`;

export const CartIcon = styled(CartIconSvg)`
  width: 35px;
  height: 35px;
`;

export const ItemCount = styled.span`
  position: absolute;
  font-size: 12px;
  font-weight: bold;
  bottom: 12px;
`;

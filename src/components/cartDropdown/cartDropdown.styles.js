import styled from 'styled-components';

import {
  BaseButton,
  InvertedButton,
  GoogleSignInButton,
} from '../button/button.styles';

import { ReactComponent as EmptyCartSvg } from '../../assets/emptyCart.svg';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 295px;
  height: 350px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 100%;
  right: 0;
  z-index: 5;

  ${BaseButton}, ${GoogleSignInButton}, ${InvertedButton} {
    margin-top: auto;
  }
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EmptyCartIconContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const EmptyCartIcon = styled(EmptyCartSvg)`
  width: 100%;
  height: auto;
`;

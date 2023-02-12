import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  &:active {
    transform: translate(0, 3px);
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  border: 1px solid black;
  color: #333;

  &:hover {
    background-color: black;
    border: none;
    color: #fff;
  }
`;

export const GoogleSignInButton = styled(InvertedButton)`
  min-width: 50px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: white;
    border: 1px solid black;
  }
`;

export const SpinnerButton = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;

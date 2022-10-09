import styled from 'styled-components';

import { ReactComponent as GoogleSvg } from '../../assets/google.svg';

export const SignInFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 5px;
`;

export const SignInSubTitle = styled.span`
  font-size: 14px;
  color: #555;
  letter-spacing: 2px;
  margin-top: 10px;
`;

export const BtnGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  column-gap: 20px;
  row-gap: 20px;
  flex-wrap: wrap;
`;

export const GoogleIcon = styled(GoogleSvg)`
  width: 25px;
`;

import styled, { css } from 'styled-components';

const subColor = '#7dca5c';
const tertiaryColor = 'grey';
const mainColor = '#333';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${subColor};
`;

export const InputLabel = styled.label`
  color: ${tertiaryColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles}
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  margin: 25px 0;
  border-bottom: 1px solid ${mainColor};

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  &:focus {
    border-bottom: 1px solid ${subColor};
    outline: none;
  }

  &:focus ~ ${InputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  position: relative;
  margin: 45px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;

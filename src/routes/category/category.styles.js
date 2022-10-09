import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
`;

export const CategoryTitle = styled.h2`
  text-transform: uppercase;
  font-weight: 300;
  color: #333;
  margin-bottom: 30px;
  font-size: 28px;
  text-align: center;
`;

import styled from 'styled-components';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h2`
  margin-bottom: 30px;
`;

export const TitleLink = styled.span`
  cursor: pointer;
  text-transform: uppercase;
  font-size: 28px;
  font-weight: 300;
  color: #333;
  &:hover {
    color: rgba(51, 51, 51, 0.5);
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

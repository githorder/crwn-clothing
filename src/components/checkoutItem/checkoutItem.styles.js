import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 16px;
  font-weight: 300;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Detail = styled.span`
  width: 23%;
`;

export const NameText = styled(Detail)``;

export const PriceText = styled(Detail)``;

export const QuantityBox = styled(Detail)`
  display: flex;
`;

export const ArrowIcon = styled.div`
  cursor: pointer;
  font-weight: 800;
`;

export const ValueText = styled.div`
  width: 30px;
  display: flex;
  justify-content: center;
`;

export const RemoveBtn = styled.div`
  padding-left: 12px;
  width: auto;
  cursor: pointer;
`;

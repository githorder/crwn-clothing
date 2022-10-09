import { Link } from 'react-router-dom';

import ProductCard from '../productCard/productCard.component';

import {
  CategoryPreviewContainer,
  TitleContainer,
  TitleLink,
  Preview,
} from './categoryPreview.styles';

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <TitleContainer>
      <Link to={title}>
        <TitleLink>{title}</TitleLink>
      </Link>
    </TitleContainer>
    <Preview>
      {products.slice(0, 4).map(({ id, ...productProps }) => (
        <ProductCard id={id} key={id} {...productProps} />
      ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;

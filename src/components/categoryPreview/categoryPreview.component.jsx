import { Link } from 'react-router-dom';

import ProductCard from '../productCard/productCard.component';

import './categoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => (
  <div className="category-preview-container">
    <h2>
      <Link to={title}>
        <span className="title">{title}</span>
      </Link>
    </h2>
    <div className="preview">
      {products.slice(0, 4).map(({ id, ...productProps }) => (
        <ProductCard id={id} key={id} {...productProps} />
      ))}
    </div>
  </div>
);

export default CategoryPreview;

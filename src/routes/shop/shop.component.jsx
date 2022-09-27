import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context';

import ProductCard from '../../components/productCard/productCard.component';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map(({ id, ...productProps }) => (
        <ProductCard key={id} {...productProps} />
      ))}
    </div>
  );
};

export default Shop;

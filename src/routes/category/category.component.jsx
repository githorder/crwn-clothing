import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard/productCard.component';

import { CategoriesContext } from '../../contexts/categories.context';

import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
  const { categories } = useContext(CategoriesContext);
  const { category } = useParams();
  const [products, setProducts] = useState(categories[category]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [categories, category]);

  return (
    <>
      <CategoryTitle>{category}</CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map(({ id, ...productProps }) => (
            <ProductCard id={id} key={id} {...productProps} />
          ))}
      </CategoryContainer>
    </>
  );
};

export default Category;

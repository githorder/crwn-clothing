import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import ProductCard from '../../components/productCard/productCard.component';

import { CategoryContainer, CategoryTitle } from './category.styles';

const Category = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [categoriesMap, category]);

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

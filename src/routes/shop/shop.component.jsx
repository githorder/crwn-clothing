import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categoriesPreview/categoriesPreview.component';
import Category from '../category/category.component';

import { setCategoriesStart } from '../../store/categories/categories.action';

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategoriesStart());
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;

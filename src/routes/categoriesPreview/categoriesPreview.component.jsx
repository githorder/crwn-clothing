import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreview from '../../components/categoryPreview/categoryPreview.component';

import { CategoriesPreviewContainer } from './categoriesPreview.styles';

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <CategoriesPreviewContainer>
      {Object.keys(categories).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categories[title]}
          />
        );
      })}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;

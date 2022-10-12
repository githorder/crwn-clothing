import { useSelector } from 'react-redux';

import { selectCategoriesMap } from '../../store/categories/categories.selector';

import CategoryPreview from '../../components/categoryPreview/categoryPreview.component';

import { CategoriesPreviewContainer } from './categoriesPreview.styles';

const CategoriesPreview = () => {
  const categories = useSelector(selectCategoriesMap);

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

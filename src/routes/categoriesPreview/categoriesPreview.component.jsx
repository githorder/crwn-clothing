import { useSelector } from 'react-redux';

import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from '../../store/categories/categories.selector';

import CategoryPreview from '../../components/categoryPreview/categoryPreview.component';
import Spinner from '../../components/spinner/spinner.component';

import { CategoriesPreviewContainer } from './categoriesPreview.styles';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  return (
    <CategoriesPreviewContainer>
      {isLoading ? (
        <Spinner />
      ) : (
        Object.keys(categoriesMap).map((title) => {
          return (
            <CategoryPreview
              key={title}
              title={title}
              products={categoriesMap[title]}
            />
          );
        })
      )}
    </CategoriesPreviewContainer>
  );
};

export default CategoriesPreview;

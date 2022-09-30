import { useContext } from 'react';

import { CategoriesContext } from '../../contexts/categories.context';

import CategoryPreview from '../../components/categoryPreview/categoryPreview.component';

import './categoriesPreview.styles.scss';

const CategoriesPreview = () => {
  const { categories } = useContext(CategoriesContext);

  return (
    <div className="categories-preview-container">
      {Object.keys(categories).map((title) => {
        return (
          <CategoryPreview
            key={title}
            title={title}
            products={categories[title]}
          />
        );
      })}
    </div>
  );
};

export default CategoriesPreview;

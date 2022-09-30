import CategoryItem from '../categoryItem/categoryItem.component';

import './categories.styles.scss';

const Categories = ({ categories }) => (
  <div className="categories-container">
    {categories.map((categoryProps, index) => (
      <CategoryItem key={index} {...categoryProps} />
    ))}
  </div>
);

export default Categories;

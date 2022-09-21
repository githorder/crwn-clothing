import Category from '../category/category.component';

import './categories.styles.scss';

const Categories = ({ categories }) => (
  <div className="categories-container">
    {categories.map((categoryProps, index) => (
      <Category key={index} {...categoryProps} />
    ))}
  </div>
);

export default Categories;

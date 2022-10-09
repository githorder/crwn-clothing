import CategoryItem from '../categoryItem/categoryItem.component';

import { CategoriesContainer } from './categories.styles';

const categories = [
  {
    title: 'hats',
    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
  },
  {
    title: 'jackets',
    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
  },
  {
    title: 'sneakers',
    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
  },
  {
    title: 'womens',
    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
  },
  {
    title: 'mens',
    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
  },
];

const Categories = () => (
  <CategoriesContainer>
    {categories.map((categoryProps, index) => (
      <CategoryItem key={index} {...categoryProps} />
    ))}
  </CategoriesContainer>
);

export default Categories;

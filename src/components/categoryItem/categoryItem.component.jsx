import { useNavigate } from 'react-router-dom';

import {
  BackgroundImage,
  Header,
  CategoryItemContainer,
  Title,
  SubTitle,
} from './categoryItem.styles';

const CategoryItem = ({ imageUrl, title }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <CategoryItemContainer onClick={navigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Header>
        <Title>{title.toUpperCase()}</Title>
        <SubTitle>Shop now</SubTitle>
      </Header>
    </CategoryItemContainer>
  );
};

export default CategoryItem;

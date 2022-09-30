import { useNavigate } from 'react-router-dom';

import './categoryItem.styles.scss';

const CategoryItem = ({ imageUrl, title }) => {
  const navigate = useNavigate();

  const goToHandler = () => {
    navigate(`/shop/${title}`);
  };

  return (
    <div onClick={goToHandler} className="category-item-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="body">
        <h2>{title.toUpperCase()}</h2>
        <span>Shop now</span>
      </div>
    </div>
  );
};

export default CategoryItem;

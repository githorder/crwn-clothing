import './category.styles.scss';

const Category = ({ imageUrl, title }) => (
  <div className="category-container">
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="category-body-container">
      <h2>{title.toUpperCase()}</h2>
      <span>Shop now</span>
    </div>
  </div>
);

export default Category;

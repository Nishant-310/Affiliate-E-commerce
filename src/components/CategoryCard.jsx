import './CategoryCard.css'

function CategoryCard({ image, name }) {
  return (
    <div className="category-card">
      <div className="category-card__image">
        <img src={image} alt={name} />
      </div>
      <h4 className="category-card__name">{name}</h4>
      <button className="btn btn--primary category-card__btn">Shop Now</button>
    </div>
  )
}

export default CategoryCard

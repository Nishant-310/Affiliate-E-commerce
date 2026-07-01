import './ProductCard.css'

function Stars({ rating }) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.5
  const stars = []

  for (let i = 0; i < 5; i++) {
    if (i < full) stars.push('★')
    else if (i === full && hasHalf) stars.push('★')
    else stars.push('☆')
  }

  return <span className="product-card__stars">{stars.join('')}</span>
}

function ProductCard({ image, name, price, rating = 0, reviews = 0 }) {
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={image} alt={name} />
      </div>

      <div className="product-card__body">
        <h4 className="product-card__name">{name}</h4>
        <p className="product-card__price">${price.toFixed(2)}</p>

        <div className="product-card__rating">
          <Stars rating={rating} />
          <span className="product-card__reviews">({reviews})</span>
        </div>

        <button className="btn btn--primary product-card__btn">Buy Now</button>
      </div>
    </div>
  )
}

export default ProductCard

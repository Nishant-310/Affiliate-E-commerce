import ProductCard from './ProductCard'
import './TrendingSection.css'

function TrendingSection({ products = [] }) {
  return (
    <section className="trending-section">
      <div className="container">
        <h2 className="trending-section__title">
          Trending <span>Now</span>
        </h2>

        <div className="trending-section__grid">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              image={p.image}
              name={p.name}
              price={p.price}
              rating={p.rating}
              reviews={p.reviews}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingSection

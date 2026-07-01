import CategoryCard from './CategoryCard'
import './CategorySection.css'

function CategorySection({ categories = [] }) {
  return (
    <section className="category-section" id="categories">
      <div className="container">
        <h2 className="category-section__title">
          Shop by <span>Category</span>
        </h2>

        <div className="category-section__grid">
          {categories.map((cat) => (
            <CategoryCard key={cat.id} image={cat.image} name={cat.name} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection

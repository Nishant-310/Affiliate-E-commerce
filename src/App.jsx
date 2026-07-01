import Header from './components/Header'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import CategorySection from './components/CategorySection'
import TrendingSection from './components/TrendingSection'
import Footer from './components/Footer'
import { navLinks, trustBadges, categories, products } from './data/siteData'
import './App.css'

const HERO_IMAGE =
  'Hero.jpeg'

function App() {
  return (
    <div className="app">
      <Header brand="Anime" brandAccent="Outfit" navLinks={navLinks} />

      <Hero
        badgeText="New Drop"
        titleLine1="Anime Style."
        titleLine2="Your Way."
        subtitle="Premium Clothing & Anime Collections For True Fans."
        primaryCtaText="Shop Now"
        secondaryCtaText="Explore Anime"
        image={HERO_IMAGE}
      />

      <TrustBadges badges={trustBadges} />

      <CategorySection categories={categories} />

      <TrendingSection products={products} />

      <Footer brand="Anime Outfit" />
    </div>
  )
}

export default App

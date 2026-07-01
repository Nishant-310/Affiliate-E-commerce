import './Hero.css'

function Hero({
  badgeText = 'New Drop',
  titleLine1 = 'Anime Style.',
  titleLine2 = 'Your Way.',
  subtitle = 'Premium Clothing & Anime Collections For True Fans.',
  primaryCtaText = 'Shop Now',
  secondaryCtaText = 'Explore Anime',
  image,
}) {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__badge">{badgeText}</span>
          <h1 className="hero__title">
            {titleLine1}
            <br />
            {titleLine2}
          </h1>
          <p className="hero__subtitle">{subtitle}</p>
          <div className="hero__ctas">
            <button className="btn btn--primary">{primaryCtaText}</button>
            <button className="btn btn--outline">{secondaryCtaText}</button>
          </div>
        </div>

        <div className="hero__image-wrap">
          <img src={image} alt="Featured anime style outfit" />
        </div>
      </div>
    </section>
  )
}

export default Hero

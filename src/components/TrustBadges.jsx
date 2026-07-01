import './TrustBadges.css'

function TrustBadges({ badges = [] }) {
  return (
    <section className="trust">
      <div className="container trust__grid">
        {badges.map((badge) => (
          <div className="trust__item" key={badge.title}>
            <span className="trust__icon">{badge.icon}</span>
            <div>
              <h4 className="trust__title">{badge.title}</h4>
              <p className="trust__subtitle">{badge.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TrustBadges

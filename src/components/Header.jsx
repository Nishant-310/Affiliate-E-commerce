import './Header.css'

function Header({ brand = 'Anime', brandAccent = 'Outfit', navLinks = [] }) {
  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#home" className="header__logo">
          {brand} <span>{brandAccent}</span>
        </a>

        <nav className="header__nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={link.label === 'Home' ? 'active' : ''}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__icons">
          <button aria-label="Search">🔍</button>
          <button aria-label="Account">👤</button>
          <button aria-label="Cart" className="header__cart">
            🛒<span className="header__cart-count">0</span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

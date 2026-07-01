import './Footer.css'

function Footer({ brand = 'Anime Outfit', year = new Date().getFullYear() }) {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {brand}. Built with React.
        </p>
      </div>
    </footer>
  )
}

export default Footer

import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__section footer__brand">
          <h3 className="footer__title">
            <span className="footer__logo-icon">🍰</span> Sweet Crumbs Bakery
          </h3>
          <p className="footer__tagline">
            Handcrafted with Love, Baked to Perfection
          </p>
          <p className="footer__description">
            From our ovens to your heart — experience the finest artisan pastries
            made with premium ingredients and generations of baking tradition.
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/featured">Featured</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__contact">
            <li>📍 123 Posa road, Posa, Angthong 14000</li>
            <li>📞 +66 093 221 0367</li>
            <li>✉️ adisorndankeawwork@gmail.com</li>
            <li>🕐 Mon–Sat 7AM–8PM | Sun 8AM–6PM</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">Follow Us</h4>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/xdisr.dan.k.w?"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              📘 Facebook
            </a>
            <a
              href="https://www.instagram.com/adisorn_dankeaw?stkn=MWx4bHphbXJkMnVhdw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              📸 Instagram
            </a>
            <a
              href="https://line.me"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              💬 Line
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© 2026 Sweet Crumbs Bakery. All rights reserved.</p>
      </div>
    </footer>
  );
}

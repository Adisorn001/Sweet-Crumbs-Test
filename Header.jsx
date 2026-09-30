import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './Header.css';

export default function Header() {
  const { user, isLoggedIn } = useAuth();
  const { totalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'หน้าหลัก' },
    { to: '/about', label: 'เกี่ยวกับเรา' },
    { to: '/featured', label: 'สินค้าแนะนำ' },
    { to: '/products', label: 'สินค้าทั้งหมด' },
    { to: '/news', label: 'ข่าวสาร' },
    { to: '/contact', label: 'ติดต่อเรา' },
    { to: '/feedback', label: 'แสดงความคิดเห็น' },
  ];

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <Link to="/" className="header__logo">
          <span className="header__logo-icon">🍰</span>
          <span className="header__logo-text">Sweet Crumbs</span>
        </Link>

        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `header__link ${isActive ? 'header__link--active' : ''}`
              }
              end={link.to === '/'}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Link to="/cart" className="header__cart" title="ตะกร้าสินค้า">
            <span className="header__cart-icon">🛒</span>
            {totalItems > 0 && (
              <span className="header__cart-badge">{totalItems}</span>
            )}
          </Link>

          {isLoggedIn ? (
            <Link to="/profile" className="header__user">
              <span className="header__user-avatar">
                {(user.displayName || user.username)?.charAt(0).toUpperCase()}
              </span>
              <span className="header__user-name">{user.displayName || user.username}</span>
            </Link>
          ) : (
            <Link to="/login" className="header__login-btn">
              เข้าสู่ระบบ
            </Link>
          )}
        </div>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="เมนู"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

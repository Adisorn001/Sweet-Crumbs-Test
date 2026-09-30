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
            ทำด้วยใจ อบด้วยความรัก
          </p>
          <p className="footer__description">
            จากเตาอบของเราสู่หัวใจของคุณ — สัมผัสความอร่อยของขนมอาร์ติซานชั้นเลิศ ทำจากวัตถุดิบพรีเมียมและสูตรดั้งเดิมที่สืบทอดกันมาหลายชั่วอายุคน
          </p>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">ลิงก์ด่วน</h4>
          <ul className="footer__links">
            <li><Link to="/">หน้าหลัก</Link></li>
            <li><Link to="/products">สินค้าทั้งหมด</Link></li>
            <li><Link to="/featured">สินค้าแนะนำ</Link></li>
            <li><Link to="/about">เกี่ยวกับเรา</Link></li>
            <li><Link to="/contact">ติดต่อเรา</Link></li>
            <li><Link to="/feedback">แสดงความคิดเห็น</Link></li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">ติดต่อ</h4>
          <ul className="footer__contact">
            <li>📍 123 ถนน... เมือง อ่างทอง 14000</li>
            <li>📞 +66 093 221 0367</li>
            <li>✉️ adisorndankeawwork@gmail.com</li>
            <li>🕐 จ–ส 07:00–20:00 | อา 08:00–18:00</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4 className="footer__heading">ติดตามเรา</h4>
          <div className="footer__social">
            <a
              href="https://www.facebook.com/xdisr.dan.k.w/?locale=th_TH"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              📘 Facebook
            </a>
            <a
              href="https://www.instagram.com/adisorn_dankeaw/"
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
              💬 Line: @sweetcrumbs
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>© 2569 Sweet Crumbs Bakery สงวนลิขสิทธิ์ทุกประการ</p>
      </div>
    </footer>
  );
}

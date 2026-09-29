import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="page page-contact fade-in">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">We'd love to hear from you</p>
        
        <div className="contact__content">
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon">📍</span>
              <div className="contact__info-text">
                <h4>Address</h4>
                <p>123 ถนน..., เมือง, Angthong 14000</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📞</span>
              <div className="contact__info-text">
                <h4>Phone</h4>
                <p>+66 093 221 0367</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">✉️</span>
              <div className="contact__info-text">
                <h4>Email</h4>
                <p>adisorndankeawwork@gmail.com</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">💬</span>
              <div className="contact__info-text">
                <h4>Line</h4>
                <p>0932210367</p>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📘</span>
              <div className="contact__info-text">
                <h4>Facebook</h4>
                <a href="https://www.facebook.com/xdisr.dan.k.w/?locale=th_TH" target="_blank" rel="noopener noreferrer">Adisorn Dankeaw</a>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">📸</span>
              <div className="contact__info-text">
                <h4>Instagram</h4>
                <a href="https://www.instagram.com/adisorn_dankeaw/" target="_blank" rel="noopener noreferrer">@AdisornDankeaw</a>
              </div>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon">🕐</span>
              <div className="contact__info-text">
                <h4>Hours</h4>
                <p>Mon–Sat 7:00 AM – 8:00 PM, Sun 8:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <div className="contact__map">
            <iframe 
              src="(14.5845556, 100.4456667)" 
              title="Google Maps"
            ></iframe>
          </div>
        </div>

        <div className="contact__form-section">
          <div className="contact__form-overlay">
            <span className="contact__coming-soon">Coming Soon</span>
          </div>
          <h3>Send Us a Message</h3>
          <p>Our contact form is coming soon! In the meantime, please reach out via phone or social media.</p>
          <form className="contact__form">
            <input type="text" placeholder="Name" disabled />
            <input type="email" placeholder="Email" disabled />
            <textarea placeholder="Message" rows="5" disabled></textarea>
            <button type="button" className="btn" disabled>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

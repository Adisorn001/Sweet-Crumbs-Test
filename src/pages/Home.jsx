import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import './Home.css';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const bestsellers = products.filter(p => p.featured).slice(0, 3);

  const slides = [
    {
      bg: '#8B5E3C',
      title: 'ยินดีต้อนรับสู่ Sweet Crumbs',
      subtitle: 'ที่ซึ่งทุกคำบอกเล่าเรื่องราวแห่งความหลงใหลและประเพณีการอบขนม',
      color: '#fff'
    },
    {
      bg: '#5D3A1A',
      title: 'ขนมอาร์ติซาน',
      subtitle: 'ทำด้วยมือทุกวันจากวัตถุดิบพรีเมียมคัดสรรเป็นพิเศษ',
      color: '#fff'
    },
    {
      bg: '#C85A7C',
      title: 'ช่วงเวลาหวาน ๆ',
      subtitle: 'ร่วมเฉลิมฉลองทุกช่วงเวลาสำคัญในชีวิตกับขนมสุดพิเศษจากเรา',
      color: '#fff'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((currentSlide + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);

  return (
    <div className="page home fade-in">
      <section className="home__banner">
        <div 
          className="home__slides-track" 
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div 
              key={index} 
              className="home__slide"
              style={{ backgroundColor: slide.bg, color: slide.color }}
            >
              <div className="home__slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                {index === 0 && (
                  <Link to="/products" className="btn btn-accent">🛒 เลือกซื้อสินค้า</Link>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button className="home__arrow home__arrow--prev" onClick={prevSlide}>‹</button>
        <button className="home__arrow home__arrow--next" onClick={nextSlide}>›</button>
        
        <div className="home__dots">
          {slides.map((_, index) => (
            <div 
              key={index} 
              className={`home__dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </section>

      <section className="home__features">
        <div className="container">
          <h2 className="section-title">ทำไมต้อง Sweet Crumbs?</h2>
          <p className="section-subtitle">เรามุ่งมั่นมอบประสบการณ์ขนมที่ดีที่สุดให้กับทุกคน</p>
          <div className="home__features-grid">
            <div className="home__feature-card">
              <div className="home__feature-icon">🌅</div>
              <h3>สดใหม่ทุกวัน</h3>
              <p>อบสดใหม่ทุกเช้าก่อนพระอาทิตย์ขึ้น รับประกันความสดและความอร่อยในทุกชิ้น</p>
            </div>
            <div className="home__feature-card">
              <div className="home__feature-icon">✨</div>
              <h3>วัตถุดิบพรีเมียม</h3>
              <p>คัดสรรเฉพาะวัตถุดิบชั้นเลิศจากแหล่งผลิตท้องถิ่นที่เชื่อถือได้ ปลอดภัย ไร้สารกันบูด</p>
            </div>
            <div className="home__feature-card">
              <div className="home__feature-icon">❤️</div>
              <h3>ทำด้วยความรัก</h3>
              <p>ทุกชิ้นปั้นด้วยมืออย่างประณีต ด้วยความหลงใหลและความตั้งใจในทุกรายละเอียด</p>
            </div>
          </div>
        </div>
      </section>

      <section className="home__bestsellers">
        <div className="container">
          <h2 className="section-title">สินค้าขายดี</h2>
          <p className="section-subtitle">เมนูโปรดที่ลูกค้าเลือกซ้ำแล้วซ้ำเล่าทุกวัน</p>
          <div className="home__bestsellers-grid">
            {bestsellers.map(product => (
              <div key={product.id} className="home__bestseller-card">
                <img src={product.image} alt={product.name} className="home__bestseller-image" />
                <div className="home__bestseller-info">
                  <h3>{product.name}</h3>
                  <div className="price">฿{product.price}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link to="/products" className="btn btn-outline">ดูสินค้าทั้งหมด →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

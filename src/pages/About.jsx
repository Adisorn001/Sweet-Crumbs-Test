import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="page about fade-in">
      <section className="about__hero">
        <div className="container">
          <h1>About Us</h1>
          <p>The story behind every crumb</p>
        </div>
      </section>

      <section className="about__story">
        <div className="container about__story-grid">
          <div className="about__story-image-container">
            <img src="https://placehold.co/500x400/D4A574/3E2723?text=Our+Kitchen" alt="Our Kitchen" className="about__story-image" />
          </div>
          <div className="about__story-text">
            <h2>Our Story</h2>
            <p>Founded in the heart of Bangkok, Sweet Crumbs Bakery began as a small family kitchen driven by a deep passion for baking and crafting moments of joy through pastries.</p>
            <p>Our cherished family recipes have been passed down through generations, combining traditional techniques with contemporary flavors to create truly unique artisanal treats.</p>
            <p>We are committed to quality, always striving to deliver the most delightful and fresh baked goods to our beloved community.</p>
          </div>
        </div>
      </section>

      <section className="about__values">
        <div className="container">
          <div className="about__values-grid">
            <div className="about__value-card">
              <div className="about__value-icon">🌾</div>
              <h3>Quality Ingredients</h3>
              <p>We source only the finest, freshest ingredients from local suppliers</p>
            </div>
            <div className="about__value-card">
              <div className="about__value-icon">👐</div>
              <h3>Handcrafted</h3>
              <p>Every pastry is lovingly made by hand, never mass-produced</p>
            </div>
            <div className="about__value-card">
              <div className="about__value-icon">🤝</div>
              <h3>Community</h3>
              <p>We believe in bringing people together over great food</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__stats">
        <div className="container about__stats-grid">
          <div className="about__stat-item">
            <div className="about__stat-number">5+</div>
            <div className="about__stat-label">Years</div>
          </div>
          <div className="about__stat-item">
            <div className="about__stat-number">10,000+</div>
            <div className="about__stat-label">Happy Customers</div>
          </div>
          <div className="about__stat-item">
            <div className="about__stat-number">50+</div>
            <div className="about__stat-label">Unique Recipes</div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import './FeaturedProducts.css';

export default function FeaturedProducts() {
  const { addToCart } = useCart();
  const [toast, setToast] = useState(null);
  const featuredProducts = products.filter(p => p.featured);

  const handleAddToCart = (product) => {
    addToCart(product);
    setToast(`🛒 เพิ่ม "${product.name}" ลงตะกร้าแล้ว!`);
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return (
    <div className="page featured fade-in">
      <div className="container" style={{ padding: '60px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 className="section-title">สินค้าแนะนำ</h1>
          <p className="section-subtitle">เมนูขนมสุดพิเศษที่ลูกค้าทุกคนต้องลอง</p>
        </div>

        <div className="featured__grid">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured__card">
              <div style={{ overflow: 'hidden' }}>
                <img src={product.image} alt={product.name} className="featured__card-image" />
              </div>
              <div className="featured__card-body">
                <h3 className="featured__card-name">{product.name}</h3>
                <p className="featured__card-desc">{product.description}</p>
                <div className="featured__card-footer">
                  <span className="featured__card-price">฿{product.price}</span>
                  <button 
                    className="btn btn-accent btn-sm"
                    onClick={() => handleAddToCart(product)}
                  >
                    🛒 ใส่ตะกร้า
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="featured__cta">
          <Link to="/products" className="btn btn-outline">ดูสินค้าทั้งหมด →</Link>
        </div>
      </div>
      
      {toast && (
        <div className="toast toast--success">
          {toast}
        </div>
      )}
    </div>
  );
}

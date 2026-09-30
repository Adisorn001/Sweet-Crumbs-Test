import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Cart.css';

export default function Cart() {
  const { items, totalItems, totalPrice, updateQuantity, removeFromCart, clearCart, placeOrder } = useCart();
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const [toastMessage, setToastMessage] = useState('');

  const handlePlaceOrder = () => {
    if (isLoggedIn) {
      placeOrder(user.username);
      setToastMessage('🎉 สั่งซื้อสำเร็จแล้ว!');
      setTimeout(() => {
        setToastMessage('');
        navigate('/orders');
      }, 1400);
    }
  };

  return (
    <div className="page page-cart fade-in">
      <div className="container">
        <h1 className="section-title">ตะกร้าสินค้า</h1>
        
        {items.length === 0 ? (
          <div className="cart__empty">
            <div className="cart__empty-icon">🛒</div>
            <h2>ตะกร้าของคุณว่างเปล่า</h2>
            <p>ยังไม่มีสินค้าในตะกร้า มาเลือกขนมอร่อย ๆ กันเลย!</p>
            <Link to="/products" className="btn" style={{marginTop: '20px', display: 'inline-block'}}>เลือกซื้อสินค้า</Link>
          </div>
        ) : (
          <div className="cart__layout">
            <div className="cart__items-container">
              <div className="cart__items">
                {items.map(item => (
                  <div key={item.id} className="cart__item">
                    <img src={item.image || `https://via.placeholder.com/60`} alt={item.name} className="cart__item-image" />
                    <div className="cart__item-info">
                      <div className="cart__item-name">{item.name}</div>
                      <div className="cart__item-price">฿{item.price} / ชิ้น</div>
                    </div>
                    <div className="cart__item-qty">
                      <button className="cart__qty-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button className="cart__qty-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="cart__item-total">
                      ฿{item.price * item.quantity}
                    </div>
                    <button className="cart__item-remove" onClick={() => removeFromCart(item.id)}>✕</button>
                  </div>
                ))}
              </div>
              <button className="btn btn-outline btn-sm btn-danger" style={{marginTop: '20px'}} onClick={clearCart}>🗑 ล้างตะกร้า</button>
            </div>
            
            <div className="cart__summary">
              <h3>สรุปรายการสั่งซื้อ</h3>
              <div className="cart__summary-row">
                <span>จำนวนสินค้า</span>
                <span>{totalItems} ชิ้น</span>
              </div>
              <div className="cart__summary-row cart__summary-total">
                <span>รวมทั้งหมด</span>
                <span>฿{totalPrice}</span>
              </div>
              
              {!isLoggedIn ? (
                <div className="cart__login-msg">
                  กรุณา <Link to="/login" style={{color: 'var(--accent)', fontWeight: 'bold'}}>เข้าสู่ระบบ</Link> ก่อนทำการสั่งซื้อ
                </div>
              ) : (
                <button className="btn btn-accent" style={{width: '100%', marginTop: '20px'}} onClick={handlePlaceOrder}>
                  🎉 ยืนยันการสั่งซื้อ
                </button>
              )}
            </div>
          </div>
        )}
        {toastMessage && (
          <div className="toast toast--success fade-in" style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000}}>
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
}

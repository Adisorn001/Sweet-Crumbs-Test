import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import './OrderHistory.css';

export default function OrderHistory() {
  const { isLoggedIn, user } = useAuth();
  const { getOrdersByDate, orders } = useCart();

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const allUserOrders = orders.filter(o => o.username === user.username);
  
  if (allUserOrders.length === 0) {
    return (
      <div className="page page-orders fade-in">
        <div className="container">
          <h1 className="section-title">ประวัติการสั่งซื้อ</h1>
          <div className="orders__empty">
            <div className="orders__empty-icon">📋</div>
            <h2>ยังไม่มีรายการสั่งซื้อ</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>รายการสั่งซื้อของคุณจะปรากฏที่นี่</p>
            <Link to="/products" className="btn" style={{display: 'inline-block'}}>เลือกซื้อสินค้า</Link>
          </div>
        </div>
      </div>
    );
  }

  const ordersByDate = getOrdersByDate();
  const dateKeys = Object.keys(ordersByDate).sort((a, b) => new Date(b) - new Date(a));

  return (
    <div className="page page-orders fade-in">
      <div className="container">
        <h1 className="section-title">ประวัติการสั่งซื้อ</h1>
        <p className="section-subtitle">ของ {user.displayName || user.username}</p>

        {dateKeys.map(dateKey => {
          const userOrders = ordersByDate[dateKey].filter(o => o.username === user.username);
          if (userOrders.length === 0) return null;

          return (
            <div key={dateKey} className="orders__date-group">
              <h2 className="orders__date-header">
                📅 {new Date(dateKey + 'T12:00:00').toLocaleDateString('th-TH', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </h2>
              <div className="orders__cards">
                {userOrders.map(order => (
                  <div key={order.id} className="orders__card">
                    <div className="orders__card-header">
                      <span className="orders__card-id">คำสั่งซื้อ #{String(order.id).substring(0, 8).toUpperCase()}</span>
                      <span className="orders__card-time">{new Date(order.date).toLocaleTimeString('th-TH', {hour: '2-digit', minute:'2-digit'})}</span>
                    </div>
                    <div className="orders__card-items">
                      {order.items.map(item => (
                        <div key={item.id} className="orders__card-item">
                          <span>{item.name} × {item.quantity}</span>
                          <span>฿{item.price * item.quantity}</span>
                        </div>
                      ))}
                    </div>
                    <div className="orders__card-total">
                      <span>รวม</span>
                      <span>฿{order.total}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

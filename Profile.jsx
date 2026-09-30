import React, { useState } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

export default function Profile() {
  const { isLoggedIn, user, updateProfile, logout } = useAuth();
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [bio, setBio] = useState(user?.bio || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [toastMessage, setToastMessage] = useState('');

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const handleSave = (e) => {
    e.preventDefault();
    updateProfile({ displayName, bio, phone });
    setToastMessage('✓ อัปเดตข้อมูลเรียบร้อยแล้ว');
    setTimeout(() => setToastMessage(''), 3000);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const formattedDate = user?.joinDate 
    ? new Date(user.joinDate).toLocaleDateString('th-TH', { year: 'numeric', month: 'long', day: 'numeric' }) 
    : 'ไม่ทราบ';

  const avatarLetter = (user.displayName || user.username || '?').charAt(0).toUpperCase();

  return (
    <div className="page page-profile fade-in">
      <div className="container">
        <div className="profile__card">
          <div className="profile__header">
            <div className="profile__avatar">
              {avatarLetter}
            </div>
            <h2 className="profile__name">{user.displayName || user.username}</h2>
            <p className="profile__since">สมาชิกตั้งแต่ {formattedDate}</p>
          </div>
          
          <div className="profile__body">
            <form onSubmit={handleSave}>
              <div className="profile__field">
                <label>ชื่อที่แสดง</label>
                <input 
                  type="text" 
                  value={displayName} 
                  onChange={e => setDisplayName(e.target.value)} 
                />
              </div>
              <div className="profile__field">
                <label>แนะนำตัว</label>
                <textarea 
                  value={bio} 
                  onChange={e => setBio(e.target.value)} 
                  rows="3"
                ></textarea>
              </div>
              <div className="profile__field">
                <label>เบอร์โทรศัพท์</label>
                <input 
                  type="text" 
                  value={phone} 
                  onChange={e => setPhone(e.target.value)} 
                />
              </div>
              
              <div className="profile__actions">
                <button type="submit" className="btn btn-accent">💾 บันทึกข้อมูล</button>
                <button type="button" className="btn btn-danger" onClick={handleLogout}>ออกจากระบบ</button>
              </div>
            </form>

            <div className="profile__links">
              <Link to="/orders" className="profile__link">
                <span>📋</span> ประวัติการสั่งซื้อ
              </Link>
              <Link to="/products" className="profile__link">
                <span>🛒</span> เลือกซื้อสินค้า
              </Link>
              <Link to="/feedback" className="profile__link">
                <span>💬</span> แสดงความคิดเห็น
              </Link>
            </div>
          </div>
        </div>

        {toastMessage && (
          <div className="toast toast--success fade-in" style={{position: 'fixed', bottom: '20px', right: '20px', zIndex: 1000}}>
            {toastMessage}
          </div>
        )}
      </div>
    </div>
  );
}

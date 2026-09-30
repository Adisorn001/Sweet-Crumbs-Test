import React from 'react';
import './News.css';

const newsLinks = [
  { icon: '🎬', name: 'YouTube', desc: 'ชมวิดีโอสอนทำขนมและสูตรจากเชฟระดับโลกได้ที่นี่เลย', url: 'https://www.youtube.com' },
  { icon: '🔍', name: 'Google', desc: 'ค้นหาสูตรขนมหรือเทคนิคการอบที่คุณต้องการได้ทันที', url: 'https://www.google.com' },
  { icon: '🍳', name: 'Tasty', desc: 'ค้นพบสูตรอาหารและขนมเทรนด์ใหม่อัปเดตทุกวัน', url: 'https://tasty.co' },
  { icon: '👨‍🍳', name: 'King Arthur Baking', desc: 'แหล่งรวมเทคนิคการอบระดับมืออาชีพและสูตรชั้นเลิศจากผู้เชี่ยวชาญ', url: 'https://www.kingarthurbaking.com' },
  { icon: '📰', name: 'BBC Good Food', desc: 'สูตรอาหารและขนมที่เชื่อถือได้จากทีมผู้เชี่ยวชาญของ BBC', url: 'https://www.bbcgoodfood.com' }
];

export default function News() {
  return (
    <div className="page page-news fade-in">
      <div className="container">
        <h1 className="section-title">ข่าวสารและแหล่งความรู้</h1>
        <p className="section-subtitle">อัปเดตข่าวสารและเพิ่มพูนความรู้ด้านขนมอบ</p>
        <div className="news__grid">
          {newsLinks.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="news__card">
              <div className="news__card-icon">{link.icon}</div>
              <h3 className="news__card-name">{link.name}</h3>
              <p className="news__card-desc">{link.desc}</p>
              <span className="news__card-link">เข้าชม →</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}


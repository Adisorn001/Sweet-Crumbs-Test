import React from 'react';
import './About.css';

export default function About() {
  return (
    <div className="page about fade-in">
      <section className="about__hero">
        <div className="container">
          <h1>เกี่ยวกับเรา</h1>
          <p>เรื่องราวเบื้องหลังทุกเศษขนมที่เราส่งมอบให้คุณ</p>
        </div>
      </section>

      <section className="about__story">
        <div className="container about__story-grid">
          <div className="about__story-image-container">
            <img
              src={`${import.meta.env.BASE_URL}images/about_story.jpg`}
              alt="ครัวของเรา"
              className="about__story-image"
            />
          </div>
          <div className="about__story-text">
            <h2>เรื่องราวของเรา</h2>
            <p>Sweet Crumbs Bakery ก่อตั้งขึ้นในปี 2562 จากห้องครัวเล็ก ๆ ของครอบครัวในอำเภอเมือง จังหวัดอ่างทอง สิ่งที่เริ่มต้นจากความหลงใหลในการอบขนมในวันหยุดสุดสัปดาห์ ได้กลายเป็นร้านเบเกอรี่อาร์ติซานที่เป็นที่รักของคนในชุมชน</p>
            <p>คุณอดิศร ด่านแก้ว ผู้ก่อตั้ง มีความฝันที่จะนำขนมอบระดับโลกมาสู่อ่างทอง โดยใช้วัตถุดิบท้องถิ่นคุณภาพสูง ทุกสูตรผ่านการคิดค้นและทดลองอย่างพิถีพิถัน เพื่อให้ได้รสชาติที่สมบูรณ์แบบที่สุด</p>
            <p>เราอบทุกอย่างด้วยมือในปริมาณน้อย ๆ ไม่ใช้วัตถุกันเสียใด ๆ เมื่อคุณกัดขนมของเรา คุณสัมผัสได้ถึงไม่เพียงแค่แป้งและเนย แต่ยังรู้สึกได้ถึงความทุ่มเทและความรักในทุกชิ้น</p>
          </div>
        </div>
      </section>

      <section className="about__values">
        <div className="container">
          <h2 className="section-title">คุณค่าที่เรายึดมั่น</h2>
          <p className="section-subtitle">หลักการที่นำทางทุกสิ่งที่เราทำ</p>
          <div className="about__values-grid">
            <div className="about__value-card">
              <div className="about__value-icon">🌾</div>
              <h3>วัตถุดิบคุณภาพ</h3>
              <p>เราคัดสรรเฉพาะวัตถุดิบสดใหม่ที่ดีที่สุดจากเกษตรกรและซัพพลายเออร์ท้องถิ่นที่ไว้วางใจได้</p>
            </div>
            <div className="about__value-card">
              <div className="about__value-icon">👐</div>
              <h3>ทำด้วยมือ</h3>
              <p>ขนมทุกชิ้นปั้นและตกแต่งด้วยมืออย่างประณีต ไม่ผลิตจำนวนมาก ไม่รีบร้อน เพื่อคุณภาพที่คงเส้นคงวา</p>
            </div>
            <div className="about__value-card">
              <div className="about__value-icon">🤝</div>
              <h3>ชุมชนและครอบครัว</h3>
              <p>เราเชื่อในพลังของการรวมผู้คนเข้าหากันผ่านอาหาร ร้านของเราคือจุดนัดพบที่อบอุ่นสำหรับทุกคน</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about__stats">
        <div className="container about__stats-grid">
          <div className="about__stat-item">
            <div className="about__stat-number">5+</div>
            <div className="about__stat-label">ปีแห่งการอบขนม</div>
          </div>
          <div className="about__stat-item">
            <div className="about__stat-number">10,000+</div>
            <div className="about__stat-label">ลูกค้าที่พึงพอใจ</div>
          </div>
          <div className="about__stat-item">
            <div className="about__stat-number">50+</div>
            <div className="about__stat-label">สูตรขนมพิเศษ</div>
          </div>
        </div>
      </section>
    </div>
  );
}

import React, { useState } from 'react';
import { products } from '../data/products';
import './Feedback.css';

const FEEDBACK_EMAIL = 'adisorndankeawwork@gmail.com';
const RATING_LABELS = ['', 'แย่มาก 😞', 'พอใช้ 😐', 'ดี 😊', 'ดีมาก 😄', 'ยอดเยี่ยม 🤩'];

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [error, setError] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [toast, setToast] = useState('');

  const bg = `${import.meta.env.BASE_URL}images/blueberry-muffin.jpg`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) {
      setError('กรุณาเลือกระดับความพึงพอใจก่อนส่ง');
      return;
    }
    setError('');
    setSending(true);

    const formData = new FormData(e.target);
    formData.set('คะแนนความพึงพอใจ', `${rating}/5 — ${RATING_LABELS[rating]}`);

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FEEDBACK_EMAIL}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error('send failed');
      setSent(true);
      setToast('✅ ส่งความคิดเห็นเรียบร้อยแล้ว!');
      setTimeout(() => setToast(''), 3000);
    } catch {
      setError('ส่งไม่สำเร็จ กรุณาตรวจสอบอินเทอร์เน็ตแล้วลองใหม่อีกครั้ง');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="page feedback fade-in">
      <div className="feedback__section">
        <div
          className="feedback__section-bg"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className="container" style={{ position: 'relative' }}>
          <h1 className="section-title">แสดงความคิดเห็น</h1>
          <p className="section-subtitle">
            ความคิดเห็นของคุณช่วยให้เราพัฒนาและมอบสิ่งที่ดีที่สุดให้กับคุณ
          </p>

          <div className="feedback__card">
            <div className="feedback__card-header">
              <div style={{ fontSize: '2.5rem', marginBottom: '10px' }}>🌟</div>
              <h3>บอกเราว่าคุณคิดอย่างไร</h3>
              <p>ข้อความของคุณจะถูกส่งถึงเราโดยตรง ขอบคุณที่ไว้วางใจ Sweet Crumbs Bakery</p>
            </div>

            <div className="feedback__card-body">
              {sent ? (
                <div className="feedback__success">
                  <div className="feedback__success-icon">🎉</div>
                  <h3>ขอบคุณมากค่ะ!</h3>
                  <p>เราได้รับความคิดเห็นของคุณแล้ว และจะนำไปพัฒนาร้านให้ดียิ่งขึ้นเสมอ</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <input type="hidden" name="_subject" value="💬 ความคิดเห็นลูกค้า — Sweet Crumbs Bakery" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="feedback__row">
                    <div className="feedback__field">
                      <label htmlFor="fbName">ชื่อ–นามสกุล *</label>
                      <input type="text" id="fbName" name="ชื่อ" placeholder="เช่น สมชาย ใจดี" required />
                    </div>
                    <div className="feedback__field">
                      <label htmlFor="fbPhone">เบอร์โทรศัพท์</label>
                      <input type="tel" id="fbPhone" name="โทรศัพท์" placeholder="เช่น 093-221-0367" />
                    </div>
                  </div>

                  <div className="feedback__field">
                    <label>ระดับความพึงพอใจ *</label>
                    <div className="feedback__stars">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <span
                          key={n}
                          className={`feedback__star ${n <= rating ? 'active' : ''}`}
                          onClick={() => { setRating(n); setError(''); }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="feedback__rating-label">
                      {RATING_LABELS[rating] || 'กรุณาเลือกคะแนน'}
                    </div>
                  </div>

                  <div className="feedback__field">
                    <label htmlFor="fbProduct">สินค้าที่ซื้อ</label>
                    <select id="fbProduct" name="สินค้าที่ซื้อ" defaultValue="">
                      <option value="">-- เลือกสินค้า (ถ้ามี) --</option>
                      {products.map((p) => (
                        <option key={p.id} value={p.name}>{p.name}</option>
                      ))}
                      <option value="อื่น ๆ">อื่น ๆ</option>
                    </select>
                  </div>

                  <div className="feedback__field">
                    <label htmlFor="fbMsg">ความคิดเห็น / ข้อเสนอแนะ *</label>
                    <textarea
                      id="fbMsg"
                      name="ความคิดเห็น"
                      rows="5"
                      placeholder="บอกเราว่าคุณชอบอะไร หรืออยากให้เราปรับปรุงอะไรบ้าง..."
                      required
                    ></textarea>
                  </div>

                  {error && <div className="feedback__error">{error}</div>}
                  <button type="submit" className="btn btn-accent feedback__submit" disabled={sending}>
                    {sending ? 'กำลังส่ง...' : '📩 ส่งความคิดเห็น'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {toast && <div className="toast toast--success">{toast}</div>}
    </div>
  );
}

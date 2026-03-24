import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass-panel" style={{ maxWidth: '1000px', margin: '0 auto', padding: '64px 40px', background: 'rgba(255,255,255,0.02)', borderColor: 'rgba(236, 72, 153, 0.3)' }}>
          <div className="grid grid-cols-2" style={{ gap: '48px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Bắt Đầu Hành Trình Mới</h2>
              <p className="text-secondary" style={{ marginBottom: '40px', fontSize: '1.125rem' }}>
                Sẵn sàng giải quyết bài toán khởi nghiệp của bạn? Hãy để lại thông tin để nhận tư vấn miễn phí.
              </p>
              <div style={{ display: 'grid', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', color: 'var(--accent-cyan)' }}><Mail size={24} /></div>
                  <div>
                    <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Email liên hệ</p>
                    <p style={{ fontWeight: 600 }}>hello@solopreneur.ai</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', color: 'var(--accent-purple)' }}><Phone size={24} /></div>
                  <div>
                    <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Hotline</p>
                    <p style={{ fontWeight: 600 }}>+84 (0) 900 123 456</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ padding: '12px', background: 'rgba(255,255,255,0.05)', borderRadius: '12px', color: 'var(--accent-pink)' }}><MapPin size={24} /></div>
                  <div>
                    <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Văn phòng làm việc</p>
                    <p style={{ fontWeight: 600 }}>Ho Chi Minh City, VN</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form onSubmit={e => e.preventDefault()} style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <input type="text" placeholder="Tên của bạn" style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} />
                </div>
                <div>
                  <input type="email" placeholder="Email của bạn" style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} />
                </div>
                <div>
                  <textarea placeholder="Bạn cần hỗ trợ công nghệ / AI nào?" rows="4" style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', outline: 'none' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', marginTop: '8px' }}>
                  Gửi Yêu Cầu Tư Vấn
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

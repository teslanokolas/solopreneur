import React, { useState } from 'react';
import { Mail, Phone, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { saveContactForm } from '../utils/googleSheets';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setStatus('loading');
    
    try {
      await saveContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

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
              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '16px' }}>
                <div>
                  <input required name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Tên của bạn" style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} />
                </div>
                <div>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email của bạn" style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit', fontSize: '1rem', outline: 'none' }} />
                </div>
                <div>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Bạn cần hỗ trợ công nghệ / AI nào?" rows="4" style={{ width: '100%', padding: '16px', borderRadius: '12px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--glass-border)', color: 'white', fontFamily: 'inherit', fontSize: '1rem', resize: 'vertical', outline: 'none' }}></textarea>
                </div>
                <button type="submit" disabled={status === 'loading'} className="btn btn-primary" style={{ width: '100%', padding: '16px', marginTop: '8px', opacity: status === 'loading' ? 0.7 : 1, cursor: status === 'loading' ? 'not-allowed' : 'pointer' }}>
                  {status === 'loading' ? (
                    <><Loader2 size={20} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} /> Đang gửi...</>
                  ) : (
                    'Gửi Yêu Cầu Tư Vấn'
                  )}
                </button>
                
                {status === 'success' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#10b981', background: 'rgba(16, 185, 129, 0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
                    <CheckCircle size={20} />
                    <span>Cảm ơn bạn! Yêu cầu đã được gửi thành công.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', background: 'rgba(239, 68, 68, 0.1)', padding: '12px', borderRadius: '8px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                    <AlertCircle size={20} />
                    <span>Có lỗi xảy ra. Vui lòng thử lại sau.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  );
}

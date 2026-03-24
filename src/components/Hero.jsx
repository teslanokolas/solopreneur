import React from 'react';
import { ArrowRight, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section text-center animate-fade-in-up" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div className="container">
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--glass-bg)', padding: '8px 16px', borderRadius: '99px', border: '1px solid rgba(6, 182, 212, 0.4)', color: 'var(--accent-cyan)', marginBottom: '32px', fontSize: '0.875rem', fontWeight: '500' }}>
          <Bot size={16} /> Dành riêng cho Chủ doanh nghiệp Solo & SME đang làm việc quá sức
        </div>
        
        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '24px', letterSpacing: '-0.02em', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          Đòn Bẩy Tối Thượng Để Làm Ít Đi, <br/> Đạt Kết Quả Gấp Đôi.<br />
          Đã Đến Lúc Thành <span className="text-gradient-accent">"AI-First Solopreneur"</span>
        </h1>
        
        <p className="text-secondary" style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 48px' }}>
          Đừng thuê thêm nhân sự. Hãy xây dựng một đội ngũ "Nhân viên ảo" làm việc 24/7, loại bỏ 80% công việc thủ công và giành lại quyền kiểm soát thời gian của bạn.
        </p>
        
        <div>
          <button className="btn btn-primary" style={{ marginBottom: '16px' }} onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
            Đặt lịch tư vấn chiến lược ngay <ArrowRight size={20} />
          </button>
          <p className="text-secondary" style={{ fontSize: '0.875rem' }}>Chỉ 45 phút để thiết kế lại toàn bộ luồng vận hành của bạn.</p>
        </div>
      </div>
    </section>
  );
}

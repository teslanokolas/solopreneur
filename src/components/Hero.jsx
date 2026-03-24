import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="section animate-fade-in-up" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '48px' }}>
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', marginBottom: '24px', letterSpacing: '-0.02em', textShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              Đòn Bẩy Tối Thượng Để Làm Ít Đi, <br/> Đạt Kết Quả <span className="text-gradient-accent">Gấp Đôi.</span>
            </h1>
            <p className="text-secondary" style={{ fontSize: '1.25rem', marginBottom: '40px' }}>
              Hãy xây dựng một đội ngũ "Nhân viên ảo" làm việc 24/7, loại bỏ 80% công việc thủ công và giành lại quyền kiểm soát nền tảng kinh doanh của bạn.
            </p>
            <button className="btn btn-primary" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}>
              Liên hệ ngay <ArrowRight size={20} />
            </button>
          </div>
          <div style={{ position: 'relative' }}>
             <div style={{ width: '100%', height: '500px', background: 'var(--glass-bg)', borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(6, 182, 212, 0.3)', boxShadow: '0 20px 40px rgba(6, 182, 212, 0.2)' }}>
                <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80" alt="Thiết kế AI ảo" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function Offer() {
  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="bg-glow" style={{ top: '50%', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, rgba(0,0,0,0) 70%)' }}></div>
      <div className="container text-center">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Sẵn Sàng Bước Ra Khỏi Vòng Xoáy Thủ Công?</h2>
        <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto 64px', fontSize: '1.125rem' }}>Dưới đây là 2 cách tôi có thể giúp doanh nghiệp Solo của bạn bứt phá:</p>
        
        <div className="grid grid-cols-2" style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'left' }}>
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>The Blueprint 7 Ngày</h3>
            <p className="text-secondary" style={{ marginBottom: '24px' }}>Lộ trình huấn luyện thực chiến 1 kèm 1</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px', color: 'var(--text-primary)' }}>
              Đào tạo 1:1
            </div>
            <ul style={{ display: 'grid', gap: '16px', marginBottom: '40px', flex: 1 }}>
              <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-accent-cyan" color="var(--accent-cyan)" /> Mổ xẻ luồng doanh nghiệp hiện tại</li>
              <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-accent-cyan" color="var(--accent-cyan)" /> Lắp ráp cỗ máy tự động hóa Marketing</li>
              <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-accent-cyan" color="var(--accent-cyan)" /> Thiết lập Sales & Chăm sóc khách hàng AI</li>
              <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-accent-cyan" color="var(--accent-cyan)" /> Xây dựng hệ thống Backend Quản lý Tự động</li>
            </ul>
            <button className="btn btn-secondary" style={{ width: '100%' }}>Tìm hiểu lộ trình</button>
          </div>

          <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(139, 92, 246, 0.4)', position: 'relative', display: 'flex', flexDirection: 'column', transform: 'scale(1.05)' }}>
            <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--gradient-glow)', color: 'white', padding: '4px 16px', borderRadius: '0 20px 0 20px', fontSize: '0.875rem', fontWeight: 'bold' }}>HÀNH ĐỘNG NGAY</div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>Tư Vấn Chiến Lược "AI-First"</h3>
            <p className="text-secondary" style={{ marginBottom: '24px' }}>Dành cho những giải pháp tức thì (45 Phút)</p>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '24px', color: 'var(--text-primary)' }}>
              Session 45'
            </div>
            <ul style={{ display: 'grid', gap: '16px', marginBottom: '40px', flex: 1 }}>
              <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-accent-purple" color="var(--accent-purple)" /> Tìm ra điểm nghẽn lớn nhất của bạn</li>
              <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-accent-purple" color="var(--accent-purple)" /> Vẽ sơ đồ hệ thống tự động hoá riêng</li>
              <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-accent-purple" color="var(--accent-purple)" /> Đề xuất bộ công cụ AI tối ưu nhất</li>
              <li style={{ display: 'flex', gap: '12px' }}><CheckCircle2 className="text-accent-purple" color="var(--accent-purple)" /> Gỡ rối chiến lược ngay trong ngày</li>
            </ul>
            <button className="btn btn-primary" style={{ width: '100%' }}>Nhận tư vấn định hướng <ArrowRight size={20} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

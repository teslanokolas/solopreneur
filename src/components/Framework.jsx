import React from 'react';
import { BookOpen, Wrench, Rocket } from 'lucide-react';

export default function Framework() {
  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05), transparent)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Đừng Chạy Theo Công Cụ. <br/><span className="text-gradient">Hãy Xây Dựng Hệ Thống.</span></h2>
          <p className="text-secondary" style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.125rem' }}>Tại <strong>AI Mastery for Solos</strong>, chúng tôi thiết lập cho bạn một Hệ Điều Hành AI qua đúng 3 bước, biến AI thành trợ lý đắc lực nhất chứ không phải trò chơi.</p>
        </div>

        <div className="grid grid-cols-3">
          <div className="glass-panel">
            <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '16px', marginBottom: '24px' }}>
               <BookOpen size={32} color="var(--accent-cyan)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>1. Learning</h3>
            <p style={{ fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: '8px', fontSize: '0.875rem' }}>Tư duy hệ thống</p>
            <p className="text-secondary">Quên đi hàng ngàn công cụ rườm rà. Học cách đóng gói não bộ và kinh nghiệm của mình thành những luồng công việc tự động (SOPs).</p>
          </div>

          <div className="glass-panel" style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(139, 92, 246, 0.3)' }}>
            <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', marginBottom: '24px' }}>
               <Wrench size={32} color="var(--accent-blue)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>2. Building</h3>
            <p style={{ fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '8px', fontSize: '0.875rem' }}>Nhân bản bản thân</p>
            <p className="text-secondary">Xây dựng Custom GPTs huấn luyện riêng bằng dữ liệu và tông giọng của bạn. Thiết lập Make/Zapier kết nối mọi phần mềm lại với nhau.</p>
          </div>

          <div className="glass-panel">
            <div style={{ display: 'inline-flex', padding: '16px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '16px', marginBottom: '24px' }}>
               <Rocket size={32} color="var(--accent-pink)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '12px' }}>3. Applying</h3>
            <p style={{ fontWeight: 600, color: 'var(--accent-pink)', marginBottom: '8px', fontSize: '0.875rem' }}>Đưa vào thực chiến</p>
            <p className="text-secondary">Triển khai AI ngay vào 3 điểm cốt lõi: Làm Marketing (Tạo lead), CSKH (Chốt sales 24/7), và Quản lý Vận hành (Hợp đồng, hóa đơn).</p>
          </div>
        </div>
      </div>
    </section>
  );
}

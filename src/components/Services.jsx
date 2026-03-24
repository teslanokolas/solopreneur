import React from 'react';
import { Bot, Zap, Code } from 'lucide-react';

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Dịch Vụ & Giải Pháp</h2>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>Cách tôi có thể giúp thiết lập doanh nghiệp của bạn tự động hóa hoàn toàn.</p>
        </div>

        <div className="grid grid-cols-3">
          <div className="glass-panel text-center">
            <div style={{ padding: '20px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '50%', width: '80px', height: '80px', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bot size={40} color="var(--accent-cyan)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Thiết Lập Chatbot AI 24/7</h3>
            <p className="text-secondary">Xây dựng nhân viên Sale ảo trực ca 24/7. Hỗ trợ trả lời tư vấn, chốt sale, và tự động thu thập data khách hàng chuyên nghiệp chuẩn xác.</p>
          </div>

          <div className="glass-panel text-center" style={{ borderColor: 'rgba(139, 92, 246, 0.3)', background: 'rgba(255,255,255,0.02)' }}>
            <div style={{ padding: '20px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '50%', width: '80px', height: '80px', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={40} color="var(--accent-purple)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Luồng Vận Hành Tự Động</h3>
            <p className="text-secondary">Kết nối Make/Zapier để đồng bộ dữ liệu giữa các phần mềm CRM, Email, Sheet. Không còn cảnh nhập liệu thủ công hay rủi ro sót đơn hàng.</p>
          </div>

          <div className="glass-panel text-center">
            <div style={{ padding: '20px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '50%', width: '80px', height: '80px', margin: '0 auto 24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Code size={40} color="var(--accent-pink)" />
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Thiết Kế Web Landing Page</h3>
            <p className="text-secondary">Lập trình Full-Stack / React hiện đại chuẩn SEO với chỉ số hiệu năng siêu tốc, tối ưu tỷ lệ chuyển đổi bằng một thiết kế UI nghệ thuật.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

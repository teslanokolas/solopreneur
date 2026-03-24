import React from 'react';

export default function Founder() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <div style={{ width: '100%', height: '400px', background: 'var(--glass-bg)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" alt="Founder Portrait" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, filter: 'grayscale(50%) contrast(1.2)' }} />
            </div>
          </div>
          
          <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Xin chào, tôi là người đồng hành cùng bạn.</h2>
             <p className="text-secondary" style={{ marginBottom: '16px', fontSize: '1.125rem' }}>Tôi không phải là một lập trình viên ngẫu nhiên đang cố dạy bạn dùng công nghệ. Tôi là một Solopreneur giống như bạn.</p>
             <p className="text-secondary" style={{ marginBottom: '16px', fontSize: '1.125rem' }}>Tôi từng mắc kẹt trước màn hình máy tính 12 tiếng một ngày, loay hoay xử lý từng tin nhắn, tự rà soát từng dòng data, và không dám đi du lịch vì sợ "bỏ lỡ công việc kinh doanh".</p>
             <p className="text-secondary" style={{ marginBottom: '24px', fontSize: '1.125rem' }}>Mọi việc chỉ thay đổi khi tôi ngừng làm việc <em>"TRONG"</em> doanh nghiệp và bắt đầu làm việc <em>"LÊN"</em> doanh nghiệp. Bằng tư duy kinh doanh thực chiến và Tự động hóa, tôi đã đóng gói chất xám thành một Hệ Sinh Thái tự vận hành.</p>
             <div style={{ paddingLeft: '16px', borderLeft: '3px solid var(--accent-cyan)' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.125rem', color: 'var(--text-primary)' }}>"Nhiệm vụ của tôi ở đây rất đơn giản: Trả lại thời gian cho việc sáng tạo, và để máy móc làm phần việc vất vả."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

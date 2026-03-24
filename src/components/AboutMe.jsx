import React from 'react';

export default function AboutMe() {
  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        <div className="grid grid-cols-2" style={{ alignItems: 'center', gap: '64px' }}>
          <div>
            <div style={{ width: '100%', height: '450px', background: 'var(--glass-bg)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800" alt="Chân dung" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8, filter: 'grayscale(50%) contrast(1.2)' }} />
            </div>
          </div>
          
          <div>
             <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Giới thiệu về tôi</h2>
             <p className="text-secondary" style={{ marginBottom: '16px', fontSize: '1.125rem' }}>Xin chào, tôi là một chuyên gia AI và kỹ sư tự động hóa, đồng thời tôi cũng hiểu rõ những khó khăn của một nhà khởi nghiệp mô hình Solopreneur giống như bạn.</p>
             <p className="text-secondary" style={{ marginBottom: '16px', fontSize: '1.125rem' }}>Tôi từng thấu hiểu cảm giác kiệt sức khi phải đối diện màn hình máy tính 12 tiếng mỗi ngày để làm mọi thứ một mình. Mọi việc chỉ thay đổi khi tôi ứng dụng công nghệ để đóng gói chất xám thành một Hệ Sinh Thái tự vận hành.</p>
             <p className="text-secondary" style={{ marginBottom: '24px', fontSize: '1.125rem' }}>Với kiến thức lập trình Full Stack và kinh nghiệm về Trí tuệ nhân tạo, tôi giúp các doanh nghiệp tinh gọn hệ thống và giải phóng thời gian bằng công nghệ.</p>
             <div style={{ paddingLeft: '16px', borderLeft: '3px solid var(--accent-cyan)' }}>
                <p style={{ fontStyle: 'italic', fontSize: '1.125rem', color: 'var(--text-primary)' }}>"Nhiệm vụ của tôi ở đây rất đơn giản: Trả lại thời gian sáng tạo cho bạn, và để máy móc làm phần việc vất vả."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

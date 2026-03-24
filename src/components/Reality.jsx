import React from 'react';
import { Clock, BatteryWarning, BrainCircuit } from 'lucide-react';

export default function Reality() {
  return (
    <section className="section" style={{ position: 'relative', zIndex: 2 }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Khởi nghiệp một mình là một cái bẫy... <span className="text-secondary">nếu bạn làm sai cách.</span></h2>
          <p className="text-secondary" style={{ fontSize: '1.125rem', maxWidth: '600px', margin: '0 auto' }}>Hành trình của bạn có lẽ đang diễn ra thế này:</p>
        </div>

        <div className="grid grid-cols-3">
          <div className="glass-panel text-center">
            <Clock size={40} style={{ margin: '0 auto 24px', color: 'var(--accent-pink)' }} />
            <h3 style={{ marginBottom: '16px' }}>Vòng Lặp Bất Tận</h3>
            <p className="text-secondary">14 tiếng/ngày. Check email, rep tin nhắn khách hàng, đăng mạng xã hội, lên đơn. Nửa đêm kiệt quệ với hàng tá sổ sách.</p>
          </div>
          
          <div className="glass-panel text-center" style={{ borderColor: 'rgba(6, 182, 212, 0.4)', background: 'rgba(6,182,212,0.05)', transform: 'translateY(-10px)' }}>
            <BatteryWarning size={40} style={{ margin: '0 auto 24px', color: 'var(--accent-cyan)' }} />
            <h3 style={{ marginBottom: '16px' }}>Luôn Kiệt Sức</h3>
            <p className="text-secondary">Bạn khởi nghiệp đi tìm sự Tự Do, nhưng lại tự dồn mình vào công việc làm công ăn lương được trả thấp nhất thế giới.</p>
          </div>
          
          <div className="glass-panel text-center">
            <BrainCircuit size={40} style={{ margin: '0 auto 24px', color: 'var(--accent-purple)' }} />
            <h3 style={{ marginBottom: '16px' }}>Thế Giới Đã Thay Đổi</h3>
            <p className="text-secondary">Có một nhóm Solopreneur ngoài kia đã tạo ra doanh thu bằng công ty 10 người. Họ không làm việc nhiều hơn. Họ dùng đòn bẩy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

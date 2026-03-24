import React from 'react';
import { PenTool, MessageSquare, Cog } from 'lucide-react';

export default function UseCases() {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Năng Lực Thực Chứng</h2>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>Dưới đây là một phần nhỏ những gì "Đội ngũ AI" sẽ làm thay cho bạn từ ngày mai:</p>
        </div>

        <div className="grid grid-cols-1" style={{ gap: '32px', maxWidth: '900px', margin: '0 auto' }}>
          <div className="glass-panel" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ padding: '20px', background: 'rgba(236, 72, 153, 0.1)', borderRadius: '20px', color: 'var(--accent-pink)' }}>
              <PenTool size={40} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>1. Mắt Xích Content - 1 Giờ cho 1 Tháng Nội Dung</h3>
              <p className="text-secondary">Biến một ý tưởng sơ khai thành: 5 bài đăng Facebook, 1 kịch bản Video Tiktok, 1 bài Blog chuẩn SEO và 1 Email Newsletter. Chuẩn tông giọng cá nhân của bạn. Không còn nỗi sợ "bí ý tưởng".</p>
            </div>
          </div>

          <div className="glass-panel" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ padding: '20px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '20px', color: 'var(--accent-cyan)' }}>
              <MessageSquare size={40} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>2. Nhân Viên Sale 24/7 - Không Bao Giờ Ngủ</h3>
              <p className="text-secondary">Khách hàng nhắn tin hỏi báo giá lúc nửa đêm? Hệ thống AI ngay lập tức phản hồi tự nhiên, giải đáp dựa trên cẩm nang sản phẩm, phân loại tệp khách hàng và xin thông tin liên hệ đẩy thẳng vào Google Sheet cho bạn.</p>
            </div>
          </div>

          <div className="glass-panel" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <div style={{ padding: '20px', background: 'rgba(139, 92, 246, 0.1)', borderRadius: '20px', color: 'var(--accent-purple)' }}>
              <Cog size={40} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>3. Trợ Lý Vận Hành Tự Động (Auto-Operation)</h3>
              <p className="text-secondary">Khách chuyển khoản? Hệ thống tự động nhận diện, gửi email xác nhận thanh toán, cấp quyền truy cập tài liệu, và nhắc lịch học bằng SMS. Toàn bộ chuỗi sự kiện diễn ra tự động với 0 thủ công từ bạn.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

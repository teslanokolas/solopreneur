import React from 'react';

const projects = [
  {
    title: "Hệ thống Booking Tự động",
    desc: "Chatbot tích hợp trực tiếp Facebook để đặt lịch làm đẹp spa, giảm 80% khối lượng việc cho admin và tăng 30% doanh thu.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "SaaS Dashboard Landing",
    desc: "Trang đích siêu chuyển đổi cho một sản phẩm phần mềm khởi nghiệp với Dark Theme sang trọng. Sử dụng Reactjs và xử lý hoạt ảnh phức tạp.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "AI Content Machine",
    desc: "Hệ thống Custom GPT tự động tổng hợp tin tức và viết bài chuẩn SEO hàng ngày đẩy thẳng lên trang báo điện tử WordPress.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Portfolio() {
  return (
    <section className="section" style={{ background: 'linear-gradient(to bottom, transparent, rgba(139, 92, 246, 0.05), transparent)' }}>
      <div className="container">
        <div className="text-center" style={{ marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Dự Án Nổi Bật</h2>
          <p className="text-secondary" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.125rem' }}>Các sản phẩm thực tế đã được lập trình và triển khai mang lại kết quả vượt trội.</p>
        </div>

        <div className="grid grid-cols-3">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: '220px', width: '100%', overflow: 'hidden' }}>
                <img src={proj.img} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
              </div>
              <div style={{ padding: '24px', flex: 1 }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>{proj.title}</h3>
                <p className="text-secondary" style={{ fontSize: '0.9rem' }}>{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

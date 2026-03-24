import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Tôi mù tịt về công nghệ. Tôi không biết viết code thì có làm được không?",
    answer: "Hoàn toàn được. Lộ trình của tôi thiết kế 100% dựa trên công nghệ No-code (Không cần code). Nếu bạn biết dùng kéo và hồ dán ngày học tiểu học, bạn sẽ biết cách kéo-thả các luồng tự động hóa này. Trọng tâm là tư duy logics, không phải dòng lệnh."
  },
  {
    question: "Chi phí để duy trì các công cụ AI và Tự động hóa này có đắt không?",
    answer: "Rất rẻ, thậm chí rẻ hơn tiền cà phê hàng tháng của bạn. Đa phần hệ thống chỉ yêu cầu tối thiểu một tài khoản ChatGPT Plus (20$/tháng) và gói cơ bản của Make.com (10$/tháng). Đổi lại, bạn tiết kiệm quỹ lương hàng ngàn đô để thuê 2-3 nhân viên. Một khoản đầu tư ROI khổng lồ."
  },
  {
    question: "Dùng AI có khiến content hay việc chăm sóc khách hàng bị 'giả trân', mất chất riêng?",
    answer: "Đây là sai lầm của người dùng AI hời hợt. Tại AI Mastery for Solos, bạn sẽ học cách cung cấp bối cảnh (context), tính cách thương hiệu (brand persona) và dữ liệu chuẩn của bạn. AI chỉ xử lý thông tin thô, người tạo ra linh hồn ở kết quả cuối cùng vẫn luôn là bạn."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div className="container">
        <h2 className="text-center" style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Câu Hỏi Thường Gặp</h2>
        
        <div style={{ display: 'grid', gap: '8px' }}>
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'active' : ''}`} onClick={() => toggleFaq(index)}>
              <div className="faq-question">
                 {faq.question}
                 <ChevronDown size={24} className="faq-icon" />
              </div>
              <div className="faq-answer">
                 <p style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

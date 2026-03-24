import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import OpenAI from 'openai';

// Khởi tạo client OpenAI với API tuỳ chỉnh
const openai = new OpenAI({
  apiKey: "sk-4bd27113b7dc78d1-lh6jld-f4f9c69f",
  baseURL: "https://9router.vuhai.io.vn/v1",
  dangerouslyAllowBrowser: true // Cho phép chạy trực tiếp trên Frontend (React)
});

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Xin chào! Tôi là trợ lý ảo AI của Solopreneur. Tôi có thể giúp gì cho dự án của bạn?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Tự động cuộn xuống tin nhắn mới nhất
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    const newMessages = [...messages, { role: 'user', content: userMsg }];
    
    setInput('');
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const completion = await openai.chat.completions.create({
        model: "ces-chatbot-gpt-5.4",
        messages: [
          { 
            role: "system", 
            content: "Bạn là một trợ lý ảo tư vấn công nghệ AI và Tự động hóa cho Chủ doanh nghiệp (Solopreneur). Tôn chỉ của bạn là: chuyên nghiệp, thân thiện, ngắn gọn. Hãy giải đáp những thắc mắc của khách hàng, và cuối cùng luôn khuyến khích người dùng để lại thông tin liên hệ." 
          },
          ...newMessages.map(m => ({ role: m.role, content: m.content }))
        ],
        temperature: 0.7,
      });

      setMessages(prev => [...prev, { role: 'assistant', content: completion.choices[0].message.content }]);
    } catch (error) {
      console.error("Lỗi API Chatbot:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: 'Xin lỗi, tôi đang bị gián đoạn kết nối tới máy chủ AI. Bạn vui lòng gửi lại tin nhắn sau hoặc liên hệ trực tiếp nhé!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Nút bật/tắt Chatbot góc dưới bên phải */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--gradient-glow)',
          color: 'white',
          border: 'none',
          boxShadow: '0 8px 30px rgba(139, 92, 246, 0.4)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          transition: 'transform 0.3s ease',
          transform: isOpen ? 'scale(0.9)' : 'scale(1)'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Cửa sổ Chatbot */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '100px',
            right: '24px',
            width: '380px',
            height: '600px',
            maxHeight: '80vh',
            maxWidth: 'calc(100vw - 48px)',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--glass-border)',
            borderRadius: '20px',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            zIndex: 9998,
            animation: 'fadeInUp 0.3s ease forwards'
          }}
        >
          {/* Header */}
          <div style={{ padding: '16px 20px', background: 'var(--glass-bg)', borderBottom: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
              <Bot size={24} />
            </div>
            <div>
              <h3 style={{ fontSize: '1rem', margin: 0 }}>Trợ Lý AI Solopreneur</h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', margin: 0 }}>Online</p>
            </div>
          </div>

          {/* Messages Area */}
          <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start', gap: '8px' }}>
                {msg.role === 'assistant' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '4px' }}>
                    <Bot size={16} />
                  </div>
                )}
                
                <div style={{
                  maxWidth: '75%',
                  padding: '12px 16px',
                  borderRadius: msg.role === 'user' ? '20px 20px 0 20px' : '20px 20px 20px 0',
                  background: msg.role === 'user' ? 'var(--gradient-glow)' : 'var(--glass-bg)',
                  border: msg.role === 'user' ? 'none' : '1px solid var(--glass-border)',
                  color: 'white',
                  fontSize: '0.95rem',
                  lineHeight: 1.5,
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.content}
                </div>
                
                {msg.role === 'user' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(236, 72, 153, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-pink)', flexShrink: 0, marginTop: '4px' }}>
                    <User size={16} />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start', gap: '8px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', flexShrink: 0, marginTop: '4px' }}>
                  <Bot size={16} />
                </div>
                <div style={{ padding: '12px 16px', borderRadius: '20px 20px 20px 0', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span className="typing-dot" style={{ animation: 'blink 1.4s infinite both' }}>.</span>
                  <span className="typing-dot" style={{ animation: 'blink 1.4s infinite both', animationDelay: '0.2s' }}>.</span>
                  <span className="typing-dot" style={{ animation: 'blink 1.4s infinite both', animationDelay: '0.4s' }}>.</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div style={{ padding: '16px', borderTop: '1px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)' }}>
            <form onSubmit={handleSend} style={{ display: 'flex', gap: '12px' }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Hỏi AI bất kỳ điều gì..."
                disabled={isLoading}
                style={{
                  flex: 1,
                  padding: '12px 16px',
                  borderRadius: '99px',
                  border: '1px solid var(--glass-border)',
                  background: 'var(--bg-color)',
                  color: 'white',
                  outline: 'none',
                  fontSize: '0.95rem'
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: (!input.trim() || isLoading) ? 'var(--glass-bg)' : 'var(--accent-cyan)',
                  color: (!input.trim() || isLoading) ? 'var(--text-secondary)' : 'black',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: (!input.trim() || isLoading) ? 'not-allowed' : 'pointer',
                  transition: 'background 0.3s ease'
                }}
              >
                <Send size={20} style={{ marginLeft: '4px' }} />
              </button>
            </form>
          </div>
        </div>
      )}
      
      {/* Adding a simple inline style for the typing animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }
      `}} />
    </>
  );
}

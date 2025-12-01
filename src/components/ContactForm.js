'use client';

import { useState } from 'react';
import { profile } from '@/data/profile';

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState('web');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: profile.email,
        }),
      });

      if (response.ok) {
        setStatus('✅ Pesan berhasil dikirim! Saya akan segera merespons.');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        const error = await response.json();
        setStatus(`❌ Gagal mengirim: ${error.message}`);
      }
    } catch (error) {
      setStatus('❌ Terjadi kesalahan. Silakan coba lagi.');
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleGmailClick = () => {
    const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${profile.email}&su=Hubungi%20Saya&body=Halo%20Moch.%20Farel!%0A%0A`;
    window.open(gmailUrl, '_blank');
  };

  return (
    <div>
      {/* Tab Buttons */}
      <div style={{
        display: 'flex',
        gap: '1rem',
        marginBottom: '2rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        <button
          onClick={() => setActiveTab('web')}
          style={{
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'web' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e0e0e0',
            color: activeTab === 'web' ? 'white' : '#333',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            if (activeTab === 'web') {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab === 'web') {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }
          }}
        >
          📝 Hubungi via Web
        </button>
        <button
          onClick={() => setActiveTab('gmail')}
          style={{
            padding: '0.8rem 2rem',
            borderRadius: '8px',
            border: 'none',
            background: activeTab === 'gmail' ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' : '#e0e0e0',
            color: activeTab === 'gmail' ? 'white' : '#333',
            cursor: 'pointer',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            if (activeTab === 'gmail') {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
            }
          }}
          onMouseLeave={(e) => {
            if (activeTab === 'gmail') {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }
          }}
        >
          📧 Buka Gmail
        </button>
      </div>

      {/* Web Form Tab */}
      {activeTab === 'web' && (
        <form onSubmit={handleSubmit} style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: '600px',
          margin: '0 auto',
          animation: 'fadeIn 0.3s ease-in',
        }}>
          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: '#2c3e50',
            }}>
              Nama Lengkap
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Masukkan nama Anda"
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: '#2c3e50',
            }}>
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="email@example.com"
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: '#2c3e50',
            }}>
              Subjek
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Topik pesan Anda"
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          <div>
            <label style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: '600',
              color: '#2c3e50',
            }}>
              Pesan
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tulis pesan Anda di sini..."
              rows="6"
              style={{
                width: '100%',
                padding: '0.8rem',
                border: '2px solid #e0e0e0',
                borderRadius: '8px',
                fontSize: '1rem',
                fontFamily: 'inherit',
                transition: 'all 0.3s ease',
                boxSizing: 'border-box',
                resize: 'vertical',
              }}
              onFocus={(e) => e.target.style.borderColor = '#667eea'}
              onBlur={(e) => e.target.style.borderColor = '#e0e0e0'}
            />
          </div>

          {status && (
            <div style={{
              padding: '1rem',
              borderRadius: '8px',
              background: status.includes('✅') ? '#d4edda' : '#f8d7da',
              color: status.includes('✅') ? '#155724' : '#721c24',
              border: `1px solid ${status.includes('✅') ? '#c3e6cb' : '#f5c6cb'}`,
              textAlign: 'center',
              fontWeight: '500',
            }}>
              {status}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              padding: '1rem',
              borderRadius: '8px',
              border: 'none',
              background: loading ? '#ccc' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              fontWeight: '600',
              fontSize: '1.1rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.3s ease',
              transform: loading ? 'none' : 'translateY(0)',
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!loading) {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }
            }}
          >
            {loading ? '⏳ Mengirim...' : '✉️ Kirim Pesan'}
          </button>
        </form>
      )}

      {/* Gmail Tab */}
      {activeTab === 'gmail' && (
        <div style={{
          textAlign: 'center',
          maxWidth: '600px',
          margin: '0 auto',
          animation: 'fadeIn 0.3s ease-in',
        }}>
          <div style={{
            background: 'white',
            padding: '2rem',
            borderRadius: '15px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            marginBottom: '2rem',
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📨</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '1rem', fontSize: '1.5rem' }}>
              Hubungi via Gmail
            </h3>
            <p style={{ color: '#666', marginBottom: '2rem', lineHeight: '1.6' }}>
              Buka Gmail secara langsung dan kirim email ke {profile.email}. 
              Ini adalah cara tercepat untuk menghubungi saya!
            </p>
            <button
              onClick={handleGmailClick}
              style={{
                padding: '1rem 2rem',
                borderRadius: '8px',
                border: 'none',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                color: 'white',
                fontWeight: '600',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 20px rgba(102, 126, 234, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              🚀 Buka Gmail Sekarang
            </button>
            <p style={{ color: '#999', fontSize: '0.9rem', marginTop: '2rem' }}>
              Email saya: {profile.email}
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

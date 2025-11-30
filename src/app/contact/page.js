'use client';

import { profile } from '@/data/profile';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>💬 Hubungi Saya</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '1rem auto' }}>
            Saya terbuka untuk peluang kerja sama, diskusi, atau sekadar berbagi informasi tentang teknologi.
            Silakan hubungi saya melalui web form atau langsung via Gmail di bawah ini.
          </p>
        </div>

        {/* Contact Form with 2 options */}
        <div style={{ 
          background: 'white',
          borderRadius: '15px',
          padding: '2rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          marginBottom: '3rem'
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: '#2c3e50' }}>
            ✉️ Hubungi Saya
          </h2>
          <ContactForm />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
          <a
            href={`mailto:${profile.email}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📧</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Email</h3>
            <p style={{ color: '#667eea', fontWeight: '600' }}>{profile.email}</p>
          </a>

          <a
            href={`tel:${profile.phone}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(102, 126, 234, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📱</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Telepon</h3>
            <p style={{ color: '#667eea', fontWeight: '600' }}>{profile.phone}</p>
          </a>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: '2rem',
              background: 'white',
              borderRadius: '15px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              transition: 'all 0.3s ease',
            }}
          >
            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📍</div>
            <h3 style={{ color: '#2c3e50', marginBottom: '0.5rem' }}>Lokasi</h3>
            <p style={{ color: '#667eea', fontWeight: '600' }}>{profile.address}</p>
          </div>
        </div>

        <div style={{ 
          background: 'white',
          borderRadius: '15px',
          padding: '2rem',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <h2>🔗 Sosial Media & Profil</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            <a
              href="https://linkedin.com/in/mocharelislami"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ textAlign: 'center', textDecoration: 'none' }}
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/mocharelislami"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ textAlign: 'center', textDecoration: 'none' }}
            >
              🐙 GitHub
            </a>
            <a
              href="https://instagram.com/mocharelislami"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ textAlign: 'center', textDecoration: 'none' }}
            >
              📷 Instagram
            </a>
            <a
              href="https://twitter.com/mocharelislami"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{ textAlign: 'center', textDecoration: 'none' }}
            >
              𝕏 Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="container" style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' }}>
        <h2>💡 Pesan Untuk Anda</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
          Terima kasih telah mengunjungi portofolio saya! Saya sangat antusias untuk berbicara tentang peluang kerja sama, 
          diskusi teknis, atau sekadar bertukar informasi tentang perkembangan teknologi terkini. Jangan ragu untuk menghubungi saya 
          melalui salah satu channel komunikasi di atas. Saya akan dengan senang hati merespons pertanyaan atau proposal Anda 
          dalam waktu secepatnya.
        </p>
      </div>
    </>
  );
}

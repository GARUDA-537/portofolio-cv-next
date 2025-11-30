'use client';

import { certificates } from '@/data/certificates';

export default function Certificates() {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1>🎖️ Sertifikasi & Penghargaan</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '1rem auto' }}>
            Sertifikasi profesional dan penghargaan yang telah saya raih dalam perjalanan pengembangan karir saya.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '2rem' }}>
          {certificates.map((cert) => (
            <div
              key={cert.id}
              style={{
                background: 'white',
                borderRadius: '15px',
                overflow: 'hidden',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                display: 'grid',
                gridTemplateColumns: 'auto 1fr',
                gap: '2rem',
                padding: '2rem',
              }}
            >
              <div style={{
                width: '150px',
                height: '150px',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                flexShrink: 0,
              }}>
                🏆
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 style={{ margin: 0, color: '#2c3e50' }}>{cert.title}</h3>
                    <span style={{
                      background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                      color: '#667eea',
                      padding: '0.3rem 0.8rem',
                      borderRadius: '20px',
                      fontSize: '0.85rem',
                      fontWeight: '600',
                    }}>
                      {cert.category}
                    </span>
                  </div>

                  <p style={{ color: '#667eea', fontWeight: '600', marginBottom: '0.5rem' }}>
                    Dari: {cert.issuer}
                  </p>

                  <p style={{ color: '#666', marginBottom: '1rem' }}>{cert.description}</p>

                  <div style={{ display: 'flex', gap: '2rem', fontSize: '0.9rem', color: '#666' }}>
                    <div>
                      <strong>Credential ID:</strong> {cert.credential_id}
                    </div>
                    <div>
                      <strong>Dikeluarkan:</strong> {new Date(cert.issue_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}
                    </div>
                    {cert.expiry_date && (
                      <div>
                        <strong>Berlaku Hingga:</strong> {new Date(cert.expiry_date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long' })}
                      </div>
                    )}
                  </div>
                </div>

                {cert.url && (
                  <div style={{ marginTop: '1rem' }}>
                    <a
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'inline-block',
                        padding: '0.6rem 1.5rem',
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        color: 'white',
                        borderRadius: '20px',
                        textDecoration: 'none',
                        fontWeight: '600',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      Verifikasi Sertifikat →
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', textAlign: 'center' }}>
        <h2 style={{ color: 'white', borderBottomColor: 'white' }}>🎯 Target Sertifikasi Selanjutnya</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          Saya terus berkomitmen untuk menambah sertifikasi profesional di bidang:
        </p>
        <ul style={{ listStyle: 'none', padding: '1rem 0', fontSize: '1.05rem', lineHeight: '2' }}>
          <li>✅ Sertifikasi Cloud Lanjutan (AWS Solutions Architect)</li>
          <li>✅ Advanced Security & Ethical Hacking</li>
          <li>✅ Full Stack Development Certification</li>
          <li>✅ DevOps & Container Technology</li>
        </ul>
      </div>
    </>
  );
}

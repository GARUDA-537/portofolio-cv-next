'use client';

import { education } from '@/data/education';
import styles from './page.module.css';

export default function Education() {
  return (
    <>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1>🎓 Riwayat Pendidikan</h1>
          <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '1rem auto' }}>
            Perjalanan akademis saya dalam menuntut ilmu dan mengembangkan keahlian
            di bidang teknologi informasi.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto', padding: '2rem 0' }}>
          {education.map((edu, index) => (
            <div key={index} style={{ 
              padding: '10px 40px', 
              position: 'relative',
              width: index % 2 === 0 ? '50%' : '50%',
              marginLeft: index % 2 === 0 ? '0' : '50%',
              boxSizing: 'border-box'
            }}>
              <div style={{
                padding: '2rem',
                background: 'white',
                position: 'relative',
                borderRadius: '15px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
              }}>
                <span style={{
                  display: 'inline-block',
                  padding: '0.4rem 1.2rem',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  color: 'white',
                  borderRadius: '20px',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                }}>
                  {edu.start_year} - {edu.end_year || 'Sekarang'}
                </span>
                <h2 style={{ fontSize: '1.5rem', color: '#2c3e50', marginBottom: '0.5rem', borderBottom: 'none' }}>
                  {edu.school}
                </h2>
                <div style={{ color: '#667eea', fontWeight: '600', marginBottom: '1rem', fontSize: '1.1rem' }}>
                  {edu.major}
                </div>
                {edu.degree && (
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    <strong>Tingkat:</strong> {edu.degree}<br />
                    Fokus pada pembelajaran infrastruktur jaringan, konfigurasi perangkat keras, 
                    dan pengembangan perangkat lunak dasar.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container" style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' }}>
        <h2>🏆 Pencapaian Akademis</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
            <h3 style={{ color: '#2c3e50', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Praktikum Jaringan</h3>
            <p style={{ color: '#666' }}>Berhasil merancang topologi jaringan kompleks dengan nilai sangat memuaskan.</p>
          </div>

          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
            <h3 style={{ color: '#2c3e50', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Proyek Web</h3>
            <p style={{ color: '#666' }}>Mengembangkan aplikasi web fungsional sebagai tugas akhir semester.</p>
          </div>

          <div style={{ background: 'white', padding: '1.5rem', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
            <h3 style={{ color: '#2c3e50', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Keaktifan</h3>
            <p style={{ color: '#666' }}>Aktif dalam kegiatan ekstrakurikuler berbasis teknologi dan komputer.</p>
          </div>
        </div>
      </div>
    </>
  );
}

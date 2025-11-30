import Link from 'next/link';
import styles from './page.module.css';
import { profile } from '@/data/profile';

export default function Home() {
  return (
    <>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{profile.name}</h1>
        <p className={styles.heroSubtitle}>{profile.title}</p>
        <p className={styles.heroTagline}>{profile.tagline}</p>

        <div className={styles.heroButtons}>
          <Link href="/about" className="btn">Tentang Saya</Link>
          <Link href="/projects" className={styles.btnSecondary}>Lihat Proyek</Link>
          <Link href="/contact" className={styles.btnSecondary}>Hubungi Saya</Link>
        </div>
      </div>

      <div className="container">
        <h2>🎯 Spesialisasi Saya</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🌐</div>
            <h3>Jaringan Komputer</h3>
            <p>Keahlian dalam merancang dan mengonfigurasi jaringan kompleks dengan VLAN, routing statis, dan MikroTik untuk infrastruktur yang aman dan efisien.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>💻</div>
            <h3>Pengembangan Web</h3>
            <p>Pengalaman dalam mengembangkan aplikasi web modern menggunakan PHP, MySQL, HTML, CSS, dan JavaScript dengan fokus pada user experience.</p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.featureIcon}>🔒</div>
            <h3>Keamanan Jaringan</h3>
            <p>Implementasi praktik terbaik dalam keamanan jaringan untuk melindungi data dan sistem dari ancaman cyber.</p>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>📚 Pendidikan</h2>
        <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          <strong>{profile.education}</strong><br />
          Saya sedang menempuh pendidikan di bidang Teknik Komputer dan Jaringan,
          dimana saya mempelajari konsep-konsep fundamental dalam infrastruktur IT,
          jaringan komputer, serta pengembangan aplikasi web.
        </p>
      </div>

      <div className="container" style={{ textAlign: 'center', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
        <h2 style={{ color: 'white', borderBottomColor: 'white' }}>💼 Siap Bekerja Sama?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
          Saya terbuka untuk peluang magang dan pekerjaan di bidang jaringan komputer dan pengembangan web.
        </p>
        <Link href="/contact" className="btn" style={{ background: 'white', color: '#667eea' }}>
          Hubungi Saya Sekarang
        </Link>
      </div>
    </>
  );
}

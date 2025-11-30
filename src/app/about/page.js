import { profile } from '@/data/profile';
import styles from './page.module.css';

export const metadata = {
    title: 'Tentang Saya - Moch. Farel Islami Akbar',
};

export default function About() {
    return (
        <>
            <div className="container">
                <div className={styles.aboutHeader}>
                    <div style={{ width: '200px', height: '200px', margin: '0 auto 1.5rem', borderRadius: '50%', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', color: 'white', boxShadow: '0 8px 20px rgba(102, 126, 234, 0.3)' }}>
                        👨‍💻
                    </div>
                    <h1>{profile.name}</h1>
                    <p style={{ fontSize: '1.3rem', color: '#667eea', fontWeight: '600' }}>
                        {profile.title}
                    </p>
                </div>

                <div className={styles.aboutContent}>
                    <h2>🎓 Tentang Saya</h2>
                    <p>{profile.bio}</p>

                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <strong>📚 Pendidikan</strong>
                            {profile.education}
                        </div>

                        <div className={styles.infoItem}>
                            <strong>🎯 Fokus Keahlian</strong>
                            <span>Jaringan Komputer & Pengembangan Web</span>
                        </div>

                        <div className={styles.infoItem}>
                            <strong>💼 Status</strong>
                            <span>Mencari Peluang Magang & Pekerjaan</span>
                        </div>

                        <div className={styles.infoItem}>
                            <strong>🌟 Spesialisasi</strong>
                            <span>VLAN, MikroTik, Full-Stack Development</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={styles.valuesSection}>
                    <h2>💡 Nilai & Prinsip Kerja</h2>
                    <div className={styles.valuesGrid}>
                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🎯</div>
                            <h3>Fokus pada Detail</h3>
                            <p>Memperhatikan setiap aspek teknis untuk menghasilkan solusi yang berkualitas tinggi</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>📚</div>
                            <h3>Pembelajaran Berkelanjutan</h3>
                            <p>Selalu update dengan teknologi terbaru dan best practices di industri IT</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🤝</div>
                            <h3>Kolaborasi Tim</h3>
                            <p>Bekerja sama dengan baik dalam tim untuk mencapai tujuan bersama</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>⚡</div>
                            <h3>Efisiensi & Produktivitas</h3>
                            <p>Menyelesaikan tugas dengan efisien tanpa mengorbankan kualitas hasil</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>🔒</div>
                            <h3>Keamanan Prioritas</h3>
                            <p>Selalu mempertimbangkan aspek keamanan dalam setiap implementasi</p>
                        </div>

                        <div className={styles.valueCard}>
                            <div className={styles.valueIcon}>💻</div>
                            <h3>Problem Solving</h3>
                            <p>Kemampuan analitis yang kuat untuk menyelesaikan masalah teknis kompleks</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' }}>
                <h2>🚀 Tujuan Karir</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', textAlign: 'justify' }}>
                    Saya berkomitmen untuk mengembangkan karir di bidang teknologi informasi,
                    khususnya dalam infrastruktur jaringan dan pengembangan aplikasi web.
                    Tujuan jangka pendek saya adalah mendapatkan pengalaman praktis melalui
                    program magang atau pekerjaan entry-level di perusahaan yang dapat
                    memberikan kesempatan belajar dan berkembang. Dalam jangka panjang,
                    saya ingin menjadi ahli di bidang network engineering dan full-stack
                    development yang dapat memberikan kontribusi signifikan bagi organisasi
                    dan industri teknologi Indonesia.
                </p>
            </div>
        </>
    );
}

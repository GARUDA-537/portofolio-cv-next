'use client';

import { useState, useEffect } from 'react';
import { skills } from '@/data/skills';
import styles from './page.module.css';

export default function Skills() {
    const [filter, setFilter] = useState('all');
    const [filteredSkills, setFilteredSkills] = useState(skills);

    useEffect(() => {
        if (filter === 'all') {
            setFilteredSkills(skills);
        } else {
            setFilteredSkills(skills.filter(skill => skill.category === filter));
        }
    }, [filter]);

    return (
        <>
            <div className="container">
                <div className={styles.skillsIntro}>
                    <h1>💼 Keahlian Saya</h1>
                    <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '1rem auto' }}>
                        Berikut adalah kumpulan keahlian teknis yang telah saya kuasai
                        melalui pendidikan dan pengalaman praktis di bidang Teknik Komputer dan Jaringan.
                    </p>
                </div>

                <div className={styles.skillsCategories}>
                    {['all', 'Jaringan', 'Frontend', 'Backend', 'Soft Skill'].map((category) => (
                        <button
                            key={category}
                            className={`${styles.categoryBtn} ${filter === category ? styles.categoryBtnActive : ''}`}
                            onClick={() => setFilter(category)}
                        >
                            {category === 'all' ? 'Semua Keahlian' :
                                category === 'Jaringan' ? '🌐 Jaringan' :
                                    category === 'Frontend' ? '🎨 Frontend' :
                                        category === 'Backend' ? '💾 Backend' :
                                            '💪 Soft Skill'}
                        </button>
                    ))}
                </div>

                <div className={styles.skillsGrid}>
                    {filteredSkills.map((skill, index) => (
                        <div key={index} className={styles.skillCard}>
                            <div className={styles.skillHeader}>
                                <div className={styles.skillIcon}>
                                    {skill.icon.startsWith('devicon-') ? (
                                        <i className={skill.icon}></i>
                                    ) : (
                                        skill.icon
                                    )}
                                </div>
                                <div className={styles.skillInfo}>
                                    <h3>{skill.name}</h3>
                                    <span className={styles.skillCategory}>{skill.category}</span>
                                </div>
                            </div>

                            <div className={styles.progressBarContainer}>
                                <div className={styles.progressBar} style={{ width: `${skill.level}%` }}></div>
                            </div>
                            <div className={styles.progressText}>{skill.level}%</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container" style={{ background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)' }}>
                <h2>📈 Komitmen Pengembangan</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                    Saya berkomitmen untuk terus mengembangkan keahlian saya melalui pembelajaran
                    berkelanjutan, praktik langsung, dan mengikuti perkembangan teknologi terkini.
                    Setiap proyek dan tantangan baru adalah kesempatan untuk meningkatkan kemampuan
                    dan memperluas wawasan di bidang teknologi informasi.
                </p>

                <div style={{ marginTop: '2rem', padding: '1.5rem', background: 'white', borderRadius: '10px', borderLeft: '4px solid #667eea' }}>
                    <h3 style={{ color: '#667eea', marginBottom: '1rem' }}>🎯 Target Pembelajaran</h3>
                    <ul style={{ lineHeight: '2', color: '#666', listStylePosition: 'inside' }}>
                        <li>📚 Sertifikasi jaringan (CCNA, MikroTik)</li>
                        <li>💻 Framework modern (Laravel, Vue.js, React)</li>
                        <li>☁️ Cloud Computing (AWS, Azure, GCP)</li>
                        <li>🔒 Cyber Security & Ethical Hacking</li>
                        <li>📱 Mobile App Development</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

import { projects } from '@/data/projects';
import styles from './page.module.css';
import Image from 'next/image';

export const metadata = {
    title: 'Proyek - Moch. Farel Islami Akbar',
};

export default function Projects() {
    return (
        <div className="container">
            <div className={styles.projectsIntro}>
                <h1>🚀 Proyek Saya</h1>
                <p style={{ fontSize: '1.1rem', color: '#666', maxWidth: '700px', margin: '1rem auto' }}>
                    Berikut adalah beberapa proyek yang telah saya kerjakan, mulai dari simulasi jaringan
                    kompleks hingga pengembangan aplikasi web.
                </p>
            </div>

            <div className={styles.projectsGrid}>
                {projects.map((project, index) => (
                    <div key={index} className={styles.projectCard}>
                        <div className={styles.projectImage}>
                            {project.image_path ? (
                                <Image
                                    src={project.image_path}
                                    alt={project.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)', color: '#999', fontSize: '3rem' }}>
                                    📁
                                </div>
                            )}
                        </div>
                        <div className={styles.projectContent}>
                            <h3>{project.title}</h3>
                            <div dangerouslySetInnerHTML={{ __html: project.description }} style={{ color: '#666', fontSize: '0.95rem', marginBottom: '1.5rem', flexGrow: 1 }} />

                            <div className={styles.projectTags}>
                                {project.technology.split(',').map((tech, i) => (
                                    <span key={i} className={styles.tag}>{tech.trim()}</span>
                                ))}
                            </div>

                            {project.url && (
                                <div className={styles.projectLinks}>
                                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={styles.btnSm}>
                                        Lihat Detail
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

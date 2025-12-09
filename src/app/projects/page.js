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

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            padding: '3rem 2rem',
            marginTop: '3rem',
            boxShadow: '0 -2px 20px rgba(0,0,0,0.1)',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    marginBottom: '2rem',
                }}>
                    <div>
                        <h3 style={{ color: '#2c3e50', marginBottom: '1rem' }}>👨‍💻 Moch. Farel Islami Akbar</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>Teknisi Komputer dan Jaringan | Frontend Developer</p>
                    </div>

                    <div>
                        <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Hubungi Saya</h4>
                        <ul style={{ listStyle: 'none', lineHeight: '1.8' }}>
                            <li><a href="mailto:farel@example.com" style={{ color: '#666', textDecoration: 'none' }}>📧 Email</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>💼 LinkedIn</a></li>
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: '#666', textDecoration: 'none' }}>🐙 GitHub</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 style={{ color: '#667eea', marginBottom: '1rem' }}>Teknologi</h4>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>
                            Built with Next.js<br/>
                            Deployed on Vercel<br/>
                            Modern Stack
                        </p>
                    </div>
                </div>

                <div style={{
                    borderTop: '2px solid #f0f0f0',
                    paddingTop: '2rem',
                    textAlign: 'center',
                }}>
                    <p style={{ color: '#666', margin: '0.5rem 0' }}>
                        &copy; {currentYear} Moch. Farel Islami Akbar. All rights reserved.
                    </p>
                    <p style={{ color: '#667eea', fontWeight: 600, margin: 0 }}>Teknisi Komputer dan Jaringan</p>
                </div>
            </div>
        </footer>
    );
}

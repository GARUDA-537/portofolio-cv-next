'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const isActive = (path) => pathname === path ? 'active' : '';

    return (
        <nav>
            <div className="nav-container">
                <Link href="/" className="logo">
                    <span style={{ color: '#667eea' }}>Moch.</span> Farel Islami Akbar
                </Link>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`nav-links ${isOpen ? 'active' : ''}`} id="navLinks">
                    <li><Link href="/" className={isActive('/')}>Beranda</Link></li>
                    <li><Link href="/about" className={isActive('/about')}>Tentang Saya</Link></li>
                    <li><Link href="/skills" className={isActive('/skills')}>Keahlian</Link></li>
                    <li><Link href="/projects" className={isActive('/projects')}>Proyek</Link></li>
                    <li><Link href="/education" className={isActive('/education')}>Pendidikan</Link></li>
                    <li><Link href="/certificates" className={isActive('/certificates')}>Sertifikasi</Link></li>
                    <li><Link href="/contact" className={isActive('/contact')}>Kontak</Link></li>
                </ul>
            </div>
        </nav>
    );
}

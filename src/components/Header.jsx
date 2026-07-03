import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHomepage = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sectionLinks = [
        { label: 'About', id: 'about' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Certifications', id: 'certifications' },
        { label: 'Contact', id: 'contact' },
    ];

    const linkStyle = { fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' };

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
            padding: scrolled ? '1rem 0' : '1.5rem 0'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <a href="/" style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    fontFamily: 'var(--font-heading)'
                }}>
                    ebel_frank
                </a>

                <nav style={{ display: 'flex', gap: '2rem' }}>
                    {sectionLinks.map(({ label, id }) => (
                        <a
                            key={label}
                            href={isHomepage ? `#${id}` : `/#${id}`}
                            className="mono"
                            style={linkStyle}
                        >
                            {label}
                        </a>
                    ))}
                    <Link
                        to="/resume"
                        className="mono"
                        style={linkStyle}
                    >
                        Resume
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React, { useState, useEffect } from 'react';

const SunIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
        <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
        <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
    </svg>
);

const MoonIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(() =>
        typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') || 'dark' : 'dark'
    );

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const sectionLinks = [
        { label: 'About', id: 'about' },
        { label: 'Experience', id: 'experience' },
        { label: 'Projects', id: 'projects' },
        { label: 'Certifications', id: 'certifications' },
        { label: 'Contact', id: 'contact' },
    ];

    const linkStyle = { fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' };

    const themeToggle = (
        <button
            onClick={() => setTheme(t => (t === 'dark' ? 'light' : 'dark'))}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                border: '1px solid var(--border)',
                background: 'none',
                color: 'var(--text-primary)',
                cursor: 'pointer',
                zIndex: 1100,
                flexShrink: 0,
            }}
        >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
    );

    return (
        <header style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            backgroundColor: scrolled ? 'var(--header-bg)' : 'transparent',
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <nav className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
                        {sectionLinks.map(({ label, id }) => (
                            <a
                                key={label}
                                href={`#${id}`}
                                className="mono"
                                style={linkStyle}
                            >
                                {label}
                            </a>
                        ))}
                    </nav>

                    {themeToggle}

                    <button
                        className="mobile-menu-btn"
                        onClick={() => setMenuOpen(open => !open)}
                        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                        style={{
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '5px',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0.5rem',
                            zIndex: 1100,
                        }}
                    >
                        <span style={{
                            width: '22px',
                            height: '2px',
                            backgroundColor: 'var(--text-primary)',
                            transition: 'transform 0.25s ease, opacity 0.25s ease',
                            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
                        }} />
                        <span style={{
                            width: '22px',
                            height: '2px',
                            backgroundColor: 'var(--text-primary)',
                            transition: 'opacity 0.25s ease',
                            opacity: menuOpen ? 0 : 1,
                        }} />
                        <span style={{
                            width: '22px',
                            height: '2px',
                            backgroundColor: 'var(--text-primary)',
                            transition: 'transform 0.25s ease, opacity 0.25s ease',
                            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
                        }} />
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div
                    className="mono"
                    style={{
                        position: 'fixed',
                        inset: 0,
                        top: 0,
                        backgroundColor: 'var(--overlay-bg)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '2.5rem',
                        zIndex: 1050,
                    }}
                >
                    {sectionLinks.map(({ label, id }) => (
                        <a
                            key={label}
                            href={`#${id}`}
                            onClick={() => setMenuOpen(false)}
                            style={{ fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                        >
                            {label}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};

export default Header;

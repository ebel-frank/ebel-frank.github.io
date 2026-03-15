import React, { useState, useEffect } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = ['About', 'Projects', 'Resume', 'Blog', 'Contact'];

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
                    {navItems.map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="mono"
                            style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}
                        >
                            {item}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;

import React, { useState, useEffect, useRef } from 'react';
import resumePdf from '../assets/resume.pdf';

const ResumePage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const timeoutRef = useRef(null);

    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
            setLoading(false);
            setError(true);
        }, 5000);

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handleIframeLoad = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        setLoading(false);
        setError(false);
    };

    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            overflow: 'hidden',
            backgroundColor: 'var(--bg-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {loading && (
                <div style={{
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9rem'
                }}>
                    <span style={{
                        display: 'inline-block',
                        width: '16px',
                        height: '16px',
                        border: '2px solid var(--border)',
                        borderTopColor: 'var(--text-primary)',
                        borderRadius: '50%',
                        animation: 'spin 0.8s linear infinite',
                        marginRight: '0.75rem'
                    }} />
                    Loading resume...
                </div>
            )}

            {error && (
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-sans)'
                }}>
                    <p style={{ fontSize: '0.95rem' }}>
                        Unable to display the PDF inline.
                    </p>
                    <a
                        href={resumePdf}
                        download
                        style={{
                            padding: '0.8rem 1.5rem',
                            border: '1px solid var(--text-primary)',
                            color: 'var(--text-primary)',
                            fontSize: '0.85rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            textDecoration: 'none',
                            transition: 'all 0.3s ease',
                            backgroundColor: 'transparent'
                        }}
                    >
                        Download Resume
                    </a>
                </div>
            )}

            {!error && (
                <iframe
                    src={resumePdf}
                    title="Resume"
                    onLoad={handleIframeLoad}
                    style={{
                        width: '100%',
                        height: '100%',
                        border: 'none',
                        display: loading ? 'none' : 'block'
                    }}
                />
            )}

            <style>{`
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default ResumePage;

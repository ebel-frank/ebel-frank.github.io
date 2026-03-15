import resumePdf from '../assets/resume.pdf';

const Resume = () => {
    return (
        <section id="resume" style={{ padding: '4rem 0' }}>
            <h2 className="section-title">
                <span className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>03.</span> Resume
            </h2>

            <div style={{
                maxWidth: '800px',
                margin: '0 auto',
                textAlign: 'center',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '2rem'
            }}>
                <a
                    href={resumePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mono"
                    style={{
                        padding: '1.2rem 2.5rem',
                        border: '1px solid var(--text-primary)',
                        color: 'var(--text-primary)',
                        fontSize: '1rem',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        transition: 'all 0.3s ease',
                        backgroundColor: 'transparent',
                        textDecoration: 'none',
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.backgroundColor = 'var(--text-primary)';
                        e.currentTarget.style.color = 'var(--bg-primary)';
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                >
                    View Full Resume ↗
                </a>
            </div>
        </section>
    );
};

export default Resume;

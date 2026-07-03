import profileImg from '../assets/profile.jpg';

const About = () => {
    return (
        <section id="about">
            <h2 className="section-title">
                <span className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>01.</span> About
            </h2>

            <div className="about-grid">
                <div style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                    <p style={{ marginBottom: '1.5rem' }}>
                        I am a Cloud & DevOps Engineer with a strong foundation in CI/CD automation, infrastructure as code, and cloud-native systems. I design and maintain pipelines and observability stacks that make software delivery reliable and fast.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Before moving into ops, I spent years shipping production mobile apps — managing <span style={{ color: 'var(--text-primary)' }}>build pipelines, crash monitoring, and multi-platform releases</span> firsthand. That experience gave me a developer-first lens on infrastructure: I know what good DevOps feels like from both sides of the deployment boundary.
                    </p>
                    <p style={{ marginBottom: '1.5rem' }}>
                        Here are a few technologies I’ve been working with recently:
                    </p>
                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '0.5rem',
                        listStyle: 'none',
                    }}>
                        {['Terraform / CloudFormation', 'Docker & Kubernetes', 'Jenkins / GitHub Actions', 'AWS & Multi-Cloud', 'Cloud Security & Cost Optimization', 'AI-Driven Operations (AIOps)'].map(skill => (
                            <li key={skill} className="mono" style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>▹ {skill}</li>
                        ))}
                    </ul>
                </div>

                <div style={{ marginBottom: '2rem', position: 'relative' }}>
                    <div style={{
                        position: 'absolute',
                        top: '15px',
                        left: '15px',
                        width: '100%',
                        height: '100%',
                        border: '2px solid var(--text-primary)',
                        borderRadius: '0.5rem',
                        zIndex: 0
                    }}></div>
                    <img src={profileImg} alt="Frank Ebeledike" style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: '0.5rem',
                        position: 'relative',
                        zIndex: 1
                    }} />
                </div>
            </div>
        </section>
    );
};

export default About;

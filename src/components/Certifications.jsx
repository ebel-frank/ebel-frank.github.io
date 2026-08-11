import awsCert from '../assets/aws-cp-cert.jpg';
import kcnaCert from '../assets/kcna_certificate.jpg';
import Reveal from './Reveal';

const certifications = [
    {
        title: "Kubernetes and Cloud Native Associate (KCNA)",
        issuer: "The Linux Foundation / CNCF",
        date: "July 2026",
        image: kcnaCert,
    },
    {
        title: "AWS Cloud Practitioner Training Certificate",
        issuer: "Amazon Web Services",
        date: "January 2026",
        image: awsCert,
    },
];

const Certifications = () => {
    return (
        <section id="certifications">
            <h2 className="section-title">
                <span className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>04.</span> Certifications
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '3rem',
            }}>
                {certifications.map((cert, index) => (
                    <Reveal
                        key={index}
                        delay={index * 0.15}
                        style={{
                            border: '1px solid var(--border)',
                            borderRadius: '0.5rem',
                            backgroundColor: 'var(--bg-primary)',
                            overflow: 'hidden',
                        }}
                    >
                        <a href={cert.image} target="_blank" rel="noopener noreferrer" style={{
                            display: 'block',
                            aspectRatio: '16/9',
                            backgroundColor: 'var(--bg-secondary)',
                            overflow: 'hidden',
                        }}>
                            <img
                                src={cert.image}
                                alt={cert.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </a>
                        <div style={{ padding: '1.5rem' }}>
                            <h3 style={{ color: 'var(--text-primary)', fontSize: '1.15rem', marginBottom: '0.5rem' }}>
                                {cert.title}
                            </h3>
                            <p className="mono" style={{ marginBottom: '0.25rem' }}>
                                {cert.date}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
                                {cert.issuer}
                            </p>
                            <a
                                href={cert.image}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mono"
                                style={{ fontSize: '0.8rem', textDecoration: 'underline' }}
                            >
                                View Certificate ↗
                            </a>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
};

export default Certifications;

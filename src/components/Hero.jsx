import { TypeAnimation } from 'react-type-animation';
import Reveal from './Reveal';
import BadgeMarquee from './BadgeMarquee';

const Hero = () => {
    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <Reveal>
                <p className="mono" style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontWeight: 600, letterSpacing: '0.05em' }}>Hi, my name is</p>
                <h1 style={{
                    fontSize: 'clamp(3rem, 8vw, 6rem)',
                    lineHeight: 0.9,
                    marginBottom: '1rem',
                    color: 'var(--text-primary)'
                }}>
                    Frank Ebeledike.
                </h1>
                <h2 style={{
                    fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                    lineHeight: 1,
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem',
                    height: '3rem' // Fixed height to prevent layout shift
                }}>
                    <TypeAnimation
                        sequence={[
                            'Cloud & DevOps Engineer',
                            2000,
                            'Software Engineer (Flutter - Kotlin - Swift)',
                            2000,

                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h2>
                <p style={{
                    maxWidth: '600px',
                    fontSize: '1.2rem',
                    color: 'var(--text-secondary)',
                    marginBottom: '3rem'
                }}>
                    I build and automate resilient cloud infrastructure. My background shipping production mobile apps gave me a developer-first perspective on ops — I understand what pipelines, monitoring, and deployments need to feel like from the other side.
                </p>

                <a href="#projects" style={{
                    padding: '1rem 2rem',
                    border: '1px solid var(--text-primary)',
                    width: 'fit-content',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontSize: '0.9rem'
                }}>
                    Check out my work
                </a>

                <BadgeMarquee />
            </Reveal>
        </section>
    );
};

export default Hero;

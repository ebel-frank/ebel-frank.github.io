import React from 'react';

const Contact = () => {
    return (
        <section id="contact" style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
            <h2 className="section-title" style={{ justifyContent: 'center' }}>
                <span className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>05.</span> Contact
            </h2>

            <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1.5rem' }}>Get In Touch</h3>

            <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                I’m currently looking for new opportunities and research-to-product collaborations. Whether you have a question or just want to say hi, I’ll try my best to get back to you!
            </p>

            <a href="mailto:frankcebeledike@gmail.com" style={{
                padding: '1.2rem 2.5rem',
                border: '1px solid var(--text-primary)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                fontSize: '0.9rem',
                display: 'inline-block',
                marginBottom: '4rem'
            }}>
                Say Hello
            </a>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                <a href="https://www.linkedin.com/in/frank-chukwubuikem-ebeledike/" target="_blank" rel="noreferrer" className="mono" style={{ fontSize: '0.8rem' }}>LinkedIn</a>
            </div>
        </section>
    );
};

export default Contact;

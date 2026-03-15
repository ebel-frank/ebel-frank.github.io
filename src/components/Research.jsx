import React from 'react';

const Research = () => {
    return (
        <section id="research" className="section">
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>
                    Research & <span className="gradient-text">Publications</span>
                </h2>

                <div className="glass" style={{
                    padding: '3rem',
                    borderRadius: '1.5rem',
                    textAlign: 'center',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <div style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.5rem',
                        background: 'var(--accent-blue)',
                        borderRadius: '2rem',
                        color: 'white',
                        fontWeight: 600,
                        fontSize: '0.8rem',
                        marginBottom: '1.5rem',
                        textTransform: 'uppercase'
                    }}>
                        Latest Publication
                    </div>
                    <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', lineHeight: 1.3 }}>
                        Build your own closed loop: Graph-based proof of concept in closed loop for autonomous networks
                    </h3>
                    <p style={{ color: 'var(--accent-emerald)', fontWeight: 600, marginBottom: '1.5rem' }}>
                        ITU Journal on Future and Evolving Technologies • Sept 2023
                    </p>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                        Exploring the implementation of graph-based closed-loop systems for realizing autonomous network management, contributing to the evolution of future communication systems.
                    </p>
                    <a href="#" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        color: 'var(--accent-blue)',
                        fontWeight: 700
                    }}>
                        Read Publication <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Research;

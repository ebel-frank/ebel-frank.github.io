import React from 'react';

const posts = [
    {
        title: "The Future of Autonomous Network Management",
        date: "Dec 12, 2025",
        description: "Exploring how closed-loop AI models are redefining 5G core infrastructures."
    },
    {
        title: "Flutter Performance: Beyond 60 FPS",
        date: "Oct 24, 2025",
        description: "Advanced techniques for optimizing rendering and state management in complex mobile apps."
    },
    {
        title: "Graph Theory in Modern Systems Design",
        date: "Aug 05, 2025",
        description: "How applying graph paradigms can solve complex scalability issues in distributed databases."
    }
];

const Blog = () => {
    return (
        <section id="blog">
            <h2 className="section-title">
                <span className="mono" style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>04.</span> Blog
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                {posts.map((post, idx) => (
                    <div key={idx} style={{
                        padding: '2rem',
                        border: '1px solid var(--border)',
                        transition: 'border-color 0.2s ease',
                        cursor: 'pointer'
                    }} onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--text-primary)'}
                        onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                        <div className="mono" style={{ fontSize: '0.7rem', marginBottom: '1rem' }}>{post.date}</div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', lineHeight: 1.3 }}>{post.title}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{post.description}</p>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '4rem' }}>
                <a href="#" className="mono" style={{ fontSize: '0.9rem', textDecoration: 'underline' }}>View all posts ↗</a>
            </div>
        </section>
    );
};

export default Blog;

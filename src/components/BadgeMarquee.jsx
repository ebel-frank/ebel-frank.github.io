const badges = [
    {
        image: '/KCNA_badge.png',
        alt: 'Kubernetes and Cloud Native Associate badge',
        link: 'https://www.credly.com/earner/earned/badge/489e6d17-244b-4a9d-8810-0aa8c0b73867',
    },
    {
        image: '/masl_badge.png',
        alt: 'Microsoft ADC Students League Member badge',
        link: 'https://www.credly.com/earner/earned/badge/690a58d3-fbe0-4510-aa77-8b4a3e015007',
    },
    {
        image: '/kcne_badge.png',
        alt: 'Kubernetes and Cloud Native Essentials badge',
        link: 'https://www.credly.com/earner/earned/badge/5050b34e-9da4-4615-b79b-31fbb5e07829',
    },
];

const track = [...badges, ...badges];

const BadgeMarquee = () => {
    return (
        <div
            style={{
                width: '100%',
                maxWidth: '600px',
                overflow: 'hidden',
                marginTop: '3rem',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            }}
        >
            <div className="badge-marquee-track">
                {track.map((badge, i) => (
                    <a
                        key={i}
                        href={badge.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ flexShrink: 0, margin: '0 1.5rem', display: 'block' }}
                    >
                        <img src={badge.image} alt={badge.alt} style={{ height: '72px', width: 'auto', display: 'block' }} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default BadgeMarquee;

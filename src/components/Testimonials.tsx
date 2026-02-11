import styles from './Testimonials.module.css';

export default function Testimonials() {
    const testimonials = [
        {
            name: 'Mark T.',
            location: 'Brisbane Northside',
            stars: 5,
            text: 'Installed the SAV-20 on our Queenslander and the difference has been incredible. Our upstairs bedrooms are noticeably cooler and the AC doesn\'t run all day anymore.',
        },
        {
            name: 'Sarah & James L.',
            location: 'Gold Coast Hinterland',
            stars: 5,
            text: 'We were sceptical at first but the SolarArk vent has genuinely made our garage workshop usable in summer. Zero cost to run. We wish we\'d done it years ago.',
        },
        {
            name: 'David R.',
            location: 'Ipswich',
            stars: 5,
            text: 'The ArkBreeze team were professional from start to finish. Quick assessment, clear recommendation, and installed in under 2 hours. Our roof space is 25 degrees cooler.',
        },
    ];

    return (
        <section className={`section section-dark ${styles.testimonials}`} id="testimonials">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">What Homeowners Say</span>
                    <h2>Real Results from <span className="text-gradient">Real QLD Homes</span></h2>
                    <p>Don&apos;t take our word for it. Hear from homeowners who&apos;ve made the switch.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((t, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.stars}>
                                {Array.from({ length: t.stars }).map((_, j) => (
                                    <svg key={j} width="18" height="18" viewBox="0 0 18 18" fill="#F5C518" aria-hidden="true">
                                        <path d="M9 1.5l2.12 4.3 4.75.69-3.44 3.35.81 4.73L9 12.34l-4.24 2.23.81-4.73L2.13 6.49l4.75-.69L9 1.5z" />
                                    </svg>
                                ))}
                            </div>
                            <blockquote className={styles.quote}>&ldquo;{t.text}&rdquo;</blockquote>
                            <div className={styles.author}>
                                <div className={styles.avatar}>
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <span className={styles.name}>{t.name}</span>
                                    <span className={styles.location}>{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

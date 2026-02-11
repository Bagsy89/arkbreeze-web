import styles from './Guide.module.css';

export default function Guide() {
    const badges = [
        { icon: '🔧', label: 'Authorised SolarArk Dealer' },
        { icon: '📍', label: 'Local QLD Business' },
        { icon: '🛡️', label: '10-Year Warranty' },
        { icon: '⚡', label: 'Professional Installation' },
    ];

    return (
        <section className={`section section-dark ${styles.guide}`} id="guide">
            <div className="container">
                <div className={styles.layout}>
                    <div className={styles.visual}>
                        <div className={styles.logoMark}>
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" aria-hidden="true">
                                <circle cx="60" cy="60" r="55" stroke="#F5C518" strokeWidth="2" fill="none" opacity="0.3" />
                                <circle cx="60" cy="60" r="40" stroke="#F5C518" strokeWidth="1.5" fill="none" opacity="0.15" />
                                <circle cx="60" cy="60" r="18" fill="#F5C518" opacity="0.15" />
                                <circle cx="60" cy="60" r="10" fill="#F5C518" />
                                <line x1="60" y1="5" x2="60" y2="25" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="60" y1="95" x2="60" y2="115" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="5" y1="60" x2="25" y2="60" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="95" y1="60" x2="115" y2="60" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="17.6" y1="17.6" x2="31.7" y2="31.7" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="88.3" y1="88.3" x2="102.4" y2="102.4" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="17.6" y1="102.4" x2="31.7" y2="88.3" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                                <line x1="88.3" y1="31.7" x2="102.4" y2="17.6" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                            </svg>
                        </div>
                        <div className={styles.badgeGrid}>
                            {badges.map((b, i) => (
                                <div key={i} className={styles.badge}>
                                    <span className={styles.badgeIcon}>{b.icon}</span>
                                    <span className={styles.badgeLabel}>{b.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.text}>
                        <span className="section-label">Your Guide</span>
                        <h2>We Know Queensland Heat. <span className="text-gradient">We Fix It.</span></h2>
                        <p className={styles.empathy}>
                            We live and work right here in South-East Queensland. We know what 38°C days
                            feel like, and we know what a 70°C roof cavity does to your comfort, your bills,
                            and your home.
                        </p>
                        <p className={styles.authority}>
                            As authorised SolarArk dealers, we supply and professionally install Australia&apos;s
                            leading solar-powered roof ventilation systems. Every installation is backed by a
                            10-year warranty and designed specifically for your roof type and home layout.
                        </p>
                        <a href="#contact" className="btn btn-primary">
                            Talk To Us Today
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                <path d="M6 3.5l5.5 5.5L6 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

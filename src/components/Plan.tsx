import styles from './Plan.module.css';

export default function Plan() {
    const steps = [
        {
            num: '01',
            title: 'Request Your Free Assessment',
            description: 'Fill out our quick form with your details. Tell us about your home, roof type, and what you\'re experiencing.',
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <rect x="4" y="2" width="20" height="24" rx="3" stroke="#F5C518" strokeWidth="2" />
                    <path d="M10 9h8M10 14h8M10 19h5" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            num: '02',
            title: 'We Design Your System',
            description: 'Our team assesses your roof size, orientation, and ventilation needs to recommend the perfect SolarArk model and placement.',
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <path d="M14 4l10 8v12H4V12l10-8z" stroke="#F5C518" strokeWidth="2" strokeLinejoin="round" />
                    <rect x="10" y="17" width="8" height="7" stroke="#F5C518" strokeWidth="2" />
                    <path d="M14 4v6" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
        },
        {
            num: '03',
            title: 'Enjoy a Cooler, Healthier Home',
            description: 'We professionally install your solar vent. Then sit back and enjoy lower temperatures, lower bills, and cleaner air.',
            icon: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                    <circle cx="14" cy="14" r="10" stroke="#F5C518" strokeWidth="2" />
                    <path d="M9 14l3 3 7-7" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            ),
        },
    ];

    return (
        <section className={`section section-alt ${styles.plan}`} id="plan">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">The Plan</span>
                    <h2>Getting Started is <span className="text-gradient">Simple</span></h2>
                    <p>Three easy steps to a cooler, more comfortable home. We handle everything.</p>
                </div>

                <div className={styles.steps}>
                    <div className={styles.connector} aria-hidden="true" />
                    {steps.map((step, i) => (
                        <div key={i} className={styles.step}>
                            <div className={styles.stepNum}>{step.num}</div>
                            <div className={styles.stepCard}>
                                <div className={styles.stepIcon}>{step.icon}</div>
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.ctaWrap}>
                    <a href="#contact" className="btn btn-primary btn-lg">
                        Start With Step 1
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

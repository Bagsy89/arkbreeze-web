import styles from './Problem.module.css';

export default function Problem() {
    const problems = [
        {
            icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <path d="M18 4v6M18 26v6M4 18h6M26 18h6M8.3 8.3l4.2 4.2M23.5 23.5l4.2 4.2M8.3 27.7l4.2-4.2M23.5 12.5l4.2-4.2" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="18" cy="18" r="6" fill="#EF4444" opacity="0.2" />
                    <circle cx="18" cy="18" r="3" fill="#EF4444" />
                </svg>
            ),
            title: 'Your Roof Hits 70°C',
            description: 'Queensland roofs trap extreme heat that radiates down into your living spaces, making your home unbearable during summer months.',
            stat: '70°C',
            statLabel: 'Peak roof temperature',
        },
        {
            icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <path d="M18 4v20M12 18l6 6 6-6" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 28h24" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                    <text x="8" y="14" fill="#EF4444" fontSize="10" fontWeight="700">$$$</text>
                </svg>
            ),
            title: 'Energy Bills Through the Roof',
            description: 'Your air conditioner works overtime fighting the heat radiating from your ceiling, consuming energy and driving up electricity costs.',
            stat: '+40%',
            statLabel: 'Higher cooling costs',
        },
        {
            icon: (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                    <circle cx="12" cy="14" r="4" fill="#EF4444" opacity="0.2" />
                    <circle cx="22" cy="18" r="3" fill="#EF4444" opacity="0.15" />
                    <circle cx="16" cy="24" r="5" fill="#EF4444" opacity="0.1" />
                    <circle cx="12" cy="14" r="2" fill="#EF4444" opacity="0.4" />
                    <circle cx="22" cy="18" r="1.5" fill="#EF4444" opacity="0.4" />
                    <circle cx="16" cy="24" r="2.5" fill="#EF4444" opacity="0.4" />
                    <path d="M8 8c4 2 8-1 12 1s6 4 8 2" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                </svg>
            ),
            title: 'Hidden Mould & Condensation',
            description: 'Trapped moisture in your roof cavity breeds mould and mildew, damaging your home structure and compromising your family\'s health.',
            stat: '80%',
            statLabel: 'Of QLD homes affected',
        },
    ];

    return (
        <section className={`section section-alt ${styles.problem}`} id="problem">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">The Problem</span>
                    <h2>Is Your Home <span className="text-gradient">Fighting the Heat?</span></h2>
                    <p>
                        Most Queensland homes are silently suffering from extreme roof cavity temperatures
                        that affect comfort, health, and your wallet.
                    </p>
                </div>

                <div className={styles.grid}>
                    {problems.map((p, i) => (
                        <div key={i} className={`${styles.card} animate-in animate-delay-${i + 1}`}>
                            <div className={styles.iconWrap}>{p.icon}</div>
                            <h3 className={styles.cardTitle}>{p.title}</h3>
                            <p className={styles.cardDesc}>{p.description}</p>
                            <div className={styles.cardStat}>
                                <span className={styles.cardStatNum}>{p.stat}</span>
                                <span className={styles.cardStatLabel}>{p.statLabel}</span>
                            </div>
                        </div>
                    ))}
                </div>

                <p className={styles.hook}>
                    You shouldn&apos;t have to choose between <strong>comfort</strong> and <strong>cost</strong>.
                </p>
            </div>
        </section>
    );
}

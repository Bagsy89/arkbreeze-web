import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            {/* Background effects */}
            <div className={styles.bgGlow} aria-hidden="true" />
            <div className={styles.bgGrid} aria-hidden="true" />

            <div className={`container ${styles.content}`}>
                <div className={styles.badge}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="3" fill="#F5C518" />
                        <circle cx="8" cy="8" r="7" stroke="#F5C518" strokeWidth="1.5" fill="none" opacity="0.3" />
                    </svg>
                    Authorised SolarArk Dealer | QLD
                </div>

                <h1 className={styles.headline}>
                    Beat the Queensland Heat
                    <br />
                    <span className="text-gradient">Without the Power Bill</span>
                </h1>

                <p className={styles.subheadline}>
                    Solar-powered roof ventilation that drops your roof temperature by up to 30&nbsp;°C.
                    Zero running costs. Zero hassle. Professionally installed across SEQ.
                </p>

                <div className={styles.ctas}>
                    <a href="#contact" className="btn btn-primary btn-lg">
                        Get Your Free Assessment
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a href="#products" className="btn btn-secondary btn-lg">
                        View Products
                    </a>
                </div>

                <div className={styles.stats}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>30°C</span>
                        <span className={styles.statLabel}>Roof temp reduction</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>$0</span>
                        <span className={styles.statLabel}>Running costs</span>
                    </div>
                    <div className={styles.statDivider} />
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>10yr</span>
                        <span className={styles.statLabel}>Warranty</span>
                    </div>
                </div>

                {/* Heat comparison visual */}
                <div className={styles.comparison}>
                    <div className={styles.compCard}>
                        <div className={`${styles.compIcon} ${styles.compHot}`}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                                <path d="M16 4v4M16 24v4M4 16h4M24 16h4M7.5 7.5l2.8 2.8M21.7 21.7l2.8 2.8M7.5 24.5l2.8-2.8M21.7 10.3l2.8-2.8" stroke="#EF4444" strokeWidth="2" strokeLinecap="round" />
                                <circle cx="16" cy="16" r="5" fill="#EF4444" opacity="0.3" />
                                <circle cx="16" cy="16" r="3" fill="#EF4444" />
                            </svg>
                        </div>
                        <span className={styles.compTemp}>70°C</span>
                        <span className={styles.compLabel}>Without ventilation</span>
                    </div>
                    <div className={styles.compArrow}>
                        <svg width="40" height="20" viewBox="0 0 40 20" fill="none" aria-hidden="true">
                            <path d="M0 10h32M28 4l8 6-8 6" stroke="#F5C518" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className={styles.compCard}>
                        <div className={`${styles.compIcon} ${styles.compCool}`}>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                                <path d="M16 2v28M4 10l12 6 12-6M4 22l12-6 12 6" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <span className={`${styles.compTemp} ${styles.compTempCool}`}>40°C</span>
                        <span className={styles.compLabel}>With SolarArk</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

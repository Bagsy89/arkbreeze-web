import styles from './Benefits.module.css';

export default function Benefits() {
    const withItems = [
        { icon: '❄️', text: 'Up to 30°C cooler roof space' },
        { icon: '💰', text: '$0 running costs, 100% solar' },
        { icon: '🏠', text: 'No mould, no condensation' },
        { icon: '🤫', text: 'Whisper-quiet brushless motors' },
        { icon: '⚡', text: 'Improved AC efficiency' },
        { icon: '🛡️', text: '10-year panel warranty' },
    ];

    const withoutItems = [
        { icon: '🔥', text: '70°C roof radiating heat down' },
        { icon: '📈', text: 'Sky-high energy bills every summer' },
        { icon: '🦠', text: 'Mould & timber damage risk' },
        { icon: '🔊', text: 'Noisy, ineffective whirlybirds' },
        { icon: '💸', text: 'AC working overtime, burning $$' },
        { icon: '❌', text: 'No warranty, no peace of mind' },
    ];

    return (
        <section className={`section section-alt ${styles.benefits}`} id="benefits">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Success vs Failure</span>
                    <h2>The Difference is <span className="text-gradient">Clear</span></h2>
                    <p>See what life looks like with and without proper roof ventilation.</p>
                </div>

                <div className={styles.grid}>
                    {/* Success column */}
                    <div className={`${styles.column} ${styles.success}`}>
                        <div className={styles.colHeader}>
                            <span className={styles.colIcon}>✅</span>
                            <h3>With ArkBreeze</h3>
                        </div>
                        <ul className={styles.list}>
                            {withItems.map((item, i) => (
                                <li key={i} className={styles.item}>
                                    <span className={styles.itemIcon}>{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Failure column */}
                    <div className={`${styles.column} ${styles.failure}`}>
                        <div className={styles.colHeader}>
                            <span className={styles.colIcon}>⚠️</span>
                            <h3>Without</h3>
                        </div>
                        <ul className={styles.list}>
                            {withoutItems.map((item, i) => (
                                <li key={i} className={styles.item}>
                                    <span className={styles.itemIcon}>{item.icon}</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

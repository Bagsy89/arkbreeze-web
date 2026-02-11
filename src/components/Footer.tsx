import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.left}>
                    <a href="#" className={styles.logo}>
                        <svg width="32" height="32" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                            <circle cx="20" cy="20" r="18" stroke="#F5C518" strokeWidth="2.5" fill="none" />
                            <circle cx="20" cy="20" r="6" fill="#F5C518" />
                            <line x1="20" y1="0" x2="20" y2="8" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="20" y1="32" x2="20" y2="40" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="0" y1="20" x2="8" y2="20" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                            <line x1="32" y1="20" x2="40" y2="20" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                        <span className={styles.logoText}>Ark<span className={styles.logoAccent}>Breeze</span></span>
                    </a>
                    <p className={styles.tagline}>Solar-powered roof ventilation for cooler, healthier QLD homes.</p>
                </div>

                <div className={styles.contact}>
                    <h4>Contact Us</h4>
                    <a href="tel:0414148222" className={styles.contactLink}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" fill="#9CA3AF" />
                        </svg>
                        James - 0414 148 222
                    </a>
                    <a href="https://arkbreeze.com.au" target="_blank" rel="noopener noreferrer" className={styles.contactLink}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                            <circle cx="8" cy="8" r="7" stroke="#9CA3AF" strokeWidth="1.5" />
                            <path d="M1 8h14M8 1c2 2 3 4 3 7s-1 5-3 7c-2-2-3-4-3-7s1-5 3-7z" stroke="#9CA3AF" strokeWidth="1.5" />
                        </svg>
                        arkbreeze.com.au
                    </a>
                </div>

                <div className={styles.dealer}>
                    <div className={styles.dealerBadge}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M10 1l2.245 4.55 5.02.73-3.633 3.54.858 5.003L10 12.635 5.51 14.823l.858-5.003L2.735 6.28l5.02-.73L10 1z" fill="#F5C518" />
                        </svg>
                        Authorised SolarArk Dealer
                    </div>
                    <p className={styles.warranty}>10-Year PV Panel Warranty · 3-Year Motor Warranty</p>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>&copy; {year} ArkBreeze. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

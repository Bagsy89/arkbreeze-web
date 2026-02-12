import styles from './Products.module.css';

export default function Products() {
    const products = [
        {
            model: 'SAV-20T',
            name: 'Tilt Panel',
            tagline: 'For non-north facing roofs',
            wattage: '20W',
            airflow: '2,718 m³/h',
            baseSize: '700mm × 700mm',
            height: 'Up to 250mm',
            panelType: 'Tilt Poly-silicon',
            bestFor: 'East, West & South facing installations',
            popular: false,
            image: '/sav-20t.jpg',
        },
        {
            model: 'SAV-20',
            name: 'Flush Panel',
            tagline: 'For north-facing roofs',
            wattage: '20W',
            airflow: '2,718 m³/h',
            baseSize: '700mm × 700mm',
            height: '220mm',
            panelType: 'Flush Poly-silicon',
            bestFor: 'North facing roofs, sleek and low profile',
            popular: true,
            image: '/sav-20.jpg',
        },
        {
            model: 'SAV-30',
            name: 'The BIG Performer',
            tagline: 'High extraction capacity',
            wattage: '30W',
            airflow: '3,150 m³/h',
            baseSize: '570mm × 570mm',
            height: '215mm',
            panelType: 'Flush Poly-silicon',
            bestFor: 'Large homes, sheds & commercial spaces',
            popular: false,
            image: '/sav-30.jpg',
        },
    ];

    const sharedSpecs = [
        { label: 'Motor', value: 'Brushless DC, 1000rpm' },
        { label: 'Shroud', value: 'Powder coated steel' },
        { label: 'Hardware', value: 'Stainless steel' },
        { label: 'Fan Blade', value: 'Polycarbonate' },
        { label: 'Thermostat', value: 'Auto (24°C cutoff)' },
        { label: 'Panel Warranty', value: '10 years' },
        { label: 'Motor Warranty', value: '3 years' },
        { label: 'Running Cost', value: '$0 forever' },
    ];

    return (
        <section className={`section section-dark ${styles.products}`} id="products">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">Our Products</span>
                    <h2>Find the Right <span className="text-gradient">SolarArk</span> for You</h2>
                    <p>Three models engineered for Australian conditions, each 100% solar-powered with zero running costs.</p>
                </div>

                <div className={styles.grid}>
                    {products.map((p, i) => (
                        <div key={i} className={`${styles.card} ${p.popular ? styles.popular : ''}`}>
                            {p.popular && <div className={styles.popularBadge}>Most Popular</div>}

                            {/* Product photo */}
                            <div className={styles.illustration}>
                                <img
                                    src={p.image}
                                    alt={`SolarArk ${p.model} ${p.name}`}
                                    className={styles.productImage}
                                />
                            </div>

                            <div className={styles.cardHeader}>
                                <span className={styles.model}>{p.model}</span>
                                <h3>{p.name}</h3>
                                <p className={styles.tagline}>{p.tagline}</p>
                            </div>

                            <div className={styles.specs}>
                                <div className={styles.specRow}>
                                    <span className={styles.specLabel}>Solar Panel</span>
                                    <span className={styles.specValue}>{p.wattage} {p.panelType}</span>
                                </div>
                                <div className={styles.specRow}>
                                    <span className={styles.specLabel}>Airflow</span>
                                    <span className={styles.specValue}>{p.airflow}</span>
                                </div>
                                <div className={styles.specRow}>
                                    <span className={styles.specLabel}>Base Size</span>
                                    <span className={styles.specValue}>{p.baseSize}</span>
                                </div>
                                <div className={styles.specRow}>
                                    <span className={styles.specLabel}>Height</span>
                                    <span className={styles.specValue}>{p.height}</span>
                                </div>
                            </div>

                            <p className={styles.bestFor}>
                                <strong>Best for:</strong> {p.bestFor}
                            </p>

                            <a href="#contact" className={`btn ${p.popular ? 'btn-primary' : 'btn-secondary'} ${styles.cardBtn}`}>
                                Get a Quote
                            </a>
                        </div>
                    ))}
                </div>

                {/* Shared specs */}
                <div className={styles.shared}>
                    <h4 className={styles.sharedTitle}>All Models Include</h4>
                    <div className={styles.sharedGrid}>
                        {sharedSpecs.map((s, i) => (
                            <div key={i} className={styles.sharedItem}>
                                <span className={styles.sharedLabel}>{s.label}</span>
                                <span className={styles.sharedValue}>{s.value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
    q: string;
    a: string;
}

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    const faqs: FAQItem[] = [
        {
            q: 'How does a SolarArk solar roof vent work?',
            a: 'SolarArk vents use a rooftop solar panel to power a brushless DC motor that continuously extracts hot air from your roof cavity. As hot air is drawn out, cooler air is drawn in through your eave and soffit vents, keeping your roof space cool naturally with zero electricity costs.',
        },
        {
            q: 'Is it noisy?',
            a: 'Not at all. SolarArk vents use brushless DC motors and polycarbonate fan blades specifically engineered for whisper-quiet operation. You won\'t hear it running, unlike traditional whirlybirds that can rattle in the wind.',
        },
        {
            q: 'What warranty does it come with?',
            a: 'Every SolarArk unit comes with a 10-year warranty on the solar PV panel and a 3-year warranty on the motor. The powder-coated steel shroud and stainless steel hardware are built to withstand harsh Australian conditions.',
        },
        {
            q: 'Do I need eave vents for it to work?',
            a: 'Yes, adequate intake ventilation is important for optimal performance. The SolarArk works by exhausting hot air from the roof cavity, which creates negative pressure that draws cooler replacement air in through your eaves and soffits. During your free assessment, we\'ll check your existing ventilation and recommend any improvements needed.',
        },
        {
            q: 'How many units do I need for my home?',
            a: 'It depends on your roof area. As a guide: up to 111m² = 1× 20W unit, 148–185m² = 1–2× 20W or 1× 30W unit, 223m²+ = 2× 20W or 1–2× 30W units. We\'ll give you a precise recommendation during your free assessment.',
        },
        {
            q: 'Will it work on my roof type?',
            a: 'SolarArk vents are designed with a large, mouldable base that fits tile, metal, and Colorbond roofs. The SAV-20T model has a tilt-adjustable panel that works on any roof orientation, not just north-facing. We handle the installation on all common QLD roof types.',
        },
        {
            q: 'Does it work in winter?',
            a: 'Yes, and it\'s smart about it. Every SolarArk unit includes an automatic thermostat that shuts the fan off when the roof space drops below 24°C. This preserves the warmth in your roof cavity during winter while still preventing condensation build-up on those occasional warm winter days.',
        },
        {
            q: 'How long does installation take?',
            a: 'A typical residential installation takes 1–2 hours per unit. Our professional installers handle everything from cutting the roof opening to waterproof sealing and electrical connection. There\'s no mess and no disruption to your daily routine.',
        },
    ];

    return (
        <section className={`section section-alt ${styles.faq}`} id="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-label">FAQ</span>
                    <h2>Got <span className="text-gradient">Questions?</span></h2>
                    <p>Everything you need to know about solar roof ventilation.</p>
                </div>

                <div className={styles.list}>
                    {faqs.map((faq, i) => (
                        <div key={i} className={`${styles.item} ${open === i ? styles.open : ''}`}>
                            <button
                                className={styles.question}
                                onClick={() => setOpen(open === i ? null : i)}
                                aria-expanded={open === i}
                                id={`faq-q-${i}`}
                                aria-controls={`faq-a-${i}`}
                            >
                                <span>{faq.q}</span>
                                <svg className={styles.chevron} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                    <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <div
                                className={styles.answer}
                                role="region"
                                id={`faq-a-${i}`}
                                aria-labelledby={`faq-q-${i}`}
                            >
                                <p>{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

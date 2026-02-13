'use client';

import { useState, type FormEvent } from 'react';
import styles from './FinalCTA.module.css';

interface FormData {
    name: string;
    email: string;
    phone: string;
    suburb: string;
    roofType: string;
    message: string;
}

export default function FinalCTA() {
    const [form, setForm] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        suburb: '',
        roofType: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const res = await fetch('/api/submit-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', phone: '', suburb: '', roofType: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className={`section section-dark ${styles.cta}`} id="contact">
            <div className={`container ${styles.layout}`}>
                <div className={styles.text}>
                    <span className="section-label">Get Started</span>
                    <h2>Ready for a <span className="text-gradient">Cooler Home?</span></h2>
                    <p className={styles.desc}>
                        Request your free, no-obligation assessment. We&apos;ll recommend the right SolarArk
                        system for your home and provide a fixed-price quote. No surprises.
                    </p>

                    <div className={styles.promises}>
                        <div className={styles.promise}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <circle cx="10" cy="10" r="9" stroke="#22C55E" strokeWidth="1.5" />
                                <path d="M6.5 10l2.5 2.5 5-5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Free assessment, no obligation</span>
                        </div>
                        <div className={styles.promise}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <circle cx="10" cy="10" r="9" stroke="#22C55E" strokeWidth="1.5" />
                                <path d="M6.5 10l2.5 2.5 5-5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Fixed-price quotes, no hidden costs</span>
                        </div>
                        <div className={styles.promise}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <circle cx="10" cy="10" r="9" stroke="#22C55E" strokeWidth="1.5" />
                                <path d="M6.5 10l2.5 2.5 5-5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Professional installation included</span>
                        </div>
                        <div className={styles.promise}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <circle cx="10" cy="10" r="9" stroke="#22C55E" strokeWidth="1.5" />
                                <path d="M6.5 10l2.5 2.5 5-5" stroke="#22C55E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>10-year warranty on every system</span>
                        </div>
                    </div>
                </div>

                <div className={styles.formWrap}>
                    {status === 'success' ? (
                        <div className={styles.successMsg}>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                                <circle cx="24" cy="24" r="22" stroke="#22C55E" strokeWidth="2" />
                                <path d="M14 24l7 7 13-13" stroke="#22C55E" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <h3>Thanks! We&apos;ll Be in Touch</h3>
                            <p>One of our team will contact you within 24 hours to arrange your free assessment.</p>
                            <button className="btn btn-secondary" onClick={() => setStatus('idle')}>
                                Submit Another Enquiry
                            </button>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit} id="lead-form">
                            <h3 className={styles.formTitle}>Get Your Free Assessment</h3>

                            <div className="form-group">
                                <label className="form-label" htmlFor="name">Full Name *</label>
                                <input
                                    className="form-input"
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Smith"
                                    autoComplete="name"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="email">Email *</label>
                                <input
                                    className="form-input"
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    autoComplete="email"
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="phone">Phone *</label>
                                <input
                                    className="form-input"
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="0400 000 000"
                                    autoComplete="tel"
                                    pattern="^(?:\+?61\s?4|04)\d{2}[\s]?\d{3}[\s]?\d{3}$"
                                    title="Please enter a valid Australian mobile number (e.g. 0400 000 000)"
                                />
                            </div>

                            <div className={styles.row}>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="suburb">Suburb</label>
                                    <input
                                        className="form-input"
                                        type="text"
                                        id="suburb"
                                        name="suburb"
                                        value={form.suburb}
                                        onChange={handleChange}
                                        placeholder="e.g. Springfield"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" htmlFor="roofType">Roof Type</label>
                                    <select
                                        className="form-select"
                                        id="roofType"
                                        name="roofType"
                                        value={form.roofType}
                                        onChange={handleChange}
                                    >
                                        <option value="">Select...</option>
                                        <option value="Tile">Tile</option>
                                        <option value="Colorbond">Colorbond / Metal</option>
                                        <option value="Corrugated">Corrugated Iron</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="message">Message (optional)</label>
                                <textarea
                                    className="form-textarea"
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell us about your home or what you're experiencing..."
                                    rows={3}
                                />
                            </div>

                            <button
                                type="submit"
                                className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Sending...' : 'Request Free Assessment'}
                            </button>

                            {status === 'error' && (
                                <p className={styles.errorMsg}>
                                    Something went wrong. Please try again or call James on <strong>0414 148 222</strong>.
                                </p>
                            )}

                            <p className={styles.privacy}>
                                Or call James directly on <a href="tel:0414148222" className="text-white hover:text-primary transition-colors">0414 148 222</a>
                            </p>
                            <p className={styles.privacy}>
                                🔒 Your details are safe. We&apos;ll only use them to arrange your assessment.
                            </p>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

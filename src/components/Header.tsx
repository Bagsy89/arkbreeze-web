'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <a href="#" className={styles.logo} aria-label="SolAir Solutions home">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="20" cy="20" r="18" stroke="#F5C518" strokeWidth="2.5" fill="none" />
            <circle cx="20" cy="20" r="6" fill="#F5C518" />
            <line x1="20" y1="0" x2="20" y2="8" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="20" y1="32" x2="20" y2="40" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="0" y1="20" x2="8" y2="20" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="32" y1="20" x2="40" y2="20" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="5.86" y1="5.86" x2="11.51" y2="11.51" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="28.49" y1="28.49" x2="34.14" y2="34.14" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="5.86" y1="34.14" x2="11.51" y2="28.49" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="28.49" y1="11.51" x2="34.14" y2="5.86" stroke="#F5C518" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
          <span className={styles.logoText}>
            Ark<span className={styles.logoAccent}>Breeze</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          <button className={styles.navLink} onClick={() => scrollTo('problem')}>Why Solar Vents</button>
          <button className={styles.navLink} onClick={() => scrollTo('plan')}>How It Works</button>
          <button className={styles.navLink} onClick={() => scrollTo('products')}>Products</button>
          <button className={styles.navLink} onClick={() => scrollTo('faq')}>FAQ</button>
        </nav>

        {/* CTA */}
        <button className={`btn btn-primary btn-sm ${styles.ctaBtn}`} onClick={() => scrollTo('contact')}>
          Get Free Assessment
        </button>

        {/* Mobile Toggle */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.mobileLink} onClick={() => scrollTo('problem')}>Why Solar Vents</button>
          <button className={styles.mobileLink} onClick={() => scrollTo('plan')}>How It Works</button>
          <button className={styles.mobileLink} onClick={() => scrollTo('products')}>Products</button>
          <button className={styles.mobileLink} onClick={() => scrollTo('faq')}>FAQ</button>
          <button className={`btn btn-primary ${styles.mobileCta}`} onClick={() => scrollTo('contact')}>
            Get Free Assessment
          </button>
        </div>
      )}
    </header>
  );
}

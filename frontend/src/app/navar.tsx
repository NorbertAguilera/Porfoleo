'use client';

import { useState } from 'react';
import { useLanguage } from './context/LanguageContext';
import LanguageSwitcher from './components/LanguageSwitcher';
import './navbar.css';
import Link from 'next/link';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo/Brand */}
                <div className="navbar-brand">
                    <Link href="./" className="brand-text"><span >{t.navbar.brand}</span></Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                {/* Navigation Links */}
                <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <Link href="./" className="nav-link">{t.navbar.home}</Link>
                    <Link href="/about" className="nav-link">{t.navbar.about}</Link>
                    <Link href="/projects" className="nav-link">{t.navbar.projects}</Link>
                    <Link href="/skills" className="nav-link">{t.navbar.skills}</Link>
                    <Link href="/contact" className="nav-link contact-button">{t.navbar.contact}</Link>
                    <LanguageSwitcher />
                </div>
            </div>
        </nav>
    );
}

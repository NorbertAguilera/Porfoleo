'use client';

import { useLanguage } from './context/LanguageContext';
import './footer.css';
import { FaGithub } from 'react-icons/fa';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} {t.navbar.brand}</p>
                <div className="social-links">
                    <a
                        href="https://github.com/NorbertAguilera"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                    >
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}

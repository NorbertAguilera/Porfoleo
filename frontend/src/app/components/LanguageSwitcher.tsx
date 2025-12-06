'use client';

import { useLanguage } from '../context/LanguageContext';
import { Language } from '../locales/translations';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: 'es', label: 'Español', flag: '' },
        { code: 'en', label: 'English', flag: '' },
        { code: 'ca', label: 'Català', flag: '' },
    ];

    return (
        <div className="language-switcher">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    className={`lang-button ${language === lang.code ? 'active' : ''}`}
                    onClick={() => setLanguage(lang.code)}
                    title={lang.label}
                >
                    <span className="flag">{lang.flag}</span>
                    <span className="lang-code">{lang.code.toUpperCase()}</span>
                </button>
            ))}
        </div>
    );
}

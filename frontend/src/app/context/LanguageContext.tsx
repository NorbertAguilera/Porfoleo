'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations, Translations } from '../locales/translations';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('es');


    // Cargar el idioma guardado al iniciar
    useEffect(() => {

        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && ['es', 'en', 'ca'].includes(savedLanguage)) {
            setLanguageState(savedLanguage);
        } else {
            // Detectar idioma del navegador
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'es' || browserLang === 'en' || browserLang === 'ca') {
                setLanguageState(browserLang as Language);
            }
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem('language', lang);
    };

    const value: LanguageContextType = {
        language,
        setLanguage,
        t: translations[language],
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}

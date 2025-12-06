'use client';

import { useLanguage } from './../context/LanguageContext';
import '../page.css';

export default function About() {
    const { t } = useLanguage();

    return (
        <main>
            {/* About Section */}

            <section id="about" className="about">
                <h2 className="section-title">{t.about.title}</h2>
                <div className="about-content">
                    <div className="card slide-in-left">
                        <h3>💡 {t.about.title}</h3>
                        <p>{t.about.description}</p>
                    </div>
                </div>
            </section>
            {/* Skills Section */}
        </main>
    );
}

'use client';

import { useLanguage } from './../context/LanguageContext';
import './../page.css';

export default function Home() {
    const { t } = useLanguage();

    return (
        <main>

            <section id="contact" className="contact">
                <h2 className="section-title">{t.contact.title}</h2>
                <div className="contact-content">
                    <form className="contact-form card slide-in-left">
                        <div className="form-group">
                            <label htmlFor="name">{t.contact.name}</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">{t.contact.email}</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">{t.contact.message}</label>
                            <textarea id="message" name="message" rows={5} required></textarea>
                        </div>
                        <button type="submit" className="btn">{t.contact.send}</button>
                    </form>
                </div>
            </section>
        </main>
    );
}

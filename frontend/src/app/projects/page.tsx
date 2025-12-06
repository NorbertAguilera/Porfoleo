'use client';

import { useLanguage } from './../context/LanguageContext';
import './../page.css';

export default function Home() {
    const { t } = useLanguage();

    return (
        <main>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <h2 className="section-title">{t.projects.title}</h2>
                <div className="grid grid-2 slide-in-left">
                    <div className="card project-card">
                        <div className="project-image">📱</div>
                        <h3>Portfolio Website</h3>
                        <p>Un portfolio moderno con Next.js y Django</p>
                        <div className="project-tags">
                            <span className="tag">Next.js</span>
                            <span className="tag">Django</span>
                            <span className="tag">Docker</span>
                        </div>
                        <div className="project-buttons">
                            <a href="#" className="btn">{t.projects.viewProject}</a>
                        </div>
                    </div>
                    <div className="card project-card">
                        <div className="project-image">🚀</div>
                        <h3>Proyecto 2</h3>
                        <p>Descripción del proyecto increíble</p>
                        <div className="project-tags">
                            <span className="tag">React</span>
                            <span className="tag">TypeScript</span>
                            <span className="tag">API</span>
                        </div>
                        <div className="project-buttons">
                            <a href="#" className="btn">{t.projects.viewProject}</a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}

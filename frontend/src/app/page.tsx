'use client';

import { useLanguage } from './context/LanguageContext';
import './page.css';
import Image from 'next/image'

export default function Home() {
  const { t } = useLanguage();

  return (
    <main>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content fade-in">
          <div className="hero-text">
            <Image
              className="hero-image-profile"
              src="/foto_perfil.jpeg"
              width={135}
              height={155}
              alt="Foto de perfil de Norbert"
              priority={true}
            />
            <h1 className="hero-title">
              {t.home.title} <span className="highlight">Norbert</span>
            </h1>
            <h2 className="hero-subtitle">{t.home.subtitle}</h2>
            {/*<p className="hero-description">{t.home.description}</p>*/}
            <div className="hero-buttons">
              <a href="#projects" className="btn">{t.projects.title}</a>
              <a href="#contact" className="btn btn-secondary">{t.contact.title}</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="floating-circle circle-1"></div>
            <div className="floating-circle circle-2"></div>
            <div className="floating-circle circle-3"></div>
            <div className="floating-circle circle-4"></div>
          </div>
        </div>
      </section>


      {/* About Section */}
      {/*
      <section id="about" className="about">
        <h2 className="section-title">{t.about.title}</h2>
        <div className="about-content">
          <div className="card slide-in-left">
            <h3>💡 {t.about.title}</h3>
            <p>{t.about.description}</p>
          </div>
        </div>
      </section>  
*/}
      {/* Skills Section */}
      {/*<section id="skills" className="skills">
        <h2 className="section-title">{t.skills.title}</h2>
        <div className="grid grid-3">
          <div className="card skill-card">
            <div className="skill-icon">🎨</div>
            <h3>{t.skills.frontend}</h3>
            <ul className="skill-list">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>CSS / Tailwind</li>
              <li>HTML5</li>
            </ul>
          </div>
          <div className="card skill-card">
            <div className="skill-icon">⚙️</div>
            <h3>{t.skills.backend}</h3>
            <ul className="skill-list">
              <li>Node.js</li>
              <li>Python / Django</li>
              <li>PostgreSQL</li>
              <li>REST APIs</li>
            </ul>
          </div>
          <div className="card skill-card">
            <div className="skill-icon">🛠️</div>
            <h3>{t.skills.tools}</h3>
            <ul className="skill-list">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>VS Code</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      {/*<section id="projects" className="projects">
        <h2 className="section-title">{t.projects.title}</h2>
        <div className="grid grid-2">
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
      */}

      {/* Contact Section */}
      {/*<section id="contact" className="contact">
        <h2 className="section-title">{t.contact.title}</h2>
        <div className="contact-content">
          <form className="contact-form card">
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
      </section>*/}
    </main>
  );
}

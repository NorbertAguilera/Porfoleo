'use client';

import { useLanguage } from './../context/LanguageContext';
import './../page.css';
import { habilities } from '../locales/done_projects';
import { doneProjects, Project } from '../locales/done_projects';

import { useState } from 'react';

export default function Home() {
    const { t } = useLanguage();
    const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

    // Función para gestionar el clic en una skill
    const handleSkillClick = (skill: string) => {
        // Si clican la misma, la deseleccionamos
        if (selectedSkill && selectedSkill === skill) {
            setSelectedSkill(null);
        } else {
            // Si es una skill nueva, la guardamos en el estado
            setSelectedSkill(skill);
        }
    };

    // Filtrar proyectos que contienen la skill seleccionada
    const filteredProjects = selectedSkill
        ? doneProjects.filter(project =>
            project.technologies.includes(selectedSkill)
        )
        : [];

    return (
        <main>
            {/* Skills Section */}
            <section id="skills" className="skills">
                <h2 className="section-title">{t.skills.title}</h2>
                <div className="grid slide-in-left">
                    <div className='card skill-card'>
                        <p>{t.skills.introduction}</p>

                        <div className="project-tags">
                            {habilities.map((hability) => (
                                <span
                                    className={`tag ${selectedSkill === hability ? 'tag-active' : ''}`}
                                    onClick={() => handleSkillClick(hability)}
                                    key={hability}
                                >
                                    {hability}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="grid slide-in-left">
                        {selectedSkill ? (
                            filteredProjects.length > 0 ? (
                                <div className="grid grid-2">
                                    {filteredProjects.map((project, index) => (
                                        <div className="card project-card" key={index}>
                                            <h3>{t.projectDescriptions[project.descriptionKey]?.name || project.name}</h3>
                                            <p>{t.projectDescriptions[project.descriptionKey]?.description || 'No description available'}</p>
                                            <div className="project-tags">
                                                {project.technologies.map((tech) => (
                                                    <span
                                                        className={`tag ${tech === selectedSkill ? 'tag-active' : ''}`}
                                                        key={tech}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="project-link"
                                                >
                                                    {t.projects.viewProject} →
                                                </a>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="card skill-card">
                                    <p>No hay proyectos con la tecnología <strong>{selectedSkill}</strong> todavía.</p>
                                </div>
                            )
                        ) : (
                            <div className="card skill-card">
                                <p>{t.skills.select_skill}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export const habilities = ['Node.js', 'Python', 'Django', 'PostgreSQL',
    'Git', 'GitHub', 'Docker', 'React', 'Next.js', 'TypeScript', 'CSS',
    'HTML5', 'JavaScript', 'Java', 'C', 'C++', 'MySQL', 'MongoDB', 'flutter',
    'Dart', 'xml', 'json', 'PHP', 'Bootstrap', 'SQL', 'SQLlite']

export interface Project {
    name: string;
    descriptionKey: string;
    technologies: string[];
    image: string;
    link: string;
}
export const doneProjects: Project[] = [
    {
        name: 'CicloBnB',
        descriptionKey: 'ciclobnb',
        technologies: ['Java', 'xml', 'MySQL', 'Android'],
        image: '/images/project1.png',
        link: 'https://github.com/eliasporter/CicloBnBand.git'
    }
]

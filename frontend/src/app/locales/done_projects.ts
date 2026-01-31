export const habilities = ['Node.js', 'Python', 'Django', 'PostgreSQL',
    'Git', 'GitHub', 'Docker', 'React', 'Next.js', 'TypeScript', 'CSS',
    'HTML5', 'JavaScript', 'Java', 'C', 'C++', 'MySQL', 'MongoDB', 'flutter',
    'Dart', 'xml', 'json', 'PHP', 'Bootstrap', 'SQL', 'SQLlite','Android']

export interface Project {
    id: number;
    name: string;
    descriptionKey: string;
    technologies: string[];
    image: string;
    link: string;
}
export const doneProjects: Project[] = [
    {
        id: 1,
        name: 'CicloBnB',
        descriptionKey: 'ciclobnb',
        technologies: ['Java', 'xml', 'MySQL', 'Android'],
        image: '/images/project1.png',
        link: 'https://github.com/eliasporter/CicloBnBand.git'
    },
    {
        id: 2,
        name: 'flutter_anime_app',
        descriptionKey: 'flutter',
        technologies: ['flutter', 'Dart'],
        image: '/images/project1.png',
        link: 'git@github.com:NorbertAguilera/flutter_anime_app.git'
    },
    {
        id: 3,
        name: 'AnimeViewProve',
        descriptionKey: 'flutter',
        technologies: ['Android', 'Java', 'xml'],
        image: '/images/project1.png',
        link: 'git@github.com:NorbertAguilera/flutter_anime_app.git'
    },
    {
        id: 4,
        name: 'Porfoleo',
        descriptionKey: 'flutter',
        technologies: ['Android', 'Java', 'xml'],
        image: '/images/project1.png',
        link: 'git@github.com:NorbertAguilera/flutter_anime_app.git'
    },

]

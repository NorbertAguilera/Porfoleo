export type Language = 'es' | 'en' | 'ca';

export interface Translations {
    navbar: {
        brand: string;
        home: string;
        about: string;
        projects: string;
        skills: string;
        contact: string;
    };
    home: {
        title: string;
        subtitle: string;
        description: string;
    };
    about: {
        title: string;
        description: string;
    };
    projects: {
        title: string;
        viewProject: string;
        sourceCode: string;
    };
    skills: {
        title: string;
        frontend: string;
        backend: string;
        tools: string;
        introduction: string;
        select_skill: string;
    };
    contact: {
        title: string;
        name: string;
        email: string;
        message: string;
        send: string;
        sending: string;
        success: string;
        error: string;
    };
    projectDescriptions: {
        [key: string]: {
            name: string;
            description: string;
        };
    };
}

export const translations: Record<Language, Translations> = {
    es: {
        navbar: {
            brand: 'Mi Portfolio',
            home: 'Inicio',
            about: 'Sobre Mí',
            projects: 'Proyectos',
            skills: 'Habilidades',
            contact: 'Contacto',
        },
        home: {
            title: '¡Hola! Soy',
            subtitle: 'Desarrollador Full Stack',
            description: 'Creando experiencias digitales increíbles',
        },
        about: {
            title: 'Sobre Mí',
            description: 'Soy un desarrollador apasionado por crear soluciones innovadoras',//TODO
        },
        projects: {
            title: 'Mis Proyectos',
            viewProject: 'Ver Proyecto',
            sourceCode: 'Código Fuente',
        },
        skills: {
            title: 'Habilidades',
            frontend: 'Frontend',
            backend: 'Backend',
            tools: 'Herramientas',
            select_skill: 'Selecciona una habilidad',
            introduction: 'En mis años de formación y estudio como desarrollador, he cultivado un conjunto diverso de habilidades en el panorama tecnológico actual. A continuación, presento mis competencias técnicas principales junto con los proyectos realizados en los que he aplicado cada una de ellas, evidenciando mi enfoque práctico y capacidad para entregar soluciones completas.',
        },
        contact: {
            title: 'Contáctame',
            name: 'Nombre',
            email: 'Correo Electrónico',
            message: 'Mensaje',
            send: 'Enviar',
            sending: 'Enviando...',
            success: '¡Mensaje enviado con éxito!',
            error: 'Error al enviar el mensaje',
        },
        projectDescriptions: {
            ciclobnb: {
                name: 'CicloBnB',
                description: 'Aplicación móvil para Android que permite a los usuarios alquilar y publicar bicicletas. Desarrollada con Java, XML y MySQL, incluye sistema de autenticación, gestión de reservas y perfil de usuario.',
            },
            
        },
    },
    en: {
        navbar: {
            brand: 'My Portfolio',
            home: 'Home',
            about: 'About Me',
            projects: 'Projects',
            skills: 'Skills',
            contact: 'Contact',
        },
        home: {
            title: 'Hi! I am',
            subtitle: 'Full Stack Developer',
            description: 'Creating amazing digital experiences',
        },
        about: {
            title: 'About Me',
            description: 'I am a developer passionate about creating innovative solutions',
        },
        projects: {
            title: 'My Projects',
            viewProject: 'View Project',
            sourceCode: 'Source Code',
        },
        skills: {
            title: 'Skills',
            frontend: 'Frontend',
            backend: 'Backend',
            tools: 'Tools',
            introduction: 'Throughout my years of study and training as a developer, I have cultivated a diverse set of skills across the current technology landscape. Below, I present my core technical proficiencies alongside the relevant projects where I have successfully applied each of them, showcasing my practical focus and ability to deliver end-to-end solutions.',
            select_skill: 'Select a skill',
        },
        contact: {
            title: 'Contact Me',
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send',
            sending: 'Sending...',
            success: 'Message sent successfully!',
            error: 'Error sending message',
        },
        projectDescriptions: {
            ciclobnb: {
                name: 'CicloBnB',
                description: 'Android mobile application that allows users to rent and publish bicycles. Developed with Java, XML, and MySQL, it includes authentication system, booking management, and user profile.',
            },
        },
    },
    ca: {
        navbar: {
            brand: 'El Meu Portfolio',
            home: 'Inici',
            about: 'Sobre Mi',
            projects: 'Projectes',
            skills: 'Habilitats',
            contact: 'Contacte',
        },
        home: {
            title: 'Hola! Sóc',
            subtitle: 'Desenvolupador Full Stack',
            description: 'Creant experiències digitals increïbles',
        },
        about: {
            title: 'Sobre Mi',
            description: 'Sóc un desenvolupador apassionat per crear solucions innovadores',
        },
        projects: {
            title: 'Els Meus Projectes',
            viewProject: 'Veure Projecte',
            sourceCode: 'Codi Font',
        },
        skills: {
            title: 'Habilitats',
            frontend: 'Frontend',
            backend: 'Backend',
            tools: 'Eines',
            introduction: 'Durant la meva formació com a desenvolupador Full Stack, he adquirit una base sòlida en una àmplia gamma de tecnologies. A continuació, us presento les meves habilitats tècniques clau i els projectes concrets on he aplicat cadascuna d\'elles, demostrant la capacitat de portar solucions completes de punta a punta.',
            select_skill: 'Selecciona una habilitat',
        },
        contact: {
            title: 'Contacta\'m',
            name: 'Nom',
            email: 'Correu Electrònic',
            message: 'Missatge',
            send: 'Enviar',
            sending: 'Enviant...',
            success: 'Missatge enviat amb èxit!',
            error: 'Error en enviar el missatge',
        },
        projectDescriptions: {
            ciclobnb: {
                name: 'CicloBnB',
                description: 'Aplicació mòbil per a Android que permet als usuaris llogar i publicar bicicletes. Desenvolupada amb Java, XML i MySQL, inclou sistema d\'autenticació, gestió de reserves i perfil d\'usuari.',
            },
        },
    },
};

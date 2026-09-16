const translations = {
    es: {
        nameShort: "Leandro Pignatta",
        navAbout: "Sobre mí",
        navWork: "Trabajo",
        navServices: "Servicios",
        navContact: "Contacto",
        servicesTitle: "Qué puedo hacer",
        servicesTag: "Servicios / soluciones",
        serviceWebTitle: "Desarrollo web",
        serviceWebText: "Sitios institucionales, landing pages y aplicaciones web rápidas, responsive y pensadas para crecer.",
        servicePowerTitle: "Power Platform",
        servicePowerText: "Aplicaciones y automatizaciones con Power Apps, Power Automate, SharePoint y soluciones conectadas.",
        serviceDesignTitle: "Diseño digital",
        serviceDesignText: "Interfaces, identidad visual y piezas gráficas con foco en claridad, consistencia y detalle.",
        processTitle: "Cómo trabajo",
        processTag: "De la idea al resultado",
        step1Title: "Entender",
        step1Text: "Objetivos, usuarios, necesidades y alcance.",
        step2Title: "Diseñar",
        step2Text: "Estructura, experiencia visual y solución técnica.",
        step3Title: "Construir",
        step3Text: "Desarrollo iterativo, integración y validación.",
        step4Title: "Mejorar",
        step4Text: "Ajustes, rendimiento y evolución del producto.",

        heroEyebrow: "Perfil profesional",
        heroPitch: "Diseño y desarrollo interfaces y sistemas digitales: desde sitios y aplicaciones web hasta soluciones de Power Platform, sin perder de vista el detalle visual.",
        metaRole: "Rol",
        metaLocation: "Ubicación",
        metaLocationValue: "Buenos Aires, Argentina",
        metaFocus: "Enfoque",
        metaFocusValue: "Desarrollo web · Power Platform · Diseño gráfico",
        aboutTitle: "Sobre mí",
        aboutTag: "Perfil / competencias",
        aboutP1: "Analista programador senior con foco en Power Platform y desarrollo web. Trabajo tanto en la construcción de aplicaciones y flujos como en la resolución del lado visual de un proyecto, desde interfaces hasta piezas de diseño gráfico.",
        aboutP2: "Este espacio reúne una selección de trabajos propios: proyectos web y piezas de diseño gráfico realizadas en distintos contextos, personales y profesionales.",
        skillWeb: "Desarrollo web",
        skillPlatform: "Power Platform",
        skillDesign: "Diseño gráfico",
        workTitle: "Trabajo seleccionado",
        filterAll: "Todos",
        filterWeb: "Web",
        filterGd: "Diseño gráfico",
        contactTitle: "Hablemos de un proyecto",
        contactPitch: "Disponible para proyectos de desarrollo web, soluciones de Power Platform o piezas de diseño gráfico. Escribime y coordinamos.",
        contactNote: "Disponible para conversar sobre nuevos proyectos, colaboraciones y oportunidades profesionales.",
        footerNote: "Sitio de portfolio"
    },
    en: {
        nameShort: "Leandro Pignatta",
        navAbout: "About",
        navWork: "Work",
        navServices: "Services",
        navContact: "Contact",
        servicesTitle: "What I can do",
        servicesTag: "Services / solutions",
        serviceWebTitle: "Web development",
        serviceWebText: "Institutional sites, landing pages and web applications built to be fast, responsive and scalable.",
        servicePowerTitle: "Power Platform",
        servicePowerText: "Apps and automations with Power Apps, Power Automate, SharePoint and connected solutions.",
        serviceDesignTitle: "Digital design",
        serviceDesignText: "Interfaces, visual identities and graphic pieces focused on clarity, consistency and detail.",
        processTitle: "How I work",
        processTag: "From idea to result",
        step1Title: "Understand",
        step1Text: "Goals, users, needs and scope.",
        step2Title: "Design",
        step2Text: "Structure, visual experience and technical solution.",
        step3Title: "Build",
        step3Text: "Iterative development, integration and validation.",
        step4Title: "Improve",
        step4Text: "Refinement, performance and product evolution.",

        heroEyebrow: "Professional profile",
        heroPitch: "I design and build digital interfaces and systems: from websites and web apps to Power Platform solutions, without losing sight of visual detail.",
        metaRole: "Role",
        metaLocation: "Location",
        metaLocationValue: "Buenos Aires, Argentina",
        metaFocus: "Focus",
        metaFocusValue: "Web development · Power Platform · Graphic design",
        aboutTitle: "About me",
        aboutTag: "Profile / skills",
        aboutP1: "Senior programmer analyst focused on Power Platform and web development. I work both on building applications and workflows and on the visual side of a project, from interfaces to graphic design pieces.",
        aboutP2: "This space gathers a selection of my own work: web projects and graphic design pieces made in different contexts, personal and professional.",
        skillWeb: "Web development",
        skillPlatform: "Power Platform",
        skillDesign: "Graphic design",
        workTitle: "Selected work",
        filterAll: "All",
        filterWeb: "Web",
        filterGd: "Graphic design",
        contactTitle: "Let's talk about a project",
        contactPitch: "Available for web development projects, Power Platform solutions or graphic design pieces. Get in touch and we'll set up a time.",
        contactNote: "Available to discuss new projects, collaborations, and professional opportunities.",
        footerNote: "Portfolio site"
    }
};

const projects = [
    {
        id: 1, cat: "web", thumb: "thumb-web-1", ref: "WEB-2021-01",
        title: { es: "Project Vanguard Sitio Web", en: "Project Vanguard Web Page" },
        desc: { es: "Project Vanguard es un juego que hice en Unity a modo de aprendizaje.", en: "Project Vanguard is a game I made in Unity as a learning experience." },
        tags: ["Unity", "C#", "Assests"],
        url: "https://pigi86.github.io/ProjectVanguardWeb/"
    },
    {
        id: 2, cat: "web", thumb: "thumb-web-2", ref: "WEB-2026-03",
        title: { es: "Plastyvial SRL Sitio Web", en: "Plastyvial SRL Web Page" },
        desc: { es: "Tienda online desarrollada con React y Node.js, con panel de administración propio.", en: "Online store built with React and Node.js, with a custom admin panel." },
        tags: ["HTML", "JavaScript", "CSS"],
        url: "https://pigi86.github.io/PlastyvialSRL/"
    },
    {
        id: 3, cat: "web", thumb: "thumb-web-3", ref: "WEB-2026-07",
        title: { es: "Argentair Sitio Web", en: "Argentair Web Page" },
        desc: { es: "Sitio corporativo a medida sobre WordPress, con foco en velocidad de carga y accesibilidad.", en: "Custom corporate site built on WordPress, focused on load speed and accessibility." },
        tags: ["HTML", "JavaScript", "CSS"],
        url: "https://pigi86.github.io/Argentair/"
    },
    {
        id: 4, cat: "gd", thumb: "thumb-gd-1", ref: "GD-2026-09",
        title: { es: "El Tiempo Geológico", en: "Brand identit" },
        desc: { es: "Donde el tiempo geológico se encuentra con el pulso del mañana. Un fragmento de eternidad petrificado en pirita y cristal, ahora convertido en la brújula que traza un rumbo a través de los océanos del tiempo y el espacio profundo. De la materia prima a la proyección de la luz, el tiempo no es solo medida; es la esencia de lo que fuimos y seremos. El viaje comienza en la muñeca.", en: "Complete brand system: logomark, palette and applications for a design studio." },
        tags: ["Adobe Fireworks", "Illustrator"],
        imgUrl: "https://instagram.faep28-2.fna.fbcdn.net/v/t51.82787-15/803323368_18615402526057387_5107416572513340125_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzk4MzQxNDIzOTA5NjYyMTg1MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuNTY0LnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=ycv4xnGE_b0Q7kNvwGHnKAq&_nc_oc=Adp2Q2GC3WYT62enMFB5Glj9ViKe2RCxkmOzrR74pA7ZJ1zvBwtC_WcYhHSpYr7_ZOIEVgLG7FsSIRLNL4k87XhF&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.faep28-2.fna&_nc_gid=4teCmyDxcNRLRQrteSITWQ&_nc_ss=7a22e&oh=00_AQIqqDs95AxZIM6ZyCvwdAnHCs6F-VuUP24YoHaq_l2N8w&oe=6AAF8D86"
    },
    {
        id: 5, cat: "gd", thumb: "thumb-gd-2", ref: "GD-2026-06",
        title: { es: "Construyendo el Futuro", en: "Icon system" },
        desc: { es: "Entre datos, estrellas y posibilidades infinitas. Construyendo el futuro una línea de código, una idea y un desafío a la vez.", en: "Set of 48 consistent icons for an internal management platform." },
        tags: ["Photoshop", "Adobe Fireworks"],
        imgUrl: "https://instagram.faep28-1.fna.fbcdn.net/v/t51.82787-15/723238858_18588151651057387_7384351274187935941_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzkyMTkwMTczODk5OTUzMDI2Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTEyMi5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Cx-cL6XuHlsQ7kNvwGTCUjF&_nc_oc=Ado4YFwoatR6dx711FYpRzA-PcFwlaJL3Jbx-x5yxDToYj_lC-AuN7slCIP55kV5wtGv-PVQOKIYnfaawB3DiqLt&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.faep28-1.fna&_nc_gid=4teCmyDxcNRLRQrteSITWQ&_nc_ss=7a22e&oh=00_AQIorZsswlUNNULrzOV7R0rUIor7m1eJFfjtg6OcOwC6oA&oe=6AAF62CE"
    },
    {
        id: 6, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2026-01",
        title: { es: "Imagen IA", en: "IA Image" },
        desc: { es: "Imagen generada usando IA.", en: "Image generated using IA." },
        tags: ["Adobe Fireworks", "IA"],
        imgUrl: "https://instagram.faep28-1.fna.fbcdn.net/v/t51.82787-15/624653321_18547071205057387_6744616536308423277_n.webp?_nc_cat=100&ig_cache_key=MzgyMjI3OTg3OTY0ODQyNjQ5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=iA2EJ-J1w4wQ7kNvwEBBZOb&_nc_oc=Adov18_mFvlaubR4F4SIPLMnoMf0BxyMjCdqMjlYQ0L_3sqVuWyCTnRdyKE-FH46mygyYUQuhvpRoGaSIA06EurD&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.faep28-1.fna&_nc_gid=4teCmyDxcNRLRQrteSITWQ&_nc_ss=7a22e&oh=00_AQKsqQ9LTYMyDV2QkwpTF_XWUQO2aIeoxx98RQbWQdXKAQ&oe=6AAF850F"
    }
];

let currentLang = 'es';
let currentFilter = 'all';

function renderCards() {
    const container = document.getElementById('cards');
    container.innerHTML = '';
    projects
        .filter(p => currentFilter === 'all' || p.cat === currentFilter)
        .forEach(p => {
            if (p.url != null) {                
                const card = document.createElement('div');
                card.className = 'card ticked';               
                card.innerHTML = `<a href="${p.url}" target="_blank">
    <div class="card-thumb" style="background-image:url('${p.url}');background-size: cover;">
        <span class="card-ref mono">${p.ref}</span>
    </div>
    <h3>${p.title[currentLang]}</h3>
    <p>${p.desc[currentLang]}</p><br>
    <div class="card-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div></a>
    `;                
                container.appendChild(card);
            }
            else {                
                const card = document.createElement('div');
                card.className = 'card ticked';
                card.innerHTML = `    
    <div class="card-thumb" style="background-image:url('${p.imgUrl}');background-size: cover;">
        <span class="card-ref mono">${p.ref}</span>
    </div>
    <h3>${p.title[currentLang]}</h3>
    <p>${p.desc[currentLang]}</p>
    <div class="card-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    `;                
                container.appendChild(card);
            }
        });
}

function setFilter(filter, btn) {
    currentFilter = filter;
    document.querySelectorAll('.work-toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards();
}

function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.getElementById('btn-es').classList.toggle('active', lang === 'es');
    document.getElementById('btn-en').classList.toggle('active', lang === 'en');
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.textContent = translations[lang][key];
        }
    });
    renderCards();
}

renderCards();

(function () {
    const intro = document.getElementById('intro');
    if (!intro) return;

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let seen = null;
    try { seen = sessionStorage.getItem('lp-intro-seen'); } catch (err) { /* storage no disponible */ }

    if (reduced || seen) {
        intro.remove();
        return;
    }

    document.documentElement.classList.add('intro-lock');
    let done = false;

    function finish() {
        if (done) return;
        done = true;
        intro.classList.add('intro-done');
        document.documentElement.classList.remove('intro-lock');
        try { sessionStorage.setItem('lp-intro-seen', '1'); } catch (err) { /* storage no disponible */ }
        window.setTimeout(function () { intro.remove(); }, 1200);
    }

    const AUTO_DISMISS_MS = 2000;
    const timer = window.setTimeout(finish, AUTO_DISMISS_MS);

    // Cualquier intento de interactuar salta directo al sitio
    ['click', 'touchstart', 'keydown', 'wheel'].forEach(function (evt) {
        window.addEventListener(evt, function onSkip() {
            window.clearTimeout(timer);
            finish();
        }, { once: true, passive: true });
    });
})();

if (typeof emailjs !== 'undefined') {
    emailjs.init("S9WsrwTxTRrOPivcb");
}

const translations = {
    es: {
        introShort: "Desarrollo & Power Platform",
        introShort2: "Desarrollo web · Power Platform · Diseño",
        introShort3: "DISEÑO",
        nameShort: "Leandro Pignatta",
        navAbout: "Sobre mí",
        navWork: "Trabajo",
        navServices: "Servicios",
        navFlow: "Proceso",
        navContact: "Contacto",
        strip1: "Desarrollo & interfaces",
        strip2: "Apps & automatización",
        strip3: "Aplicaciones & backend",
        strip4: "Datos & soluciones",
        techStack: "Tecnologías",
        workCta1: "Una selección de proyectos donde combino desarrollo, automatización y diseño para resolver necesidades concretas.",
        workCta2: "¿Tenés un proyecto?",
        servicesTitle: "Qué puedo hacer",
        servicesTag: "Servicios / soluciones",
        serviceWebTitle: "Desarrollo web",
        serviceWebText: "Sitios institucionales, landing pages y aplicaciones web rápidas, responsive y pensadas para crecer.",
        servicePowerTitle: "Power Platform",
        servicePowerText: "Aplicaciones y automatizaciones con Power Apps, Power Automate, SharePoint y soluciones conectadas.",
        serviceDesignTitle: "Diseño Gráfico",
        serviceDesignText: "Interfaces, identidad visual y piezas gráficas con foco en claridad, consistencia y detalle.",
        serviceCSharpTitle: "C#",
        serviceCSharpText: "Desarrollo de aplicaciones backend y servicios con C#.",
        serviceSqlTitle: "SQL Server",
        serviceSqlText: "Modelado de datos, consultas y optimización en SQL Server.",
        serviceAiTitle: "Inteligencia Artificial",
        serviceAiText: "Integración de modelos y soluciones de IA para proyectos.",
        serviceMore: "Ver detalle",
        serviceIncludes: "Qué incluye",
        serviceTools: "Herramientas",
        serviceCta: "Consultar por este servicio",
        serviceClose: "Cerrar",
        processIncludes: "Qué hacemos en esta etapa",
        processDeliver: "Qué obtenés",
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
        contactTitle2: "01 / Contacto",
        formName: "Nombre *",
        formCompany: "Empresa *",
        formEmail: "Email *",
        formPhone: "Teléfono",
        formMessage: "Mensaje *",
        formSubmit: "Enviar mensaje",
        formTitle: "Enviame un mensaje",
        formNameError: "Ingrese su Nombre Completo",
        formCompanyError: "Ingrese su Empresa",
        formEmailError: "Ingrese su Email",
        formMessageError: "Ingrese su Mensaje",
        formInputEmail: "info@empresa.com",
        formInputName: "Su Nombre",
        formInputCompany: "Su Companía",
        fDesc: "He recibido tu mensaje! Me comunicaré contigo a la brevedad.",

        heroEyebrow: "Perfil profesional",
        heroPitch: "Diseño y desarrollo interfaces y sistemas digitales: desde sitios y aplicaciones web hasta soluciones de Power Platform, sin perder de vista el detalle visual.",
        metaRole: "Rol",
        metaRoles: "Analista Programador Senior — Desarrollador Senior en Power Platform",
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
        footerNote: "Sitio de portfolio",
        footerNote2: "© " + new Date().getFullYear() + " Leandro Carlos Pignatta - Todos Los Derechos Reservados",
        skipToContent: "Saltar al contenido",
        themeToggleAria: "Cambiar a tema claro",
        themeToggleAriaLight: "Cambiar a tema oscuro",
        heroCtaContact: "Hablemos de un proyecto",
        heroCtaCvLabel: "Descargar CV",
        statProjects: "Proyectos publicados",
        statAreas: "Áreas de especialización",
        statLangs: "Idiomas del sitio",
        fSending: "Enviando...",
        fError: "No se pudo enviar el mensaje. Probá de nuevo o escribime por mail.",
        cookieText: "Este sitio usa fuentes y recursos de terceros (Google Fonts, Font Awesome) y guarda tu preferencia de tema en el almacenamiento local de tu navegador. No se usan cookies de seguimiento ni analítica activa.",
        cookieAccept: "Entendido",
        pagPrev: "Anterior",
        pagNext: "Siguiente",
        pagPage: "Página"
    },
    en: {
        introShort: "Development & Power Platform",
        introShort2: "Web Development · Power Platform · Design",
        introShort3: "DESIGN",
        nameShort: "Leandro Pignatta",
        navAbout: "About",
        navWork: "Work",
        navFlow: "Workflow",
        navServices: "Services",
        navContact: "Contact",
        strip1: "Development and interfaces",
        strip2: "Apps & automation",
        strip3: "Applications  & backend",
        strip4: "Data and solutions",
        techStack: "Technologies",
        workCta1: "A selection of projects where I combine development, automation, and design to address specific needs.",
        workCta2: "Do you have a project?",
        servicesTitle: "What I can do",
        servicesTag: "Services / solutions",
        serviceWebTitle: "Web development",
        serviceWebText: "Institutional sites, landing pages and web applications built to be fast, responsive and scalable.",
        servicePowerTitle: "Power Platform",
        servicePowerText: "Apps and automations with Power Apps, Power Automate, SharePoint and connected solutions.",
        serviceDesignTitle: "Graphic Design",
        serviceDesignText: "Interfaces, visual identities and graphic pieces focused on clarity, consistency and detail.",
        serviceCSharpTitle: "C#",
        serviceCSharpText: "Backend applications and services development with C#.",
        serviceSqlTitle: "SQL Server",
        serviceSqlText: "Data modeling, queries and optimization in SQL Server.",
        serviceAiTitle: "Artificial Intelligence",
        serviceAiText: "Integration of models and AI solutions into projects.",
        serviceMore: "View details",
        serviceIncludes: "What's included",
        serviceTools: "Tools",
        serviceCta: "Ask about this service",
        serviceClose: "Close",
        processIncludes: "What we do at this stage",
        processDeliver: "What you get",
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
        contactTitle2: "01 / Contact",
        formName: "Fullname *",
        formCompany: "Company *",
        formEmail: "Email *",
        formPhone: "Phone",
        formMessage: "Message *",
        formSubmit: "Send message",
        formTitle: "Send me a message",
        formNameError: "Enter your Fullname",
        formCompanyError: "Enter your Company",
        formEmailError: "Enter your Email",
        formMessageError: "Enter your Message",
        formInputEmail: "info@company.com",
        formInputName: "Your Fullname",
        formInputCompany: "Your Company",
        fDesc: "I have received your message! I will get in touch with you shortly.",

        heroEyebrow: "Professional profile",
        heroPitch: "I design and build digital interfaces and systems: from websites and web apps to Power Platform solutions, without losing sight of visual detail.",
        metaRole: "Role",
        metaRoles: "Senior Programmer Analyst — Power Platform Senior Developer",
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
        footerNote: "Portfolio site",
        footerNote2: "© " + new Date().getFullYear() + " Leandro Carlos Pignatta - All Rights Reserved",
        skipToContent: "Skip to content",
        themeToggleAria: "Switch to light theme",
        themeToggleAriaLight: "Switch to dark theme",
        heroCtaContact: "Let's talk about a project",
        heroCtaCvLabel: "Download CV",
        statProjects: "Published projects",
        statAreas: "Areas of expertise",
        statLangs: "Site languages",
        fSending: "Sending...",
        fError: "Couldn't send the message. Try again or email me directly.",
        cookieText: "This site uses third-party fonts and resources (Google Fonts, Font Awesome) and stores your theme preference in your browser's local storage. No tracking cookies or active analytics are used.",
        cookieAccept: "Got it",
        pagPrev: "Previous",
        pagNext: "Next",
        pagPage: "Page"
    }
};

const projects = [
    {
        id: 1, cat: "web", thumb: "thumb-web-1", ref: "WEB-2021-01",
        title: { es: "Project Vanguard Sitio Web", en: "Project Vanguard Web Page" },
        desc: { es: "Project Vanguard es un juego que hice en Unity a modo de aprendizaje.", en: "Project Vanguard is a game I made in Unity as a learning experience." },
        tags: ["Unity", "C#", "Assests"],
        url: "https://pigi86.github.io/ProjectVanguardWeb/",
        imgUrl: "Images/webpage1.png"
    },
    {
        id: 2, cat: "web", thumb: "thumb-web-2", ref: "WEB-2026-03",
        title: { es: "Plastyvial SRL Sitio Web", en: "Plastyvial SRL Web Page" },
        desc: { es: "Página Web de una empresa especializada en Servicio Técnico de Mantenimiento.", en: "Web Page of a company specializing in Technical Maintenance Service." },
        tags: ["HTML", "JavaScript", "CSS"],
        url: "https://pigi86.github.io/PlastyvialSRL/",
        imgUrl: "Images/webpage2.png"
    },
    {
        id: 3, cat: "web", thumb: "thumb-web-3", ref: "WEB-2026-07",
        title: { es: "Argentair Sitio Web", en: "Argentair Web Page" },
        desc: { es: "Argentair Service Integral repara y mantiene el aire acondicionado y la calefacción de tu auto, nacional o importado, con técnicos mecánicos y electrónicos en un mismo taller.", en: "Argentair Service Integral repairs and maintains the air conditioning and heating of your car, domestic or imported, with mechanical and electronic technicians in the same workshop." },
        tags: ["HTML", "JavaScript", "CSS"],
        url: "https://pigi86.github.io/Argentair/",
        imgUrl: "Images/webpage3.png"
    },
    {
        id: 4, cat: "web", thumb: "thumb-web-3", ref: "WEB-2026-09",
        title: { es: "Amperio Marketplace Sitio Web", en: "Amperio Marketplace Web Page" },
        desc: { es: "Amperio es un marketplace de tecnología moderno y profesional, diseñado para ofrecer una experiencia de compra rápida, clara y atractiva. El sitio presenta un catálogo de productos tecnológicos, con una interfaz visual cuidada, navegación intuitiva y elementos orientados a facilitar la compra.", en: "Amperio is a modern, professional technology marketplace designed to offer a fast, clear, and engaging shopping experience. The site features a catalog of technology products, with a polished visual interface, intuitive navigation, and elements designed to facilitate the purchasing process." },
        tags: ["HTML", "JavaScript", "CSS"],
        url: "https://pigi86.github.io/Marketplace/",
        imgUrl: "Images/webpage4.png"
    },
    {
        id: 5, cat: "gd", thumb: "thumb-gd-1", ref: "GD-2026-09",
        title: { es: "El Tiempo Geológico", en: "Geologic Time" },
        desc: { es: "Donde el tiempo geológico se encuentra con el pulso del mañana. Un fragmento de eternidad petrificado en pirita y cristal, ahora convertido en la brújula que traza un rumbo a través de los océanos del tiempo y el espacio profundo. De la materia prima a la proyección de la luz, el tiempo no es solo medida; es la esencia de lo que fuimos y seremos. El viaje comienza en la muñeca.", en: "Where geological time meets the pulse of tomorrow. A fragment of eternity—petrified in pyrite and crystal—now transformed into a compass charting a course across the oceans of time and deep space. From raw material to the projection of light, time is not merely a measurement; it is the essence of who we were and who we will become. The journey begins on the wrist." },
        tags: ["Adobe Fireworks", "Illustrator", "IA"],
        imgUrl: "Images/galery/803323368_18615402526057387_5107416572513340125_n.jpg"
    },
    {
        id: 6, cat: "gd", thumb: "thumb-gd-2", ref: "GD-2026-06",
        title: { es: "Construyendo el Futuro", en: "Building the Future" },
        desc: { es: "Entre datos, estrellas y posibilidades infinitas. Construyendo el futuro una línea de código, una idea y un desafío a la vez.", en: "Amidst data, stars, and infinite possibilities. Building the future—one line of code, one idea, and one challenge at a time." },
        tags: ["Photoshop", "Adobe Fireworks", "IA"],
        imgUrl: "Images/galery/723238858_18588151651057387_7384351274187935941_n.jpg"
    },
    {
        id: 7, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2026-01",
        title: { es: "La Sombra del Tigre de Plata", en: "The Shadow of the Silver Tiger" },
        desc: { es: "Imponente ilustración de un guerrero antropomórfico con rasgos de tigre blanco y armadura de combate labrada. Sus ojos resplandecen con una intensa energía azul que contrasta con el aura mística de tonos púrpuras que lo rodea, proyectando la figura de un jefe legendario de la fantasía oscura.", en: "A striking illustration of an anthropomorphic warrior with the features of a white tiger and intricately carved battle armor. His eyes glow with an intense blue energy that contrasts with the mystical, purple aura surrounding him, projecting the image of a legendary dark fantasy chieftain." },
        tags: ["Adobe Fireworks", "IA"],
        imgUrl: "Images/galery/Pigi_white_tiger_dark_souls_c2c4fbe2-1bb7-4dec-a34e-504f74f97540 - Copy.jpg"
    },
    {
        id: 8, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2026-03",
        title: { es: "La Historia", en: "The Story" },
        desc: { es: "Cada línea cuenta una historia. Cada idea deja una marca.", en: "Every line tells a story. Every idea leaves a mark." },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/651168257_18561585814057387_8236522324979950329_n.webp"
    },
    {
        id: 9, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2025-04",
        title: { es: "La Identidad", en: "The Identity" },
        desc: { es: "Entre tinta y experiencias, se dibuja la identidad.", en: "Identity takes shape amidst ink and experiences." },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/492042516_18493622977057387_8673969118512317235_n.webp"
    },
    {
        id: 10, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2025-01",
        title: { es: "La Experiencia", en: "The Experience" },
        desc: { es: "La experiencia no se mide por los años, sino por los desafíos que te animaste a enfrentar.", en: "Experience is not measured by years, but by the challenges you dared to face." },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/475783606_18476939866057387_694745016303068710_n.webp"
    },
    {
        id: 11, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2025-10",
        title: { es: "El Guardián del Bit y el Oro", en: "The Guardian of Bit and Gold" },
        desc: { es: "Surgiendo del vacío, este antiguo guardián ha regresado. Fríos ojos azules que todo lo ven. Llamas púrpuras que purgan la sombra.", en: "Emerging from the void, this ancient guardian has returned. Cold blue eyes that see all. Purple flames that purge the shadow." },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/572384413_18529890895057387_2985686607725497839_n.webp"
    },
    {
        id: 12, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2026-02",
        title: { es: "No es solo un dibujo... es papel", en: "It's not just a drawing... it's paper." },
        desc: { es: "Donde la geometría y la textura se encuentran. Esta pieza de arte low-poly cobró vida con cada pliegue de papel meticulosamente diseñado. Desde el moño hasta el reflejo de la puesta de sol en las gafas, es todo un mundo de detalles. ¿Quién más se une al club de los pliegues?", en: "Where geometry and texture meet. This low-poly art piece came to life with every meticulously designed paper fold. From the bow to the sunset reflecting in the glasses, it’s a whole world of detail. Who else is joining the folding club?" },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/640184412_18556927060057387_3678659511849913627_n.webp"
    },
    {
        id: 13, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2019-10",
        title: { es: "Un Cosmos en mis Manos", en: "A Cosmos in My Hands" },
        desc: { es: "Tejiendo estrellas y sosteniendo planetas. ✨ El poder del cosmos está en nuestras manos, si nos atrevemos a mirar más allá de la oscuridad. ¿Cuál es tu rincón favorito del universo?", en: "Weaving stars and holding planets. ✨ The power of the cosmos lies in our hands, if we dare to look beyond the darkness. What is your favorite corner of the universe?" },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/633354222_18389236897159490_5365674072843004945_n.jpg"
    }
];

let currentLang = 'es';
let currentFilter = 'all';
let currentPage = 1;
const CARDS_PER_PAGE = 6;

function renderCards() {
    const container = document.getElementById('cards');
    container.innerHTML = '';

    const filtered = projects.filter(p => currentFilter === 'all' || p.cat === currentFilter);
    const totalPages = Math.max(1, Math.ceil(filtered.length / CARDS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * CARDS_PER_PAGE;
    const pageItems = filtered.slice(start, start + CARDS_PER_PAGE);

    pageItems
        .forEach(p => {
            if (p.url != null) {
                const card = document.createElement('div');
                card.className = 'card ticked';
                card.innerHTML = `<a href="${p.url}" target="_blank" rel="noopener">
    <div class="card-thumb">
        <img src="${p.imgUrl}" alt="${p.title[currentLang]}" loading="lazy" decoding="async" width="400" height="225" />
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
                card.setAttribute('data-cat', p.cat);
                card.setAttribute('data-img', p.imgUrl || '');
                card.innerHTML = `    
    <div class="card-thumb">
        <img src="${p.imgUrl}" alt="${p.title[currentLang]}" loading="lazy" decoding="async" width="400" height="225" />
        <span class="card-ref mono">${p.ref}</span>
    </div>
    <h3>${p.title[currentLang]}</h3>
    <p>${p.desc[currentLang]}</p>
    <div class="card-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
    `;
                // If this is a graphic design item, open modal on click
                if (p.cat === 'gd') {
                    card.addEventListener('click', () => {
                        openGdModal(p.imgUrl, p.title[currentLang], p.desc[currentLang]);
                    });
                }
                container.appendChild(card);
            }
        });

    renderPagination(totalPages);
}

function renderPagination(totalPages) {
    const nav = document.getElementById('cards-pagination');
    if (!nav) return;
    nav.innerHTML = '';

    if (totalPages <= 1) return;

    const t = translations[currentLang];

    function makeButton(label, targetPage, opts) {
        opts = opts || {};
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = label;
        if (opts.current) {
            btn.className = 'active';
            btn.setAttribute('aria-current', 'page');
        }
        btn.disabled = !!opts.disabled;
        btn.addEventListener('click', () => goToPage(targetPage));
        return btn;
    }

    nav.appendChild(makeButton('← ' + t.pagPrev, currentPage - 1, { disabled: currentPage === 1 }));

    for (let i = 1; i <= totalPages; i++) {
        const btn = makeButton(String(i), i, { current: i === currentPage });
        btn.setAttribute('aria-label', t.pagPage + ' ' + i);
        nav.appendChild(btn);
    }

    nav.appendChild(makeButton(t.pagNext + ' →', currentPage + 1, { disabled: currentPage === totalPages }));
}

function goToPage(page) {
    currentPage = page;
    renderCards();
    const section = document.getElementById('trabajo');
    if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function setFilter(filter, btn) {
    currentFilter = filter;
    currentPage = 1;
    document.querySelectorAll('.work-toggle button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderCards();
}

// Back to top button behavior
(function () {
    const backBtn = document.getElementById('back-to-top');
    const firstSection = document.querySelector('section.hero') || document.querySelector('main section');
    if (!backBtn) return;

    function scrollToFirst() {
        if (firstSection) {
            //firstSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    backBtn.addEventListener('click', scrollToFirst);

    function updateVisibility() {
        if (window.scrollY > 220) backBtn.classList.remove('hidden');
        else backBtn.classList.add('hidden');
    }

    window.addEventListener('scroll', updateVisibility, { passive: true });
    // initial state
    updateVisibility();
})();

// Mobile nav (hamburger) behavior
(function () {
    const toggle = document.getElementById('nav-toggle');
    const nav = document.getElementById('site-nav');
    const backdrop = document.getElementById('nav-backdrop');
    if (!toggle || !nav) return;

    function openNav() {
        nav.classList.add('open');
        toggle.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
        if (backdrop) backdrop.classList.add('show');
    }

    function closeNav() {
        nav.classList.remove('open');
        toggle.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        if (backdrop) backdrop.classList.remove('show');
    }

    toggle.addEventListener('click', function () {
        if (nav.classList.contains('open')) closeNav();
        else openNav();
    });

    if (backdrop) backdrop.addEventListener('click', closeNav);

    // Close after tapping a link or the language switch
    nav.querySelectorAll('a.navlink, .langswitch button, #theme-toggle').forEach(el => {
        el.addEventListener('click', closeNav);
    });

    window.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeNav();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 780) closeNav();
    });
})();

// Service detail modal
const serviceDetails = {
    web: {
        num: "01 / WEB",
        titleKey: "serviceWebTitle",
        tools: ["HTML", "CSS", "JavaScript", "React", "Node.js", "WordPress"],
        es: {
            lead: "Diseño y desarrollo sitios y aplicaciones web pensados para verse bien y funcionar rápido en cualquier dispositivo, con una base de código ordenada que se pueda mantener y ampliar con el tiempo.",
            includes: [
                "Sitios institucionales y landing pages a medida.",
                "Aplicaciones web con React y Node.js.",
                "Sitios administrables en WordPress, cuando necesitás editar tu propio contenido.",
                "Diseño responsive, buen rendimiento y estructura pensada para buscadores.",
                "Formularios de contacto, integraciones y publicación del sitio."
            ]
        },
        en: {
            lead: "I design and build websites and web applications that look good and run fast on any device, on a clean codebase that can be maintained and extended over time.",
            includes: [
                "Custom institutional sites and landing pages.",
                "Web applications with React and Node.js.",
                "Editable WordPress sites, when you need to manage your own content.",
                "Responsive design, solid performance and search-friendly structure.",
                "Contact forms, integrations and site deployment."
            ]
        }
    },
    power: {
        num: "02 / POWER",
        titleKey: "servicePowerTitle",
        tools: ["Power Apps", "Power Automate", "SharePoint", "SQL Server"],
        es: {
            lead: "Automatizo procesos y construyo aplicaciones internas sobre Power Platform para que los equipos dejen de depender de planillas, mails y tareas manuales.",
            includes: [
                "Aplicaciones con Power Apps para cargar, aprobar y gestionar información.",
                "Flujos con Power Automate: notificaciones, aprobaciones e integraciones entre sistemas.",
                "Sitios, listas y bibliotecas de SharePoint como repositorio de datos y documentos.",
                "Conexión con SQL Server y otras fuentes de datos.",
                "Acompañamiento en la puesta en marcha y ajustes posteriores."
            ]
        },
        en: {
            lead: "I automate processes and build internal applications on Power Platform so teams can stop relying on spreadsheets, emails and manual tasks.",
            includes: [
                "Power Apps applications to capture, approve and manage information.",
                "Power Automate flows: notifications, approvals and integrations between systems.",
                "SharePoint sites, lists and libraries as a data and document repository.",
                "Connection to SQL Server and other data sources.",
                "Support during rollout and follow-up adjustments."
            ]
        }
    },
    design: {
        num: "03 / DESIGN",
        titleKey: "serviceDesignTitle",
        tools: ["Figma", "Illustrator", "Photoshop", "InDesign", "Fireworks"],
        es: {
            lead: "Resuelvo el lado visual de un proyecto: desde la interfaz de una aplicación hasta la identidad y las piezas gráficas que la acompañan, cuidando la claridad y la consistencia.",
            includes: [
                "Diseño de interfaces y prototipos en Figma.",
                "Identidad visual: logotipos, paleta de color y tipografías.",
                "Piezas gráficas para redes sociales y material impreso.",
                "Maquetación de documentos y publicaciones con InDesign.",
                "Retoque y edición de imágenes con Photoshop e Illustrator."
            ]
        },
        en: {
            lead: "I take care of the visual side of a project: from an application's interface to the identity and graphic pieces that go with it, focused on clarity and consistency.",
            includes: [
                "Interface design and prototypes in Figma.",
                "Visual identity: logos, color palette and typography.",
                "Graphic pieces for social media and print material.",
                "Document and publication layout with InDesign.",
                "Image retouching and editing with Photoshop and Illustrator."
            ]
        }
    },
    csharp: {
        num: "04 / CSHARP",
        titleKey: "serviceCSharpTitle",
        tools: ["C#", ".NET", "SQL Server"],
        es: {
            lead: "Desarrollo la lógica de negocio y los servicios que hay detrás de una aplicación, con C# y .NET, priorizando un código claro y fácil de mantener.",
            includes: [
                "Aplicaciones y servicios backend con C# y .NET.",
                "APIs para conectar aplicaciones web y sistemas existentes.",
                "Acceso a datos y trabajo conjunto con SQL Server.",
                "Mantenimiento y evolución de sistemas que ya están en producción.",
                "Automatización de procesos internos."
            ]
        },
        en: {
            lead: "I build the business logic and services behind an application with C# and .NET, prioritizing clear, maintainable code.",
            includes: [
                "Backend applications and services with C# and .NET.",
                "APIs to connect web applications and existing systems.",
                "Data access and close work with SQL Server.",
                "Maintenance and evolution of systems already in production.",
                "Internal process automation."
            ]
        }
    },
    sql: {
        num: "05 / SQL",
        titleKey: "serviceSqlTitle",
        tools: ["SQL Server", "C#", "Power Platform"],
        es: {
            lead: "Diseño y mejoro la capa de datos: estructuras claras, consultas eficientes y bases que sigan funcionando bien a medida que la información crece.",
            includes: [
                "Modelado de bases de datos: tablas, relaciones y restricciones.",
                "Consultas, vistas y procedimientos almacenados.",
                "Optimización de consultas lentas y diseño de índices.",
                "Extracción de datos y reportes para otras aplicaciones.",
                "Integración con aplicaciones en C# y con Power Platform."
            ]
        },
        en: {
            lead: "I design and improve the data layer: clear structures, efficient queries and databases that keep performing well as the data grows.",
            includes: [
                "Database modeling: tables, relationships and constraints.",
                "Queries, views and stored procedures.",
                "Slow query optimization and index design.",
                "Data extraction and reporting for other applications.",
                "Integration with C# applications and Power Platform."
            ]
        }
    },
    ai: {
        num: "06 / AI",
        titleKey: "serviceAiTitle",
        tools: ["C#", "JavaScript", "Power Automate"],
        es: {
            lead: "Incorporo inteligencia artificial en proyectos concretos, donde aporta valor real: asistentes, análisis de texto y automatización de tareas repetitivas.",
            includes: [
                "Integración de modelos de lenguaje en sitios y aplicaciones.",
                "Asistentes conectados a la información de tu negocio.",
                "Resumen, clasificación y extracción de datos desde texto y documentos.",
                "Automatización de flujos combinando IA con Power Automate.",
                "Evaluación de dónde conviene usar IA y dónde no."
            ]
        },
        en: {
            lead: "I bring artificial intelligence into concrete projects where it adds real value: assistants, text analysis and automation of repetitive tasks.",
            includes: [
                "Integration of language models into websites and applications.",
                "Assistants connected to your business information.",
                "Summarizing, classifying and extracting data from text and documents.",
                "Workflow automation combining AI with Power Automate.",
                "Assessing where AI makes sense and where it doesn't."
            ]
        }
    }
};

const processDetails = {
    understand: {
        titleKey: "step1Title",
        es: {
            num: "Paso 01 / 04",
            lead: "Antes de abrir un editor de código o una herramienta de diseño, me tomo el tiempo de entender qué problema hay que resolver y para quién, así el proyecto arranca con un rumbo claro.",
            includes: [
                "Una primera conversación para conocer el negocio, los objetivos y el contexto del proyecto.",
                "Identificar quiénes van a usar la solución y qué necesitan de ella.",
                "Relevar los procesos, sistemas y datos con los que hay que trabajar.",
                "Definir el alcance: qué entra ahora, qué queda para más adelante y qué es prioritario.",
                "Acordar tiempos y forma de trabajo."
            ],
            deliverables: ["Objetivos claros", "Alcance definido", "Prioridades acordadas", "Plan de trabajo"]
        },
        en: {
            num: "Step 01 / 04",
            lead: "Before opening a code editor or a design tool, I take the time to understand which problem needs solving and for whom, so the project starts with a clear direction.",
            includes: [
                "An initial conversation to get to know the business, the goals and the project context.",
                "Identifying who will use the solution and what they need from it.",
                "Mapping the processes, systems and data involved.",
                "Defining the scope: what goes in now, what waits for later and what is a priority.",
                "Agreeing on timelines and ways of working."
            ],
            deliverables: ["Clear goals", "Defined scope", "Agreed priorities", "Work plan"]
        }
    },
    design: {
        titleKey: "step2Title",
        es: {
            num: "Paso 02 / 04",
            lead: "Con el alcance definido, planteo cómo va a ser la solución: cómo se organiza, cómo se ve y cómo se construye, para validar el rumbo antes de desarrollar.",
            includes: [
                "Estructura de la información y flujos de navegación o de proceso.",
                "Diseño visual de las pantallas y prototipos en Figma para validar antes de programar.",
                "Definición de la solución técnica: tecnologías, datos e integraciones.",
                "Revisión conjunta para ajustar lo necesario antes de pasar a construir."
            ],
            deliverables: ["Estructura y flujos", "Prototipo", "Diseño visual", "Solución técnica"]
        },
        en: {
            num: "Step 02 / 04",
            lead: "With the scope defined, I lay out what the solution will be: how it is organized, how it looks and how it is built, so the direction is validated before development starts.",
            includes: [
                "Information structure and navigation or process flows.",
                "Visual design of the screens and Figma prototypes to validate before coding.",
                "Definition of the technical solution: technologies, data and integrations.",
                "A joint review to adjust whatever is needed before moving on to build."
            ],
            deliverables: ["Structure and flows", "Prototype", "Visual design", "Technical solution"]
        }
    },
    build: {
        titleKey: "step3Title",
        es: {
            num: "Paso 03 / 04",
            lead: "Desarrollo la solución en etapas cortas y muestro avances, para que puedas ver el proyecto tomar forma y opinar mientras todavía es fácil hacer cambios.",
            includes: [
                "Desarrollo iterativo, con entregas parciales que se pueden revisar.",
                "Integración con los sistemas, bases de datos y servicios necesarios.",
                "Pruebas para validar que todo funcione como se acordó, en distintos dispositivos y escenarios.",
                "Incorporación de tus comentarios en cada etapa."
            ],
            deliverables: ["Avances revisables", "Integraciones", "Pruebas", "Versión lista para publicar"]
        },
        en: {
            num: "Step 03 / 04",
            lead: "I build the solution in short stages and show progress, so you can see the project take shape and give feedback while changes are still easy to make.",
            includes: [
                "Iterative development, with partial deliveries that can be reviewed.",
                "Integration with the required systems, databases and services.",
                "Testing to confirm everything works as agreed, across devices and scenarios.",
                "Incorporating your feedback at every stage."
            ],
            deliverables: ["Reviewable progress", "Integrations", "Testing", "Release-ready version"]
        }
    },
    improve: {
        titleKey: "step4Title",
        es: {
            num: "Paso 04 / 04",
            lead: "Publicar no es el final. Después del lanzamiento reviso cómo se usa la solución y la ajusto para que siga funcionando bien y evolucionando junto con el negocio.",
            includes: [
                "Puesta en marcha y seguimiento de los primeros días de uso.",
                "Corrección de errores y ajustes a partir del uso real.",
                "Mejoras de rendimiento y de experiencia de uso.",
                "Nuevas funcionalidades a medida que cambian las necesidades."
            ],
            deliverables: ["Puesta en marcha", "Ajustes", "Mejor rendimiento", "Nuevas funciones"]
        },
        en: {
            num: "Step 04 / 04",
            lead: "Launching is not the end. After release I look at how the solution is used and fine-tune it so it keeps working well and evolving alongside the business.",
            includes: [
                "Rollout and follow-up during the first days of use.",
                "Bug fixes and adjustments based on real usage.",
                "Performance and user experience improvements.",
                "New features as needs change."
            ],
            deliverables: ["Rollout", "Adjustments", "Better performance", "New features"]
        }
    }
};

const serviceModal = document.getElementById('service-modal');
let activeServiceKind = 'service';
let activeServiceKey = null;
let serviceTrigger = null;

function renderServiceModal() {
    if (!serviceModal || !activeServiceKey) return;
    const isProcess = activeServiceKind === 'process';
    const d = (isProcess ? processDetails : serviceDetails)[activeServiceKey];
    const c = d[currentLang];
    const t = translations[currentLang];

    document.getElementById('service-modal-num').textContent = c.num || d.num;
    document.getElementById('service-modal-title').textContent = t[d.titleKey];
    document.getElementById('service-modal-lead').textContent = c.lead;
    document.getElementById('service-modal-h-list').textContent = isProcess ? t.processIncludes : t.serviceIncludes;
    document.getElementById('service-modal-h-extra').textContent = isProcess ? t.processDeliver : t.serviceTools;
    document.getElementById('service-modal-cta').textContent = isProcess ? t.heroCtaContact : t.serviceCta;

    const list = document.getElementById('service-modal-list');
    list.innerHTML = '';
    c.includes.forEach(text => {
        const li = document.createElement('li');
        li.textContent = text;
        list.appendChild(li);
    });

    const chips = document.getElementById('service-modal-tools');
    chips.innerHTML = '';
    (isProcess ? c.deliverables : d.tools).forEach(text => {
        const span = document.createElement('span');
        span.textContent = text;
        chips.appendChild(span);
    });
}

function openServiceModal(kind, key, trigger) {
    const source = kind === 'process' ? processDetails : serviceDetails;
    if (!serviceModal || !source[key]) return;
    activeServiceKind = kind;
    activeServiceKey = key;
    serviceTrigger = trigger || null;
    renderServiceModal();
    serviceModal.querySelector('.service-modal-content').scrollTop = 0;
    serviceModal.classList.remove('hidden');
    serviceModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    serviceModal.querySelector('.service-modal-close').focus();
}

function closeServiceModal(restoreFocus) {
    if (!serviceModal || serviceModal.classList.contains('hidden')) return;
    serviceModal.classList.add('hidden');
    serviceModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeServiceKey = null;
    if (restoreFocus !== false && serviceTrigger) serviceTrigger.focus();
    serviceTrigger = null;
}

if (serviceModal) {
    // Tarjetas de servicios y pasos del proceso abren el mismo popup
    [['.service[data-service]', 'data-service', 'service'],
    ['.step[data-process]', 'data-process', 'process']].forEach(([selector, attr, kind]) => {
        document.querySelectorAll(selector).forEach(card => {
            const open = () => openServiceModal(kind, card.getAttribute(attr), card);
            card.addEventListener('click', open);
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    open();
                }
            });
        });
    });

    serviceModal.addEventListener('click', (ev) => {
        if (ev.target.getAttribute('data-action') === 'close') closeServiceModal();
        if (ev.target.closest('[data-action="contact"]')) closeServiceModal(false);
    });
    serviceModal.querySelector('.service-modal-close').addEventListener('click', () => closeServiceModal());

    window.addEventListener('keydown', (e) => {
        if (serviceModal.classList.contains('hidden')) return;
        if (e.key === 'Escape') {
            closeServiceModal();
        } else if (e.key === 'Tab') {
            // mantiene el foco dentro del popup
            const focusables = serviceModal.querySelectorAll('button, a[href]');
            const first = focusables[0];
            const last = focusables[focusables.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            } else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        }
    });
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
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (translations[lang][key] !== undefined) {
            el.placeholder = translations[lang][key];
        }
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(el => {
        const key = el.getAttribute("data-i18n-aria");
        if (translations[lang][key] !== undefined) {
            el.setAttribute('aria-label', translations[lang][key]);
        }
    });
    renderCards();
    renderHeroStats();
    renderServiceModal();
    if (typeof window.applyThemeLabels === 'function') window.applyThemeLabels();

    try { localStorage.setItem('lp-lang', lang); } catch (err) { /* storage no disponible */ }
}

// Restaura el idioma elegido en esta misma sesion (si lo hay)
(function () {
    let savedLang = null;
    try { savedLang = localStorage.getItem('lp-lang'); } catch (err) { /* storage no disponible */ }
    if (savedLang && savedLang !== currentLang && translations[savedLang]) {
        setLang(savedLang);
    }
})();

renderCards();

// Graphic-design modal handling
const gdModal = document.getElementById('gd-modal');
const gdModalImg = document.getElementById('gd-modal-img');
const gdModalTitle = document.getElementById('gd-modal-title');
const gdModalDesc = document.getElementById('gd-modal-desc');

function openGdModal(imgSrc, title, desc) {
    if (!gdModal) return;
    gdModalImg.src = imgSrc || '';
    gdModalImg.alt = title || '';
    gdModalTitle.textContent = title || '';
    gdModalDesc.textContent = desc || '';
    gdModal.classList.remove('hidden');
    gdModal.setAttribute('aria-hidden', 'false');
    // prevent body scroll
    document.body.style.overflow = 'hidden';
}

function closeGdModal() {
    if (!gdModal) return;
    gdModal.classList.add('hidden');
    gdModal.setAttribute('aria-hidden', 'true');
    gdModalImg.src = '';
    document.body.style.overflow = '';
}

// Bind modal events
if (gdModal) {
    // close buttons / backdrop
    gdModal.addEventListener('click', (ev) => {
        const action = ev.target.getAttribute('data-action');
        if (action === 'close') closeGdModal();
    });
    const closeBtn = gdModal.querySelector('.gd-modal-close');
    if (closeBtn) closeBtn.addEventListener('click', closeGdModal);
    // ESC to close
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !gdModal.classList.contains('hidden')) closeGdModal();
    });
}

function renderHeroStats() {
    const el = document.getElementById('hero-stats');
    if (!el) return;
    const totalProjects = projects.length;
    const areas = new Set(projects.map(p => p.cat)).size;
    const t = translations[currentLang];
    el.innerHTML = `
        <div class="stat"><strong>${totalProjects}</strong><span>${t.statProjects}</span></div>
        <div class="stat"><strong>${areas}</strong><span>${t.statAreas}</span></div>
        <div class="stat"><strong>2</strong><span>${t.statLangs}</span></div>
    `;
}
renderHeroStats();

const errorLabel = document.getElementById('errorLabel');
errorLabel.style.display = "none";

function handleSubmit(e) {
    e.preventDefault();

    errorLabel.innerText = "";
    errorLabel.style.display = "none";
    errorLabel.classList.remove('is-error');

    const myForm = document.querySelector('#contactForm');
    const isValid = myForm.reportValidity();

    if (isValid) {
        const btn = document.getElementById('submit-btn');
        sendEmail(btn);
    }
}

function sendEmail(btn) {
    const parametros = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        empresa: document.getElementById("contact-company").value,
        phone: document.getElementById("contact-phone").value,
        mensaje: document.getElementById("contact-message").value
    };

    if (typeof emailjs === 'undefined') {
        errorLabel.innerText = translations[currentLang].fError;
        errorLabel.classList.add('is-error');
        errorLabel.style.display = "block";
        errorLabel.style.width = "100%";
        return;
    }

    const originalLabel = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = `<span>${translations[currentLang].fSending}</span>`;

    emailjs.send(
        "service_4w6zys5",
        "template_ioolxbg",
        parametros
    )
        .then(function () {
            errorLabel.innerText = translations[currentLang].fDesc;
            errorLabel.classList.remove('is-error');
            errorLabel.style.display = "block";
            errorLabel.style.width = "100%";
            btn.innerHTML = originalLabel;
            btn.disabled = false;
            const form = document.getElementById('contactForm');
            form.reset();
            form.querySelectorAll('.touched').forEach(el => el.classList.remove('touched'));
        })
        .catch(function (error) {
            console.error(error);
            errorLabel.innerText = translations[currentLang].fError;
            errorLabel.classList.add('is-error');
            errorLabel.style.display = "block";
            errorLabel.style.width = "100%";
            btn.innerHTML = originalLabel;
            btn.disabled = false;
        });
}

const inputsRequired = document.querySelectorAll('[required]');
inputsRequired.forEach(input => {
    input.addEventListener('blur', () => {
        input.classList.add('touched');
    });

    input.addEventListener('invalid', (e) => {
        e.preventDefault();
        input.classList.add('touched');
    });
});

(function () {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle ? toggle.querySelector('i') : null;
    const STORAGE_KEY = 'lp-theme';

    function apply(theme) {
        if (theme === 'light') {
            root.setAttribute('data-theme', 'light');
            if (icon) { icon.classList.remove('fa-moon-o'); icon.classList.add('fa-sun-o'); }
            if (toggle) toggle.setAttribute('aria-label', (translations[currentLang] || translations.es).themeToggleAriaLight);
        } else {
            root.removeAttribute('data-theme');
            if (icon) { icon.classList.remove('fa-sun-o'); icon.classList.add('fa-moon-o'); }
            if (toggle) toggle.setAttribute('aria-label', (translations[currentLang] || translations.es).themeToggleAria);
        }
    }

    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (err) { /* storage no disponible */ }

    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    apply(saved || (prefersLight ? 'light' : 'dark'));

    if (toggle) {
        toggle.addEventListener('click', function () {
            const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            apply(next);
            try { localStorage.setItem(STORAGE_KEY, next); } catch (err) { /* storage no disponible */ }
        });
    }

    window.applyThemeLabels = function () { apply(root.getAttribute('data-theme') === 'light' ? 'light' : 'dark'); };
})();

// Barra de progreso de scroll en el header
(function () {
    const bar = document.getElementById('progress-bar');
    if (!bar) return;
    function update() {
        const scrollTop = window.scrollY;
        const height = document.documentElement.scrollHeight - window.innerHeight;
        const pct = height > 0 ? (scrollTop / height) * 100 : 0;
        bar.style.width = pct + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
})();

(function () {
    var ITEM_SELECTOR = [
        '.hero-grid > *',
        '.section-head',
        '.about-grid > div',
        '.service',
        '.step',
        '.card',
        '.contact-info',
        '.contact-form-card'
    ].join(',');

    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    var observer = null;
    if (!reduced && 'IntersectionObserver' in window) {
        observer = new IntersectionObserver(function (entries, obs) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    }

    function applyReveal() {
        document.querySelectorAll('section[data-anim]').forEach(function (section) {
            var items = section.querySelectorAll(ITEM_SELECTOR);
            var index = 0;
            items.forEach(function (el) {
                if (!el.classList.contains('anim-el')) {
                    el.classList.add('anim-el');
                    el.style.setProperty('--i', index);
                    if (observer) observer.observe(el);
                    else el.classList.add('in');
                }
                index++;
            });
        });
    }

    window.applyReveal = applyReveal;

    if (typeof window.renderCards === 'function') {
        var originalRenderCards = window.renderCards;
        window.renderCards = function () {
            var result = originalRenderCards.apply(this, arguments);
            applyReveal();
            return result;
        };
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyReveal);
    } else {
        applyReveal();
    }
})();

(function () {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;
    const STORAGE_KEY = 'lp-cookie-consent';
    const acceptBtn = document.getElementById('cookie-accept');

    let accepted = null;
    try { accepted = localStorage.getItem(STORAGE_KEY); } catch (err) { /* storage no disponible */ }

    if (!accepted) {
        window.setTimeout(function () {
            banner.classList.remove('hidden');
            banner.classList.add('show');
            document.body.classList.add('cookie-banner-visible');
        }, 900);
    }

    function dismiss() {
        banner.classList.remove('show');
        banner.classList.add('hidden');
        document.body.classList.remove('cookie-banner-visible');
        try { localStorage.setItem(STORAGE_KEY, '1'); } catch (err) { /* storage no disponible */ }
    }

    if (acceptBtn) acceptBtn.addEventListener('click', dismiss);
})();

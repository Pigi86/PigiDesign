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
    // react to language changes requested outside this scope
    window.addEventListener('lp:langchange', function (ev) {
        try { renderCommands(paletteInput?.value || ''); } catch (e) { }
        try {
            // update any existing terminal output lines that match known system texts
            var keys = ['terminalWelcome', 'terminalHelp', 'terminalAbout', 'terminalProjects', 'terminalSkills', 'terminalContact', 'terminalTheme', 'terminalUnknown'];
            if (terminalOutput) {
                Array.from(terminalOutput.querySelectorAll('.terminal-line')).forEach(function (line) {
                    var txt = (line.textContent || '').toString();
                    // for each known language, check if the line matches that language's string and replace with currentLang
                    Object.keys(translations).forEach(function (loc) {
                        keys.forEach(function (k) {
                            var prev = translations[loc] && translations[loc][k];
                            var curr = translations[currentLang] && translations[currentLang][k];
                            if (!prev || !curr) return;
                            if (k === 'terminalProjects') {
                                if (txt.indexOf(prev) === 0) {
                                    line.textContent = curr + (projects ? projects.length : '');
                                }
                            } else {
                                if (txt === prev) {
                                    line.textContent = curr;
                                }
                            }
                        });
                    });
                });
            }
        } catch (e) { }
    });

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
        navAbout: "01 Sobre mí",
        navWork: "04 Trabajo",
        navServices: "02 Servicios",
        navFlow: "03 Proceso",
        navContact: "05 Contacto",
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
        processIncludes: "Qué hago en esta etapa",
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
        heroPitch: "Desarrollo soluciones digitales que combinan código, automatización y diseño: desde sitios y aplicaciones web hasta soluciones empresariales con Power Platform.",
        heroPitch2: "El desarrollo de software transforma la sociedad al conectar personas, optimizar procesos y crear soluciones innovadoras. Desde la educación hasta la salud y los negocios, la tecnología impulsa nuevas oportunidades, mejora la calidad de vida y redefine nuestra forma de trabajar, comunicarnos y resolver problemas.",
        metaRole: "Rol",
        metaRoles: "Analista Programador Senior — Desarrollador Senior en Power Platform",
        metaLocation: "Ubicación",
        metaLocationValue: "Buenos Aires, Argentina",
        metaFocus: "Enfoque",
        metaFocusValue: "Desarrollo web · Power Platform · Diseño gráfico",
        aboutTitle: "Acerca de mí",
        aboutTag: "Perfil / competencias",
        aboutP1: "Analista programador senior con foco en Power Platform y desarrollo web. Trabajo tanto en la construcción de aplicaciones y flujos como en la resolución del lado visual de un proyecto, desde interfaces hasta piezas de diseño gráfico.",
        aboutP2: "Este espacio reúne una selección de trabajos propios: proyectos web y piezas de diseño gráfico realizadas en distintos contextos, personales y profesionales.",
        aboutActualmente: "Actualmente",
        aboutActualmenteP1: "Desarrollador Senior en Power Platform fulltime en Remoting Coders.",
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
        heroCtaCvLabel: "Descargar CV PDF",
        heroCtaCvLabel2: "Curriculum",
        heroCtaCvLabel3: "Abrir en una pestaña nueva",
        statProjects: "Proyectos publicados",
        statAreas: "Áreas de especialización",
        statLangs: "Idiomas del sitio",
        fSending: "Enviando...",
        fError: "No se pudo enviar el mensaje. Probá de nuevo o escribime por mail.",
        cookieText: "Este sitio usa fuentes y recursos de terceros (Google Fonts, Font Awesome) y guarda tu preferencia de tema en el almacenamiento local de tu navegador. No se usan cookies de seguimiento ni analítica activa.",
        cookieAccept: "Entendido",
        pagPrev: "Anterior",
        pagNext: "Siguiente",
        pagPage: "Página",
        workSearchLabel: "Buscar proyectos",
        workSearchPlaceholder: "Buscar por proyecto, tecnología...",
        workSearchClear: "Limpiar búsqueda",
        workSearchEmpty: "No se encontraron proyectos con esa búsqueda.",
        workSearchResultSingular: "proyecto encontrado",
        workSearchResultPlural: "proyectos encontrados",
        externalButton: "Ir a sitio web",
        availableStatus: "Disponible para nuevos proyectos",
        sharePortfolio: "Compartir portfolio",
        copyEmail: "Copiar email",
        copiedEmail: "Email copiado",
        sharedPortfolio: "Enlace compartido",
        commandOpen: "Abrir comandos",
        commandPlaceholder: "Buscar una acción...",
        openTerminal: "Abrir Terminal",
        terminalWelcome: "Terminal interactiva — escribí 'help' para ver los comandos.",
        terminalHelp: "Comandos: about · projects · skills · contact · theme · clear · help",
        terminalAbout: "Leandro Pignatta — desarrollo web, Power Platform y diseño.",
        terminalProjects: "Proyectos publicados: ",
        terminalSkills: "Stack: HTML · CSS · JavaScript · React · Node.js · C# · .NET · Power Apps · Power Automate · SharePoint · SQL Server · IA",
        terminalContact: "Email: leandro.pignatta@live.com",
        terminalTheme: "Usá el botón de tema o escribí 'theme light' / 'theme dark'.",
        terminalUnknown: "Comando no reconocido. Escribí 'help'.",
        navegar: "navegar",
        ejecutar: "ejecutar",
        abrir: "abrir"
    },
    en: {
        introShort: "Development & Power Platform",
        introShort2: "Web Development · Power Platform · Design",
        introShort3: "DESIGN",
        nameShort: "Leandro Pignatta",
        navAbout: "01 About",
        navWork: "04 Work",
        navFlow: "03 Workflow",
        navServices: "02 Services",
        navContact: "05 Contact",
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
        processIncludes: "What I do at this stage",
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
        heroPitch: "I develop digital solutions that combine code, automation, and design—ranging from websites and web applications to enterprise solutions using Power Platform.",
        heroPitch2: "Software development transforms society by connecting people, optimizing processes, and creating innovative solutions. From education to healthcare and business, technology drives new opportunities, improves quality of life, and redefines how we work, communicate, and solve problems.",
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
        aboutActualmente: "Currently",
        aboutActualmenteP1: "Power Platform Senior Developer fulltime at Remoting Coders.",
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
        heroCtaCvLabel: "Download CV PDF",
        heroCtaCvLabel2: "Resume",
        heroCtaCvLabel3: "Open in a new tab",
        statProjects: "Published projects",
        statAreas: "Areas of expertise",
        statLangs: "Site languages",
        fSending: "Sending...",
        fError: "Couldn't send the message. Try again or email me directly.",
        cookieText: "This site uses third-party fonts and resources (Google Fonts, Font Awesome) and stores your theme preference in your browser's local storage. No tracking cookies or active analytics are used.",
        cookieAccept: "Got it",
        pagPrev: "Previous",
        pagNext: "Next",
        pagPage: "Page",
        workSearchLabel: "Search projects",
        workSearchPlaceholder: "Search by project, technology...",
        workSearchClear: "Clear search",
        workSearchEmpty: "No projects matched your search.",
        workSearchResultSingular: "project found",
        workSearchResultPlural: "projects found",
        externalButton: "Go to web page",
        availableStatus: "Available for new projects",
        sharePortfolio: "Share portfolio",
        copyEmail: "Copy email",
        copiedEmail: "Email copied",
        sharedPortfolio: "Link shared",
        commandOpen: "Open commands",
        commandPlaceholder: "Search an action...",
        openTerminal: "Open Terminal",
        terminalWelcome: "Interactive terminal — type 'help' to see commands.",
        terminalHelp: "Commands: about · projects · skills · contact · theme · clear · help",
        terminalAbout: "Leandro Pignatta — web development, Power Platform and design.",
        terminalProjects: "Published projects: ",
        terminalSkills: "Stack: HTML · CSS · JavaScript · React · Node.js · C# · .NET · Power Apps · Power Automate · SharePoint · SQL Server · AI",
        terminalContact: "Email: leandro.pignatta@live.com",
        terminalTheme: "Use the theme button or type 'theme light' / 'theme dark'.",
        terminalUnknown: "Unknown command. Type 'help'.",
        navegar: "browse",
        ejecutar: "execute",
        abrir: "open"
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
        id: 5, cat: "web", thumb: "thumb-web-3", ref: "WEB-2025-04",
        title: { es: "Ledger Coin Sitio Web", en: "Ledger Coin Web Page" },
        desc: { es: "Ledger Coin es una plataforma web de simulación y análisis del mercado de criptomonedas, diseñada con una interfaz moderna, profesional y responsive. La web permite consultar precios simulados de criptomonedas, visualizar su evolución mediante gráficos interactivos, analizar estadísticas como capitalización, volumen y variaciones de precio, y gestionar una cartera virtual mediante operaciones de compra y venta.", en: "Ledger is a web-based platform for cryptocurrency market simulation and analysis, featuring a modern, professional, and responsive interface. The platform allows users to check simulated cryptocurrency prices, visualize price trends via interactive charts, analyze statistics such as market capitalization, volume, and price fluctuations, and manage a virtual portfolio through buy and sell transactions." },
        tags: ["HTML", "JavaScript", "CSS"],
        url: "https://pigi86.github.io/LedgerCoin/",
        imgUrl: "Images/webpage5.png"
    },
    {
        id: 6, cat: "web", thumb: "thumb-web-3", ref: "WEB-2025-08",
        title: { es: "Service Flow Sitio Web", en: "Service Flow Web Page" },
        desc: { es: "Plataforma web empresarial diseñada para centralizar la gestión de tickets, clientes, equipos y operaciones. Incluye dashboard de métricas, seguimiento de incidencias, filtros, búsqueda, reportes y administración de usuarios, con una interfaz moderna, responsive y orientada a mejorar la eficiencia operativa.", en: "An enterprise web platform designed to centralize the management of tickets, clients, teams, and operations. It features a metrics dashboard, incident tracking, filtering, search capabilities, reporting, and user administration, all within a modern, responsive interface aimed at improving operational efficiency." },
        tags: ["HTML", "JavaScript", "CSS", "Power Apps"],
        url: "https://pigi86.github.io/ServiceFlow/",
        imgUrl: "Images/webpage6.png"
    },
    {
        id: 7, cat: "gd", thumb: "thumb-gd-1", ref: "GD-2026-09",
        title: { es: "El Tiempo Geológico", en: "Geologic Time" },
        desc: { es: "Donde el tiempo geológico se encuentra con el pulso del mañana. Un fragmento de eternidad petrificado en pirita y cristal, ahora convertido en la brújula que traza un rumbo a través de los océanos del tiempo y el espacio profundo. De la materia prima a la proyección de la luz, el tiempo no es solo medida; es la esencia de lo que fuimos y seremos. El viaje comienza en la muñeca.", en: "Where geological time meets the pulse of tomorrow. A fragment of eternity—petrified in pyrite and crystal—now transformed into a compass charting a course across the oceans of time and deep space. From raw material to the projection of light, time is not merely a measurement; it is the essence of who we were and who we will become. The journey begins on the wrist." },
        tags: ["Adobe Fireworks", "Illustrator", "IA"],
        imgUrl: "Images/galery/803323368_18615402526057387_5107416572513340125_n.jpg"
    },
    {
        id: 8, cat: "gd", thumb: "thumb-gd-2", ref: "GD-2026-06",
        title: { es: "Construyendo el Futuro", en: "Building the Future" },
        desc: { es: "Entre datos, estrellas y posibilidades infinitas. Construyendo el futuro una línea de código, una idea y un desafío a la vez.", en: "Amidst data, stars, and infinite possibilities. Building the future—one line of code, one idea, and one challenge at a time." },
        tags: ["Photoshop", "Adobe Fireworks", "IA"],
        imgUrl: "Images/galery/723238858_18588151651057387_7384351274187935941_n.jpg"
    },
    {
        id: 9, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2026-01",
        title: { es: "La Sombra del Tigre de Plata", en: "The Shadow of the Silver Tiger" },
        desc: { es: "Imponente ilustración de un guerrero antropomórfico con rasgos de tigre blanco y armadura de combate labrada. Sus ojos resplandecen con una intensa energía azul que contrasta con el aura mística de tonos púrpuras que lo rodea, proyectando la figura de un jefe legendario de la fantasía oscura.", en: "A striking illustration of an anthropomorphic warrior with the features of a white tiger and intricately carved battle armor. His eyes glow with an intense blue energy that contrasts with the mystical, purple aura surrounding him, projecting the image of a legendary dark fantasy chieftain." },
        tags: ["Adobe Fireworks", "IA"],
        imgUrl: "Images/galery/Pigi_white_tiger_dark_souls_c2c4fbe2-1bb7-4dec-a34e-504f74f97540 - Copy.jpg"
    },
    {
        id: 10, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2026-03",
        title: { es: "La Historia", en: "The Story" },
        desc: { es: "Cada línea cuenta una historia. Cada idea deja una marca.", en: "Every line tells a story. Every idea leaves a mark." },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/651168257_18561585814057387_8236522324979950329_n.webp"
    },
    {
        id: 11, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2025-04",
        title: { es: "La Identidad", en: "The Identity" },
        desc: { es: "Entre tinta y experiencias, se dibuja la identidad.", en: "Identity takes shape amidst ink and experiences." },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/492042516_18493622977057387_8673969118512317235_n.webp"
    },
    {
        id: 12, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2025-01",
        title: { es: "La Experiencia", en: "The Experience" },
        desc: { es: "La experiencia no se mide por los años, sino por los desafíos que te animaste a enfrentar.", en: "Experience is not measured by years, but by the challenges you dared to face." },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/475783606_18476939866057387_694745016303068710_n.webp"
    },
    {
        id: 13, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2025-10",
        title: { es: "El Guardián del Bit y el Oro", en: "The Guardian of Bit and Gold" },
        desc: { es: "Surgiendo del vacío, este antiguo guardián ha regresado. Fríos ojos azules que todo lo ven. Llamas púrpuras que purgan la sombra.", en: "Emerging from the void, this ancient guardian has returned. Cold blue eyes that see all. Purple flames that purge the shadow." },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/572384413_18529890895057387_2985686607725497839_n.webp"
    },
    {
        id: 14, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2026-02",
        title: { es: "No es solo un dibujo... es papel", en: "It's not just a drawing... it's paper." },
        desc: { es: "Donde la geometría y la textura se encuentran. Esta pieza de arte low-poly cobró vida con cada pliegue de papel meticulosamente diseñado. Desde la bufanda hasta el reflejo de la puesta de sol en las gafas, es todo un mundo de detalles. ¿Quién más se une al club de los pliegues?", en: "Where geometry and texture meet. This low-poly art piece came to life with every meticulously designed paper fold. From the scarf to the sunset reflecting in the glasses, it’s a whole world of detail. Who else is joining the folding club?" },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/640184412_18556927060057387_3678659511849913627_n.webp"
    },
    {
        id: 15, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2019-10",
        title: { es: "Un Cosmos en mis Manos", en: "A Cosmos in My Hands" },
        desc: { es: "Tejiendo estrellas y sosteniendo planetas. ✨ El poder del cosmos está en nuestras manos, si nos atrevemos a mirar más allá de la oscuridad. ¿Cuál es tu rincón favorito del universo?", en: "Weaving stars and holding planets. ✨ The power of the cosmos lies in our hands, if we dare to look beyond the darkness. What is your favorite corner of the universe?" },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/633354222_18389236897159490_5365674072843004945_n.jpg"
    },
    {
        id: 16, cat: "gd", thumb: "thumb-gd-3", ref: "GD-2023-09",
        title: { es: "El Hombre de la Máscara", en: "The Man in the Mask" },
        desc: { es: "“Detrás de cada máscara hay un rostro, y detrás de este, una historia.” ― Marty Rubin", en: "“Behind every mask, there is a face, and behind that a story.” ― Marty Rubin" },
        tags: ["Adobe Fireworks", "Photoshop"],
        imgUrl: "Images/galery/625059809_18090390788063260_6516125498507490905_n.jpg"
    }
];

let currentLang = 'es';
let currentFilter = 'all';
let currentSearch = '';
let currentPage = 1;
const CARDS_PER_PAGE = 6;

function renderCards() {
    const container = document.getElementById('cards');
    container.innerHTML = '';

    const query = currentSearch.trim().toLocaleLowerCase();
    const filtered = projects.filter(p => {
        const matchesCategory = currentFilter === 'all' || p.cat === currentFilter;
        if (!matchesCategory) return false;
        if (!query) return true;

        const searchable = [
            p.title && p.title[currentLang],
            p.title && p.title.es,
            p.title && p.title.en,
            p.desc && p.desc[currentLang],
            p.desc && p.desc.es,
            p.desc && p.desc.en,
            p.ref,
            ...(p.tags || [])
        ].filter(Boolean).join(' ').toLocaleLowerCase();

        return searchable.includes(query);
    });

    const hasSearch = query.length > 0;

    const emptyState = document.getElementById('work-empty');
    if (emptyState) emptyState.hidden = !hasSearch || filtered.length !== 0;

    const resultCount = document.getElementById('work-search-count');
    if (resultCount) {
        resultCount.hidden = !hasSearch;
        if (hasSearch) {
            const t = translations[currentLang];
            const label = filtered.length === 1 ? t.workSearchResultSingular : t.workSearchResultPlural;
            resultCount.textContent = filtered.length + ' ' + label;
        } else {
            resultCount.textContent = '';
        }
    }

    const totalPages = Math.max(1, Math.ceil(filtered.length / CARDS_PER_PAGE));
    if (currentPage > totalPages) currentPage = totalPages;
    if (currentPage < 1) currentPage = 1;

    const start = (currentPage - 1) * CARDS_PER_PAGE;
    const pageItems = filtered.slice(start, start + CARDS_PER_PAGE);

    pageItems
        .forEach(p => {
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
    <span class="service-more" data-i18n="serviceMore">${translations[currentLang].serviceMore}</span>
    `;
            // If this is a graphic design item, open modal on click
            //if (p.cat === 'gd') {
            card.addEventListener('click', () => {
                openGdModal(p.imgUrl, p.title[currentLang], p.desc[currentLang], p.tags, p.url);
            });
            //}
            container.appendChild(card);

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

// Search de proyectos: filtra por título, descripción, referencia y tecnologías.
(function () {
    const input = document.getElementById('work-search-input');
    const clear = document.getElementById('work-search-clear');
    if (!input) return;

    function updateSearch(value) {
        currentSearch = value || '';
        currentPage = 1;
        if (clear) clear.hidden = !currentSearch.trim();
        renderCards();
    }

    input.addEventListener('input', function () {
        updateSearch(this.value);
    });

    if (clear) {
        clear.addEventListener('click', function () {
            input.value = '';
            updateSearch('');
            input.focus();
        });
    }

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && input.value) {
            input.value = '';
            updateSearch('');
        }
    });
})();

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
    //debugger;
    const prevLang = currentLang;
    // detect whether command palette or terminal were open so we can preserve their state
    var _palette = document.getElementById('command-palette');
    var _paletteInput = document.getElementById('command-input');
    var _paletteWasOpen = _palette && !_palette.classList.contains('hidden');
    var _paletteValue = _paletteInput ? _paletteInput.value : '';
    var _terminal = document.getElementById('terminal-modal');
    var _terminalInput = document.getElementById('terminal-input');
    var _terminalWasOpen = _terminal && !_terminal.classList.contains('hidden');
    var _terminalValue = _terminalInput ? _terminalInput.value : '';
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
    // Notify other modules (command palette / terminal) that language changed
    try { window.dispatchEvent(new CustomEvent('lp:langchange', { detail: { lang: lang } })); } catch (e) { }
    // If the palette or terminal were open before the change, reopen them after handlers run so they stay open
    try {
        if (_paletteWasOpen && typeof window._portfolioOpenPalette === 'function') {
            // Reopen AFTER the click event finishes bubbling. The command
            // palette has a close handler on its backdrop, so reopening
            // synchronously here can be immediately undone by that handler.
            setTimeout(function () {
                try { window._portfolioOpenPalette(); } catch (e) { }
                if (_paletteInput) {
                    _paletteInput.value = _paletteValue || '';
                    try { renderCommands(_paletteInput.value || ''); } catch (e) { }
                    try { _paletteInput.focus(); } catch (e) { }
                }
            }, 0);
        }
    } catch (e) { }
    try {
        if (_terminalWasOpen && typeof window._portfolioOpenTerminal === 'function') {
            window._portfolioOpenTerminal();
            setTimeout(function () {
                if (_terminalInput) {
                    _terminalInput.value = _terminalValue || '';
                    try { _terminalInput.focus(); } catch (e) { }
                }
            }, 40);
        }
    } catch (e) { }
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
const gdModalTags = document.getElementById('gd-modal-tags');
const gdModalButton = document.getElementById('gd-modal-button');

function openGdModal(imgSrc, title, desc, tags, url) {
    if (!gdModal) return;
    gdModalImg.src = imgSrc || '';
    gdModalImg.alt = title || '';
    gdModalTitle.textContent = title || '';
    gdModalDesc.textContent = desc || '';
    gdModal.classList.remove('hidden');
    gdModal.setAttribute('aria-hidden', 'false');
    gdModalTags.replaceChildren();
    gdModalButton.replaceChildren();
    var newP = gdModalTags.appendChild(document.createElement("p"));
    for (var ii = 0; ii < tags.length; ii++) {
        const newSpan = document.createElement('span');
        newSpan.textContent = tags[ii];
        newP.appendChild(newSpan);
        newP.append("\u00A0");
        newP.append("\u00A0");
    }
    gdModalTags.appendChild(document.createElement("br"))
    if (url != null) {
        var newP2 = gdModalTags.appendChild(document.createElement("p"));
        const newAnchor = document.createElement('a');
        newAnchor.textContent = translations[currentLang].externalButton;
        newAnchor.className = "btn-primary";
        newAnchor.href = url;
        newAnchor.setAttribute("data-i18n", "externalButton");
        newAnchor.target = "_blank";
        gdModalButton.appendChild(newAnchor);
    }
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
        <div class="stat"><strong data-count="${totalProjects}">0</strong><span>${t.statProjects}</span></div>
        <div class="stat"><strong data-count="${areas}">0</strong><span>${t.statAreas}</span></div>
        <div class="stat"><strong data-count="2">0</strong><span>${t.statLangs}</span></div>
    `;
    el.style.display = 'flex';
    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.querySelectorAll('[data-count]').forEach(function (node) {
        const target = Number(node.getAttribute('data-count')) || 0;
        if (reduced) { node.textContent = target; return; }
        const start = performance.now();
        const duration = 850;
        function tick(now) {
            const progress = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - progress, 3);
            node.textContent = Math.round(target * eased);
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
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
        '.hero-eyebrow',
        '.hero-grid > *',
        '.section-head',
        '.about-grid > div',
        '.aboutActualmente',
        '.tech-stack',
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

/* =========================================================
   Hero code typewriter — escribe, pausa, borra y reinicia
   ========================================================= */
(function () {
    const writer = document.querySelector('[data-codewriter]');
    if (!writer) return;

    const lines = [
        'const developer = {',
        '  name: "Leandro",',
        '  focus: ["web", "power-platform"],',
        '  status: "building",',
        '};'
    ];

    const lineEls = Array.from(writer.querySelectorAll('.code-line'));
    if (!lineEls.length) return;

    const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const visibleLines = Math.min(lines.length, lineEls.length);

    // El cursor es un único elemento y se mueve al final de la línea activa.
    const caret = document.createElement('span');
    caret.className = 'code-caret';
    caret.setAttribute('aria-hidden', 'true');

    // Renderiza el texto manteniendo los valores entre comillas destacados.
    function renderCode(el, value) {
        el.textContent = '';
        const parts = value.split(/(\"(?:[^\"\\]|\\.)*\")/g);

        parts.forEach(function (part) {
            if (!part) return;
            if (part.charAt(0) === '\"' && part.charAt(part.length - 1) === '\"') {
                const span = document.createElement('span');
                span.className = 'code-string';
                span.textContent = part;
                el.appendChild(span);
            } else {
                el.appendChild(document.createTextNode(part));
            }
        });
    }

    function clearLines() {
        lineEls.forEach(function (el) {
            el.textContent = '';
            el.classList.remove('is-typing', 'is-done');
        });
        if (caret.parentNode) caret.parentNode.removeChild(caret);
    }

    function showFinal() {
        clearLines();
        lineEls.forEach(function (el, i) {
            if (i < visibleLines) renderCode(el, lines[i]);
        });
    }

    if (reduced) {
        showFinal();
        return;
    }

    let cancelled = false;
    let runId = 0;

    function sleep(ms) {
        return new Promise(function (resolve) { window.setTimeout(resolve, ms); });
    }

    async function typeRun() {
        const currentRun = ++runId;
        clearLines();

        for (let i = 0; i < visibleLines; i++) {
            if (cancelled || currentRun !== runId) return;
            const el = lineEls[i];
            el.classList.add('is-typing');
            el.appendChild(caret);

            const text = lines[i];
            let typed = '';
            for (let j = 0; j < text.length; j++) {
                if (cancelled || currentRun !== runId) return;
                typed += text[j];
                renderCode(el, typed);
                el.appendChild(caret);
                await sleep(22 + Math.random() * 28);
            }

            el.classList.remove('is-typing');
            el.classList.add('is-done');
            await sleep(120);
        }

        if (cancelled || currentRun !== runId) return;
        await sleep(1800);

        // Borrado desde la última línea, manteniendo el cursor pegado al texto.
        for (let i = visibleLines - 1; i >= 0; i--) {
            if (cancelled || currentRun !== runId) return;
            const el = lineEls[i];
            el.classList.remove('is-done');
            el.classList.add('is-typing');
            el.appendChild(caret);

            let currentText = lines[i];
            while (currentText.length) {
                currentText = currentText.slice(0, -1);
                renderCode(el, currentText);
                el.appendChild(caret);
                await sleep(14 + Math.random() * 18);
            }

            el.classList.remove('is-typing');
            await sleep(90);
        }

        if (caret.parentNode) caret.parentNode.removeChild(caret);
        await sleep(500);
        if (!cancelled) typeRun();
    }

    typeRun();

    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            cancelled = true;
            runId++;
        } else if (cancelled) {
            cancelled = false;
            typeRun();
        }
    });
})();

/* =========================================================
   Custom cursor
   ========================================================= */
(function () {
    var finePointer = window.matchMedia && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduced) return;

    var dot = document.createElement('div');
    var ring = document.createElement('div');
    dot.className = 'cursor-dot';
    ring.className = 'cursor-ring';
    dot.setAttribute('aria-hidden', 'true');
    ring.setAttribute('aria-hidden', 'true');
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    document.documentElement.classList.add('has-custom-cursor');

    var mouseX = -100, mouseY = -100;
    var ringX = -100, ringY = -100;
    var active = true;

    function move(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.transform = 'translate3d(' + mouseX + 'px,' + mouseY + 'px,0)';
        if (!document.body.classList.contains('cursor-ready')) {
            document.body.classList.add('cursor-ready');
        }
    }

    function animate() {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = 'translate3d(' + ringX + 'px,' + ringY + 'px,0)';
        if (active) requestAnimationFrame(animate);
    }

    document.addEventListener('mousemove', move, { passive: true });
    document.addEventListener('mouseenter', function () {
        active = true;
        document.body.classList.remove('cursor-hidden');
        requestAnimationFrame(animate);
    });
    document.addEventListener('mouseleave', function () {
        active = false;
        document.body.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseover', function (e) {
        var target = e.target.closest && e.target.closest(
            'a, button, [role="button"], input, textarea, select, label, .card, .service, .step, .hero-title-img, .badge'
        );
        document.body.classList.toggle('cursor-hover', !!target);
    }, { passive: true });

    document.addEventListener('mousedown', function () {
        document.body.classList.add('cursor-click');
    });
    document.addEventListener('mouseup', function () {
        document.body.classList.remove('cursor-click');
    });

    requestAnimationFrame(animate);
})();

/* =========================================================
   Premium interaction pack: palette, terminal, share, copy,
   magnetic controls, skill interactions and easter egg.
   ========================================================= */
(function () {
    var palette = document.getElementById('command-palette');
    var paletteInput = document.getElementById('command-input');
    var paletteList = document.getElementById('command-list');
    var paletteOpen = document.getElementById('command-open');
    var terminal = document.getElementById('terminal-modal');
    var terminalOpen = document.getElementById('terminal-open');
    var terminalInput = document.getElementById('terminal-input');
    var terminalOutput = document.getElementById('terminal-output');
    var commands = [
        { label: { es: 'Ir a Inicio', en: 'Go to Home' }, icon: 'fa-home', action: function () { go('#hero') } },
        { label: { es: 'Ir a Sobre mí', en: 'Go to About' }, icon: 'fa-user', action: function () { go('#sobre-mi') } },
        { label: { es: 'Ver Servicios', en: 'View Services' }, icon: 'fa-cubes', action: function () { go('#servicios') } },
        { label: { es: 'Ver Trabajo', en: 'View Work' }, icon: 'fa-th-large', action: function () { go('#trabajo') } },
        { label: { es: 'Ir a Contacto', en: 'Go to Contact' }, icon: 'fa-envelope', action: function () { go('#contacto') } },
        { label: { es: 'Abrir Terminal', en: 'Open Terminal' }, icon: 'fa-terminal', action: function () { openTerminal() } },
        { label: { es: 'Cambiar tema', en: 'Toggle theme' }, icon: 'fa-adjust', action: function () { document.getElementById('theme-toggle')?.click() } },
        { label: { es: 'Cambiar idioma', en: 'Switch language' }, icon: 'fa-language', action: function () { setLang(currentLang === 'es' ? 'en' : 'es') } },
        { label: { es: 'Compartir portfolio', en: 'Share portfolio' }, icon: 'fa-share-alt', action: function () { sharePortfolio() } },
        { label: { es: 'Copiar email', en: 'Copy email' }, icon: 'fa-copy', action: function () { copyEmail() } }
    ];
    var activeIndex = 0;
    function t(key) { return (translations[currentLang] || translations.es)[key] || key }
    function go(sel) { closePalette(); var el = document.querySelector(sel); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' }) }
    function renderCommands(filter) {
        if (!paletteList) return;
        var q = (filter || '').trim().toLocaleLowerCase();
        var visible = commands.filter(function (c) { return c.label[currentLang].toLocaleLowerCase().includes(q) });
        paletteList.innerHTML = '';
        visible.forEach(function (c, i) {
            var b = document.createElement('button'); b.type = 'button'; b.className = 'command-item' + (i === activeIndex ? ' active' : '');
            b.innerHTML = '<i class="fa ' + c.icon + '"></i><span>' + c.label[currentLang] + '</span>' + (i < 9 ? '<span class="command-key">' + (i + 1) + '</span>' : '');
            b.addEventListener('click', c.action); paletteList.appendChild(b);
        });
        if (activeIndex >= visible.length) activeIndex = Math.max(0, visible.length - 1);
    }
    function openPalette() { if (!palette) return; palette.classList.remove('hidden'); palette.setAttribute('aria-hidden', 'false'); activeIndex = 0; renderCommands(paletteInput?.value); setTimeout(function () { paletteInput?.focus() }, 20) }
    function closePalette() { if (!palette) return; palette.classList.add('hidden'); palette.setAttribute('aria-hidden', 'true') }
    function openTerminal() {
        if (!terminal) return;
        terminal.classList.remove('hidden');
        terminal.setAttribute('aria-hidden', 'false');
        try {
            // Avoid printing welcome twice: check if a welcome line (in any language) already exists
            if (terminalOutput.innerText == "") print(t('terminalWelcome'), 'muted');
        } catch (e) { if (!terminalOutput?.children.length) print(t('terminalWelcome'), 'muted'); }
        setTimeout(function () { terminalInput?.focus() }, 20);
    }
    function closeTerminal() { if (!terminal) return; terminal.classList.add('hidden'); terminal.setAttribute('aria-hidden', 'true') }
    function print(value, kind) { if (!terminalOutput) return; var line = document.createElement('div'); line.className = 'terminal-line ' + (kind || ''); line.textContent = value; terminalOutput.appendChild(line); terminalOutput.scrollTop = terminalOutput.scrollHeight }
    function runCommand(raw) {
        var cmd = (raw || '').trim().toLocaleLowerCase(); if (!cmd) return;
        print('visitor@portfolio:~$ ' + raw, 'cmd');
        if (cmd === 'help') print(t('terminalHelp'), 'muted');
        else if (cmd === 'about') print(t('terminalAbout'));
        else if (cmd === 'projects') print(t('terminalProjects') + projects.length, 'good');
        else if (cmd === 'skills') print(t('terminalSkills'));
        else if (cmd === 'contact') print(t('terminalContact'));
        else if (cmd === 'clear') { terminalOutput.innerHTML = ''; return }
        else if (cmd === 'theme') print(t('terminalTheme'), 'muted');
        else if (cmd === 'theme light') { document.documentElement.setAttribute('data-theme', 'light'); window.applyThemeLabels && window.applyThemeLabels(); print('Theme: light', 'good') }
        else if (cmd === 'theme dark') { document.documentElement.removeAttribute('data-theme'); window.applyThemeLabels && window.applyThemeLabels(); print('Theme: dark', 'good') }
        else if (cmd === 'work' || cmd === 'portfolio') { closeTerminal(); go('#trabajo') }
        else if (cmd === 'contact-me') { closeTerminal(); go('#contacto') }
        else print(t('terminalUnknown'), 'muted');
    }
    if (paletteOpen) paletteOpen.addEventListener('click', openPalette);
    if (terminalOpen) terminalOpen.addEventListener('click', openTerminal);
    document.querySelectorAll('[data-command-close]').forEach(function (el) { el.addEventListener('click', closePalette) });
    document.querySelectorAll('[data-terminal-close]').forEach(function (el) { el.addEventListener('click', closeTerminal) });
    paletteInput && paletteInput.addEventListener('input', function () { activeIndex = 0; renderCommands(this.value) });
    paletteInput && paletteInput.addEventListener('keydown', function (e) {
        var items = paletteList ? Array.from(paletteList.querySelectorAll('.command-item')) : [];
        if (e.key === 'ArrowDown') { e.preventDefault(); activeIndex = Math.min(activeIndex + 1, items.length - 1); renderCommands(this.value) }
        else if (e.key === 'ArrowUp') { e.preventDefault(); activeIndex = Math.max(activeIndex - 1, 0); renderCommands(this.value) }
        else if (e.key === 'Enter') { e.preventDefault(); items[activeIndex]?.click() }
        else if (e.key === 'Escape') closePalette();
    });
    terminal && terminal.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            e.preventDefault();
            e.stopPropagation();
            closeTerminal();
            // Return to the Command Window after the current key event finishes.
            setTimeout(function () { try { openPalette(); } catch (err) { } }, 0);
        }
    });
    document.getElementById('terminal-form')?.addEventListener('submit', function (e) { e.preventDefault(); runCommand(terminalInput.value); terminalInput.value = '' });
    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette?.classList.contains('hidden') ? openPalette() : closePalette() }
        if (e.key === 'Escape') { closePalette(); closeTerminal() }
    });
    window.addEventListener('scroll', function () { if (!palette?.classList.contains('hidden')) closePalette() }, { passive: true });
    window._portfolioOpenPalette = openPalette;
    window._portfolioOpenTerminal = openTerminal;

    // Skills: tooltip contextual al pasar/focalizar.
    var skillInfo = {
        web: { es: 'Interfaces, sitios y aplicaciones web responsive.', en: 'Responsive interfaces, websites and web applications.' },
        power: { es: 'Apps, automatizaciones y soluciones conectadas con Power Platform.', en: 'Apps, automations and connected solutions with Power Platform.' },
        design: { es: 'Interfaces y piezas visuales con foco en claridad y consistencia.', en: 'Interfaces and visual pieces focused on clarity and consistency.' }
    };
    document.querySelectorAll('.skillgroup-interactive').forEach(function (skill) {
        var key = skill.getAttribute('data-skill');
        var pop = document.createElement('span');
        pop.className = 'skill-popover';
        skill.appendChild(pop);
        function update() { pop.textContent = skillInfo[key]?.[currentLang] || '' }
        update();
        skill.addEventListener('mouseenter', update);
        skill.addEventListener('focus', update);
    });
})();

(function () {
    var toast;
    function showToast(message) {
        if (!toast) { toast = document.createElement('div'); toast.className = 'toast-premium'; document.body.appendChild(toast) }
        toast.textContent = message; toast.classList.add('show'); clearTimeout(showToast.timer); showToast.timer = setTimeout(function () { toast.classList.remove('show') }, 1800)
    }
    window.copyEmail = function () {
        var email = 'leandro.pignatta@live.com';
        if (navigator.clipboard && window.isSecureContext) { navigator.clipboard.writeText(email).then(function () { showToast((translations[currentLang] || translations.es).copiedEmail) }) }
        else { var ta = document.createElement('textarea'); ta.value = email; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); showToast((translations[currentLang] || translations.es).copiedEmail) } catch (e) { } ta.remove() }
    };
    document.getElementById('copy-email')?.addEventListener('click', copyEmail);
    window.sharePortfolio = function () {
        var data = { title: document.title, text: 'Leandro Carlos Pignatta — Portfolio', url: window.location.href };
        if (navigator.share) { navigator.share(data).then(function () { showToast((translations[currentLang] || translations.es).sharedPortfolio) }).catch(function () { }) }
        else if (navigator.clipboard) { navigator.clipboard.writeText(window.location.href).then(function () { showToast((translations[currentLang] || translations.es).sharedPortfolio) }) }
        else showToast(window.location.href);
    };
    document.getElementById('share-portfolio')?.addEventListener('click', sharePortfolio);
})();

/* Magnetic buttons: subtle effect on fine pointers only. */
(function () {
    if (!(window.matchMedia && window.matchMedia('(hover:hover) and (pointer:fine)').matches)) return;
    if (window.matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    document.querySelectorAll('.btn-primary,.btn-ghost,.btn-terminal,.share-button,.theme-toggle').forEach(function (el) {
        el.addEventListener('mousemove', function (e) { var r = el.getBoundingClientRect(), x = (e.clientX - (r.left + r.width / 2)) / r.width, y = (e.clientY - (r.top + r.height / 2)) / r.height; el.style.transform = 'translate(' + x * 7 + 'px,' + y * 5 + 'px)' });
        el.addEventListener('mouseleave', function () { el.style.transform = '' })
    });
})();

/* Konami-style easter egg. */
(function () {
    var code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'], i = 0;
    document.addEventListener('keydown', function (e) { if (e.key === code[i]) { i++; if (i === code.length) { i = 0; document.body.classList.add('easter-egg'); setTimeout(function () { document.body.classList.remove('easter-egg') }, 4200) } } else { i = e.key === code[0] ? 1 : 0 } })
})();

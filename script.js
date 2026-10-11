/* ============================================================
   WEB PROFILE TEMPLATE - SCRIPT
   UniEspinal · Técnico Profesional en Programación Web

   THIS IS THE FILE YOU WILL WORK ON THE MOST.

   Below there are two dictionaries: ES and EN.
   They have exactly the same keys, but different texts.

   IMPORTANT: the English version is NOT a translation of the
   Spanish version. A professional profile in English follows
   different rules. Read NOTES.md before you write it.
   ============================================================ */


/* ------------------------------------------------------------
   1. SPANISH TEXTS
   ------------------------------------------------------------ */
const ES = {
  "nav.home":      "INICIO",
  "nav.about":     "SOBRE MÍ",
  "nav.skills":    "HABILIDADES",
  "nav.resume":    "FORMACIÓN",
  "nav.portfolio": "PROYECTOS",
  "nav.contact":   "CONTACTO",

  "hero.role": "Estudiante de Programación Web",

  "about.title":          "Sobre Mí",
  "about.text":           "Soy estudiante de Técnico Profesional en Programación Web en UniEspinal y estoy fortaleciendo mis conocimientos en desarrollo de aplicaciones web. Me interesa crear soluciones útiles y funcionales; actualmente trabajo en AgroSense, un proyecto académico orientado al monitoreo de la humedad del suelo para apoyar el cuidado de los cultivos.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Espinal, Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (A2)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "Estudiante; abierta a oportunidades de aprendizaje",
  "about.interestsTitle": "Intereses",

  "interest.1": "PROGRAMACIÓN",
  "interest.2": "DESARROLLO WEB",
  "interest.3": "TECNOLOGÍA",
  "interest.4": "AGRICULTURA DIGITAL",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Aprendizaje y colaboración",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés técnico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia académica",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Estudio fundamentos de programación y desarrollo web. En mis actividades académicas practico la creación de aplicaciones, el uso de herramientas de desarrollo y la organización de proyectos.",
  "edu.2.title": "Formación práctica en desarrollo web",
  "edu.2.text":  "Continúo fortaleciendo mis conocimientos mediante ejercicios y proyectos académicos, especialmente en tecnologías para construir aplicaciones web.",

  "exp.1.title": "Desarrollo de AgroSense",
  "exp.1.text":  "Trabajo en un proyecto académico para desarrollar una plataforma que permita consultar información de cultivos y monitorear la humedad del suelo. La propuesta contempla sensores, almacenamiento de mediciones, gráficas históricas y alertas.",
  "exp.2.title": "Práctica de herramientas web",
  "exp.2.text":  "Como parte de mi aprendizaje, practico el uso de Laravel, PHP, bases de datos y herramientas de desarrollo para comprender cómo se construye y organiza una aplicación web.",

  "portfolio.title": "Proyecto académico",
  "project.1.title": "AgroSense",
  "project.1.text":  "Plataforma web en desarrollo · Laravel, PHP y base de datos",
  "project.2.title": "AgroSense: monitoreo del suelo",
  "project.2.text":  "Propuesta de seguimiento de humedad, historial de mediciones y alertas para el cuidado de los cultivos",
  "project.3.title": "AgroSense: gestión de información",
  "project.3.text":  "Diseño de una plataforma para consultar información relacionada con los cultivos",

  "contact.title":         "Contacto",
  "contact.intro":         "¿Te interesa conocer mi proceso de aprendizaje o mi proyecto AgroSense? Puedes escribirme por correo.",
  "contact.emailLabel":    "Correo",
  "contact.linkedinValue": "Perfil de LinkedIn no disponible",

  "footer.note": "Faizury Briyith Vera Santofimio · Técnico Profesional en Programación Web · UniEspinal"
};


/* ------------------------------------------------------------
   2. ENGLISH TEXTS

   Before writing this section, remember:
   - Use action verbs: built, configured, fixed, tested, supported.
   - Do not include age, marital status or a home address.
   - Do not translate word by word. Rewrite.
   ------------------------------------------------------------ */
const EN = {
  "nav.home":      "HOME",
  "nav.about":     "ABOUT",
  "nav.skills":    "SKILLS",
  "nav.resume":    "EDUCATION",
  "nav.portfolio": "PROJECT",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Programming Student",

  "about.title":          "About Me",
  "about.text":           "I am studying for a Professional Technician qualification in Web Programming at UniEspinal and building my skills in web application development. I am interested in creating useful, functional solutions. I am currently working on AgroSense, an academic project focused on soil-moisture monitoring to support crop care.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Espinal, Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (A2)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Student; open to learning opportunities",
  "about.interestsTitle": "Interests",

  "interest.1": "PROGRAMMING",
  "interest.2": "WEB DEVELOPMENT",
  "interest.3": "TECHNOLOGY",
  "interest.4": "DIGITAL AGRICULTURE",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "Learning and collaboration",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Technical English",

  "resume.title":      "Education and academic experience",
  "resume.education":  "Education",
  "resume.experience": "Academic experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "I study programming fundamentals and web development. Through academic work, I practise building applications, using development tools, and organizing projects.",
  "edu.2.title": "Practical web development learning",
  "edu.2.text":  "I continue developing my skills through exercises and academic projects, particularly with technologies used to build web applications.",

  "exp.1.title": "AgroSense development",
  "exp.1.text":  "I am working on an academic project for a platform that provides crop information and monitors soil moisture. The proposal includes sensors, measurement storage, historical charts, and alerts.",
  "exp.2.title": "Web development practice",
  "exp.2.text":  "As part of my learning, I practise using Laravel, PHP, databases, and development tools to understand how web applications are built and organized.",

  "portfolio.title": "Academic project",
  "project.1.title": "AgroSense",
  "project.1.text":  "Web platform in development · Laravel, PHP, and database",
  "project.2.title": "AgroSense: soil monitoring",
  "project.2.text":  "Proposed soil-moisture tracking, measurement history, and alerts to support crop care",
  "project.3.title": "AgroSense: information management",
  "project.3.text":  "Platform design for viewing crop-related information",

  "contact.title":         "Contact",
  "contact.intro":         "Would you like to learn about my work or my AgroSense project? You can contact me by email.",
  "contact.emailLabel":    "Email",
  "contact.linkedinValue": "LinkedIn profile not available",

  "footer.note": "Faizury Briyith Vera Santofimio · Professional Technician in Web Programming · UniEspinal"
};


/* ============================================================
   3. LANGUAGE SWITCHER
   You do not need to change the code below.
   ============================================================ */

const DICCIONARIOS = { es: ES, en: EN };
let idiomaActual = "es";

function aplicarIdioma(idioma) {
  const textos = DICCIONARIOS[idioma];
  if (!textos) return;

  document.querySelectorAll("[data-i18n]").forEach(elemento => {
    const clave = elemento.getAttribute("data-i18n");
    if (textos[clave] !== undefined) {
      elemento.textContent = textos[clave];
    } else {
      console.warn("Missing translation key:", clave);
    }
  });

  document.documentElement.lang = idioma;

  const boton = document.getElementById("btn-idioma");
  if (boton) {
    const otro = idioma === "es" ? "en" : "es";
    boton.innerHTML =
      '<span class="idioma-activo">'   + idioma.toUpperCase() + '</span>' +
      '<span class="idioma-sep">/</span>' +
      '<span class="idioma-inactivo">' + otro.toUpperCase()   + '</span>';
    boton.setAttribute("aria-label",
      idioma === "es" ? "Switch to English" : "Cambiar a español");
  }

  idiomaActual = idioma;
}

function cambiarIdioma() {
  aplicarIdioma(idiomaActual === "es" ? "en" : "es");
}


/* ============================================================
   4. RESPONSIVE MENU
   ============================================================ */

let menuVisible = false;

function mostrarOcultarMenu() {
  const nav = document.getElementById("nav");
  menuVisible = !menuVisible;
  nav.className = menuVisible ? "responsive" : "";
}

function cerrarMenu() {
  document.getElementById("nav").className = "";
  menuVisible = false;
}


/* ============================================================
   5. SKILL BARS

   The width comes from the data-percent attribute in index.html.
   You can add or remove skills freely: this code does not depend
   on how many there are.
   ============================================================ */

function animarHabilidades() {
  const barras = document.querySelectorAll(".progreso");

  const mostrar = barra => {
    const porcentaje = barra.getAttribute("data-percent") || "0";
    barra.style.width = porcentaje + "%";
    const etiqueta = barra.querySelector("span");
    if (etiqueta) etiqueta.textContent = porcentaje + "%";
  };

  if (!("IntersectionObserver" in window)) {
    barras.forEach(mostrar);
    return;
  }

  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        mostrar(entrada.target);
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.4 });

  barras.forEach(barra => observador.observe(barra));
}


/* ============================================================
   6. START
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  aplicarIdioma("es");
  animarHabilidades();
});

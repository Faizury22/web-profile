
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
  "about.text":           "Soy estudiante de Técnico Profesional en Programación Web en UniEspinal. Me interesa el desarrollo de aplicaciones web, la programación y las bases de datos. Actualmente trabajo en AgroSense, mi proyecto académico, una plataforma web orientada a la gestión de información de cultivos y al monitoreo de la humedad del suelo.",
  "about.infoTitle":      "Información",
  "about.labelLocation":  "Ubicación",
  "about.valueLocation":  "Espinal, Tolima, Colombia",
  "about.labelEmail":     "Correo",
  "about.labelLanguages": "Idiomas",
  "about.valueLanguages": "Español (nativo) · Inglés (A2)",
  "about.labelStatus":    "Disponibilidad",
  "about.valueStatus":    "En formación académica",
  "about.interestsTitle": "Intereses",

  "interest.1": "PROGRAMACIÓN",
  "interest.2": "DESARROLLO WEB",
  "interest.3": "BASES DE DATOS",
  "interest.4": "AGRICULTURA DIGITAL",

  "skills.title":        "Habilidades",
  "skills.technical":    "Habilidades técnicas",
  "skills.professional": "Habilidades profesionales",
  "skill.support":       "Aprendizaje continuo",
  "skill.teamwork":      "Trabajo en equipo",
  "skill.problem":       "Resolución de problemas",
  "skill.english":       "Inglés básico",

  "resume.title":      "Formación y experiencia",
  "resume.education":  "Formación",
  "resume.experience": "Experiencia académica",

  "edu.1.title": "Técnico Profesional en Programación Web",
  "edu.1.text":  "Actualmente curso este programa en UniEspinal. Mi formación incluye el aprendizaje de programación, desarrollo web, bases de datos y herramientas para crear aplicaciones.",

  "edu.2.title": "Aprendizaje práctico en programación",
  "edu.2.text":  "Refuerzo los conocimientos adquiridos en mi formación mediante ejercicios y prácticas académicas de desarrollo web. Esta descripción corresponde a mi proceso de aprendizaje, no a una certificación adicional.",

  "exp.1.title": "Desarrollo del proyecto AgroSense",
  "exp.1.text":  "Desarrollo un proyecto académico que busca facilitar la consulta de información de cultivos y el monitoreo de la humedad del suelo mediante sensores. La propuesta contempla el almacenamiento de mediciones, gráficas históricas y alertas sobre los niveles de humedad.",

  "exp.2.title": "Aprendizaje aplicado a AgroSense",
  "exp.2.text":  "En este mismo proyecto aplico y fortalezco mis conocimientos de desarrollo web, programación y bases de datos. AgroSense es mi proyecto académico principal; no se trata de una experiencia laboral independiente.",

  "portfolio.title": "Mi proyecto académico",
  "project.1.title": "AgroSense",
  "project.1.text":  "Plataforma web en desarrollo para gestionar información de cultivos y consultar el estado de la humedad del suelo.",

  "project.2.title": "Monitoreo de humedad del suelo",
  "project.2.text":  "Funcionalidad propuesta dentro de AgroSense para registrar mediciones de sensores y facilitar el seguimiento de los niveles de humedad.",

  "project.3.title": "Historial y alertas",
  "project.3.text":  "Funcionalidades contempladas en AgroSense para consultar mediciones anteriores mediante gráficas y recibir alertas cuando la humedad sea demasiado baja o alta.",

  "contact.title":         "Contacto",
  "contact.intro":         "Si deseas conocer más sobre mi formación en programación web o sobre AgroSense, puedes contactarme por correo electrónico.",
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
  "nav.about":     "ABOUT ME",
  "nav.skills":    "SKILLS",
  "nav.resume":    "EDUCATION",
  "nav.portfolio": "PROJECT",
  "nav.contact":   "CONTACT",

  "hero.role": "Web Programming Student",

  "about.title":          "About Me",
  "about.text":           "I am studying for a Professional Technician qualification in Web Programming at UniEspinal. I am interested in web application development, programming, and databases. I am currently working on AgroSense, my academic project: a web platform focused on crop information management and soil-moisture monitoring.",
  "about.infoTitle":      "Information",
  "about.labelLocation":  "Location",
  "about.valueLocation":  "Espinal, Tolima, Colombia",
  "about.labelEmail":     "Email",
  "about.labelLanguages": "Languages",
  "about.valueLanguages": "Spanish (native) · English (A2)",
  "about.labelStatus":    "Availability",
  "about.valueStatus":    "Currently studying",
  "about.interestsTitle": "Interests",

  "interest.1": "PROGRAMMING",
  "interest.2": "WEB DEVELOPMENT",
  "interest.3": "DATABASES",
  "interest.4": "DIGITAL AGRICULTURE",

  "skills.title":        "Skills",
  "skills.technical":    "Technical skills",
  "skills.professional": "Professional skills",
  "skill.support":       "Continuous learning",
  "skill.teamwork":      "Teamwork",
  "skill.problem":       "Problem solving",
  "skill.english":       "Basic English",

  "resume.title":      "Education and experience",
  "resume.education":  "Education",
  "resume.experience": "Academic experience",

  "edu.1.title": "Professional Technician in Web Programming",
  "edu.1.text":  "I am currently studying this programme at UniEspinal. My education includes programming, web development, databases, and tools for building applications.",

  "edu.2.title": "Practical programming learning",
  "edu.2.text":  "I reinforce what I learn through academic exercises and web development practice. This describes my learning process, not an additional certification.",

  "exp.1.title": "AgroSense project development",
  "exp.1.text":  "I am developing an academic project intended to make crop information available and monitor soil moisture using sensors. The proposal includes storing measurements, displaying historical charts, and providing alerts about moisture levels.",

  "exp.2.title": "Learning applied to AgroSense",
  "exp.2.text":  "Through this same project, I apply and strengthen my knowledge of web development, programming, and databases. AgroSense is my main academic project, not a separate work experience.",

  "portfolio.title": "My academic project",
  "project.1.title": "AgroSense",
  "project.1.text":  "Web platform in development for managing crop information and checking soil-moisture conditions.",

  "project.2.title": "Soil-moisture monitoring",
  "project.2.text":  "A proposed AgroSense feature for recording sensor measurements and tracking soil-moisture levels.",

  "project.3.title": "History and alerts",
  "project.3.text":  "Planned AgroSense features for reviewing previous measurements through charts and receiving alerts when moisture levels are too low or too high.",

  "contact.title":         "Contact",
  "contact.intro":         "To learn more about my web programming studies or AgroSense, you can contact me by email.",
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

/* ════════════════════════════════════════════════════════
   i18n.js
   ────────────────────────────────────────────────────────
   ✏️ AJUSTE: el sitio ya no tiene selector de idioma ni
   traducción al inglés (se eliminó por pedido explícito).
   Este archivo se conserva —con el mismo nombre y la misma
   API (t(), applyI18n())— porque main.js y todas las páginas
   de proyecto lo siguen usando como fuente única de los
   textos fijos de la interfaz (vía atributos data-i18n en el
   HTML). Así se evita reescribir a mano decenas de textos
   repartidos en index.html y en cada página de proyecto.

   Ya NO existe: diccionario en inglés, botón #lang-toggle,
   setLanguage()/toggleLanguage(), localStorage de idioma, y
   el evento 'languagechange'. Todo el sitio queda fijo en
   español.
════════════════════════════════════════════════════════ */

const translations = {
  // ── Top bar / nav principal ──
  nav_home: 'HOME',
  nav_projects: 'PROJECTS',
  nav_graphics: 'GRAPHICS',
  nav_texts: 'TEXTS',
  nav_workshops: 'LABORATORIES',
  nav_research: 'RESEARCH',
  nav_about: 'ABOUT+STATEMENT',
  menu_toggle: 'Menú',

  // ── Buscador ──
  nav_search_placeholder: 'Buscar…',
  proyectos_search_placeholder: 'Buscar por palabra clave, año, tag o día…',
  search_no_results: 'Sin resultados',

  // ── Home ──
  home_view_map: 'Mapa de exploración',
  home_view_about: 'Sobre mí',

  // ── Proyectos ──
  proyectos_title: 'Proyectos',
  proyectos_intro_text: 'Tres áreas de trabajo atraviesan mi práctica. Cada una agrupa proyectos con una pregunta o método en común — haz clic en cualquiera para filtrar la grilla.',
  chip_all: 'Todos',
  chip_invisible_tech: 'Invisible Technologies',
  chip_digital_eco: 'Digital Ecologies',
  chip_social_labs: 'Social Interfaces',

  // ── Texts ──
  texts_title: 'Texts',
  texts_intro: 'Próximas exposiciones, residencias y eventos.',

  // ── Research / Workshops (placeholder) ──
  research_title: 'Research',
  under_construction: 'En construcción',
  workshops_title: 'Laboratories',

  // ── About ──
  about_title: 'Bio',
  about_bio_p1: 'Soy Natalia Cabrera, artista de medios, diseñadora XR y cineasta. Mi trabajo une arte, tecnología y ecología a través de experiencias XR, instalaciones interactivas, inteligencia artificial y arte textil. Exploro formas de relación entre lo humano y lo no-humano desarrollando proyectos que combinan entornos inmersivos, datos sensoriales y materiales físicos. Mi trabajo se ha presentado en contextos de arte, ciencia y cine, incluyendo el Sundance Film Festival, la Bienal de Venecia, CPH:DOX, Berlin Science Week, la Bienal Chilena de Artes Mediales, el Festival de la Imagen, entre otros. Soy cofundadora y directora creativa de Nanai Studio, un espacio interdisciplinario centrado en arte, tecnología y naturaleza. Actualmente vivo entre Barcelona, Santiago y el internet.',
  about_bio_p2: 'Ha participado en residencias artísticas en Latinoamérica y Europa.',
  about_quote: 'Una forma de aprender desde cero a cuidar los propios sueños.',
  about_cv_link: 'Puedes ver mi CV aquí',

  // ── Footer ──
  footer_handcrafted: 'Sitio hecho a mano',
  footer_updated: 'Actualizado 07-28-26',
  footer_location: 'Basada en Los Lagos, CL',

  // ── Cards (generadas dinámicamente por main.js) ──
  card_view_project: 'Ver proyecto →',
  card_no_image: 'sin imagen',

  // ── Misceláneo ──
  portrait_label: 'retrato',
  page_title: 'Camila S Caicedo - Portfolio',

  // ── Home: tercera opción del switch (antes "grid", ahora lista editorial) ──
  home_view_grid: 'Índice',
  grid_no_image: 'sin imagen',

  // ── Exploration Map: categorías principales (burbujas padre) ──
  map_cat_projects: 'PROJECTS',
  map_cat_graphics: 'GRAPHICS',
  map_cat_texts: 'TEXTS',
  map_cat_workshops: 'LABORATORIES',
  map_cat_research: 'RESEARCH',

  // ── Estados de carga ──
  loading_label: 'Cargando…',
  back_to_portfolio: '← volver al portafolio',
};

/* Helper para pedir un texto desde JS (contenido dinámico).
   Si la clave no existe, devuelve la clave misma para que el
   faltante sea visible y fácil de detectar. */
function t(key) {
  return translations[key] || key;
}

/* Aplica los textos fijos a cualquier nodo del DOM marcado con
   data-i18n / data-i18n-placeholder / data-i18n-title. Se llama
   una sola vez por cada bloque de contenido que main.js genera
   (nav, cards, proyecto cargado por fetch, etc.) — ya no hay que
   volver a llamarla al cambiar de idioma porque el idioma ya
   no cambia. */
function applyI18n(root) {
  root = root || document;
  root.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  root.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });
  root.querySelectorAll('[data-i18n-title]').forEach(el => {
    el.title = t(el.dataset.i18nTitle);
  });
  if (root.matches) {
    if (root.matches('[data-i18n]')) root.textContent = t(root.dataset.i18n);
    if (root.matches('[data-i18n-placeholder]')) root.placeholder = t(root.dataset.i18nPlaceholder);
    if (root.matches('[data-i18n-title]')) root.title = t(root.dataset.i18nTitle);
  }
}

/* Aplica los textos apenas carga el DOM (antes esto lo hacía
   setLanguage(), que ya no existe) y fija <html lang="es">. */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('lang', 'es');
  applyI18n(document);
  document.title = t('page_title');
});

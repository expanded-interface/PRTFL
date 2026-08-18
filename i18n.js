/* ════════════════════════════════════════════════════════
   i18n.js
   ────────────────────────────────────────────────────────
   ✏️ El sitio no tiene selector de idioma ni traducción
   multi-idioma (se eliminó en una iteración anterior). Este
   archivo se conserva —con el mismo nombre y la misma API
   (t(), applyI18n())— porque main.js y todas las páginas de
   proyecto lo siguen usando como fuente ÚNICA de los textos
   fijos de la interfaz (vía atributos data-i18n en el HTML).
   Así se evita repetir a mano los mismos textos en index.html
   y en cada página de proyecto. El idioma de la interfaz es
   inglés en su totalidad; el contenido específico de cada
   proyecto (textos, documentación, investigación) que esté
   escrito en español se mantiene tal cual — no vive en este
   diccionario, sino directamente en el HTML de cada proyecto.

   ✏️ LIMPIEZA: se quitaron las claves que solo alimentaban
   páginas ya removidas (Projects/Texts/Workshops como
   landing pages, el sistema anterior de burbujas por
   categoría, y las cards con imagen del grid de Projects) —
   ver README para más contexto de qué se eliminó y por qué.
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
  menu_toggle: 'Menu',

  // ── Buscador ──
  nav_search_placeholder: 'Search…',

  // ── Home ──
  home_view_map: 'Exploration map',
  home_view_grid: 'Index',
  home_view_about: 'About',

  // ── Research / Workshops (placeholder) ──
  research_title: 'Research',
  under_construction: 'Under construction',

  // ── About ──
  about_title: 'Bio',
  about_bio_p1: "I'm Natalia Cabrera media artist, XR designer and filmmaker. My work brings together art, technology and ecology through XR experiences, interactive installations, artificial intelligence and textile art. I explore ways of relating between the human and the non-human by developing projects that combine immersive environments, sensory data, and physical materials. My work has been presented in contexts of art, science, and cinema, including Sundance Film Festival, Venice Biennale, CPH:DOX, Berlin Science Week, the Chilean Biennial of Media Arts, Festival de la Imagen, among others. I'm the co-founder and creative director of Nanai Studio, an interdisciplinary space focused on art, technology, and nature. I currently live between Barcelona, Santiago, and the internet.",
  about_bio_p2: "She has taken part in artist residencies across Latin America and Europe.",
  about_quote: "A way of learning, from scratch, to take care of one's own dreams.",
  about_cv_link: 'You can check my CV here',

  // ── Footer ──
  footer_updated: 'Updated 07-28-26',
  footer_location: 'Based in Los Lagos, CL',

  // ── Misceláneo ──
  portrait_label: 'portrait',
  page_title: 'Camila S Caicedo - Portfolio',

  // ── Estados de carga ──
  loading_label: 'Loading…',
  back_to_portfolio: '← back to portfolio',
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
   (nav, listas, proyecto cargado por fetch, etc.) — no hay
   selector de idioma, así que esto corre una sola vez por
   bloque de contenido nuevo. */
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

/* Aplica los textos apenas carga el DOM y fija <html lang="en">
   (la interfaz del sitio es en inglés en su totalidad). */
document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.setAttribute('lang', 'en');
  applyI18n(document);
  document.title = t('page_title');
});
